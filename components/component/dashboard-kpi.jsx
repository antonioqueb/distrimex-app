'use client';

import { useMemo, useState, useEffect } from 'react';
import FilterDropdown from "@/components/FilterDropdown";
import GroupByDropdown from "@/components/GroupByDropdown";
import InventoryTable from "@/components/InventoryTable";
import FilterIndicators from "@/components/FilterIndicators";
import InventoryGraphics from "@/components/InventoryGraphics";
import { useInventory } from '@/hooks/useInventory';

const groupBy = (array, key) => {
  if (!array || array.length === 0) return {};
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    return result;
  }, {});
};

export default function InventoryPage() {
  const { inventoryData, isLoading, isError } = useInventory();
  const [groupByKey, setGroupByKey] = useState('category');
  const [selectedValues, setSelectedValues] = useState([]);
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!inventoryData) return;

    let newOptions = [];
    if (groupByKey === 'ubicacion') {
      // Generar opciones para ubicaciones específicas
      newOptions = ['pcam', 'lpz', 'nac', 'uni', 'pnc', 'inventarioCampeche', 'tol', 'inventarioAdl'];
    } else {
      // Generar opciones para otras agrupaciones
      newOptions = [...new Set(inventoryData.map(item => item[groupByKey]))];
    }
    setOptions(newOptions);
  }, [inventoryData, groupByKey]);

  const handleSelect = (option) => {
    setSelectedValues(prev =>
      prev.includes(option) ? prev.filter(val => val !== option) : [...prev, option]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSelectedValue = (value) => {
    setSelectedValues(prev => prev.filter(val => val !== value));
  };

  const filteredData = useMemo(() => {
    if (!inventoryData || !Array.isArray(inventoryData)) return [];
    let data = inventoryData;

    // Filtrado por ubicaciones o categorías seleccionadas
    if (selectedValues.length > 0) {
      if (groupByKey === 'ubicacion') {
        data = data.filter(item => 
          selectedValues.some(ubicacion => item[ubicacion] > 0)
        );
      } else {
        data = data.filter(item => selectedValues.includes(item[groupByKey]));
      }
    }

    // Búsqueda en tiempo real
    if (searchTerm) {
      data = data.filter(item =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.adlCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.businessUnit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.uMeasure.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return data;
  }, [inventoryData, groupByKey, selectedValues, searchTerm]);

  const totalCantidad = useMemo(() => {
    return (filteredData || []).reduce((sum, item) => 
      sum + (item.pcam || 0) + (item.lpz || 0) + (item.nac || 0) + (item.uni || 0) + (item.pnc || 0) + (item.inventarioCampeche || 0) + (item.tol || 0) + (item.inventarioAdl || 0), 0
    );
  }, [filteredData]);

  if (isLoading) return <div>Cargando, espere un momento por favor...</div>;
  if (isError) return <div>Error al cargar los datos</div>;

  return (
    <div className="mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-6">Inventario</h1>
      <div className="mb-4 flex space-x-4">
        <GroupByDropdown groupByKey={groupByKey} setGroupByKey={setGroupByKey} />
        <FilterDropdown options={options} selectedValues={selectedValues} handleSelect={handleSelect} />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-zinc-300 rounded px-4 py-2"
        />
      </div>
      <FilterIndicators selectedValues={selectedValues} clearSelectedValue={clearSelectedValue} />
     
      <InventoryTable filteredData={filteredData} totalValue={totalCantidad} selectedValues={selectedValues} />
      {/* <InventoryGraphics /> */}
    </div>
  );
}
