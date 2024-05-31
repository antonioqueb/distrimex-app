import { useState, useMemo } from 'react';
import CollapsibleTableRow from "@/components/CollapsibleTableRow";

/**
 * Componente InventoryTable
 * @param {Array} filteredData - Datos filtrados para mostrar en la tabla.
 * @param {Array} selectedValues - Columnas seleccionadas por el usuario para mostrar en la tabla.
 */
const InventoryTable = ({ filteredData, selectedValues }) => {
  // Estado para la página actual de la paginación
  const [currentPage, setCurrentPage] = useState(1);
  // Número de filas por página
  const rowsPerPage = 8;

  // Total de páginas basado en la longitud de los datos filtrados
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Función para manejar el cambio de página
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // Datos paginados según la página actual
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Columnas a mostrar en la tabla, dependientes de selectedValues
  const columnsToShow = useMemo(() => {
    if (selectedValues.length > 0) {
      // Agregar columnas adicionales
      return ['adlCode', 'description', 'category', 'businessUnit', ...selectedValues, 'total', 'uMeasure', 'productPrice'];
    }
    return ['adlCode', 'description', 'category', 'businessUnit', 'pcam', 'lpz', 'nac', 'uni', 'pnc', 'inventarioCampeche', 'tol', 'inventarioAdl', 'total', 'uMeasure', 'productPrice'];
  }, [selectedValues]);

  const totalValue = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      let sum = 0;
      // Sumamos los valores de todas las columnas que representan cantidades
      const quantityColumns = ['pcam', 'lpz', 'nac', 'uni', 'pnc', 'inventarioCampeche', 'tol', 'inventarioAdl'];
      quantityColumns.forEach(value => {
        if (item[value]) {
          sum += item[value];
        }
      });
      // Sumamos el total de esta fila multiplicado por el precio del producto
      return acc + sum * item.productPrice;
    }, 0);
  }, [filteredData]);

  // Obtener el total de una fila basada en las columnas seleccionadas
  const getTotalForRow = (item) => {
    return selectedValues.reduce((acc, value) => {
      return acc + (item[value] || 0);
    }, 0);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed text-xs sm:text-sm">
        <thead>
          <tr className="bg-primary text-white">
            {columnsToShow.includes('adlCode') && <th className="w-1/12 px-1 sm:px-8 py-1 text-left">CADL</th>}
            {columnsToShow.includes('description') && <th className="w-2/12 px-1 sm:px-2 py-1 text-left">DESCRIPCIÓN</th>}
            {columnsToShow.includes('category') && <th className="w-1/12 px-1 sm:px-2 py-1 text-left">CATEGORIA</th>}
            {columnsToShow.includes('businessUnit') && <th className="w-1/12 px-1 sm:px-2 py-1 text-left">U.N</th>}
            {columnsToShow.includes('pcam') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">PCAM</th>}
            {columnsToShow.includes('lpz') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">LPZ</th>}
            {columnsToShow.includes('nac') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">NAC</th>}
            {columnsToShow.includes('uni') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">UNI</th>}
            {columnsToShow.includes('pnc') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">PNC</th>}
            {columnsToShow.includes('inventarioCampeche') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">ICAMPECHE</th>}
            {columnsToShow.includes('tol') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">TOL</th>}
            {columnsToShow.includes('inventarioAdl') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">IADL</th>}
            {columnsToShow.includes('total') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">TOTAL</th>}
            {columnsToShow.includes('uMeasure') && <th className="w-1/12 px-1 sm:px-2 py-1 text-left">UM</th>}
            {columnsToShow.includes('productPrice') && <th className="w-1/12 px-1 sm:px-6 py-1 text-right">PRECIO</th>}
            <th className="w-1/12 px-1 sm:px-2 py-1 text-right">VALOR</th>
          </tr>
        </thead>
        <tbody className='border border-black'>
          {paginatedData.map((item, index) => (
            // Renderizar filas colapsables con los datos paginados
            <CollapsibleTableRow key={index} item={{...item, total: getTotalForRow(item)}} columnsToShow={columnsToShow} />
          ))}
         <tr className="bg-primary text-white w-full border border-black">
            <td colSpan={columnsToShow.length} className="px-1 sm:px-4 py-3 text-right font-bold">Total Acumulado:</td>
            <td className="py-3 text-right font-extrabold sm:pr-4 text-lg bg-primary">
              ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
            </td>
         </tr>

        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 sm:px-4 py-2 mx-1 bg-zinc-300 disabled:bg-zinc-200 dark:bg-zinc-800"
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className={`px-2 sm:px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 sm:px-4 py-2 mx-1 bg-zinc-300 disabled:bg-zinc-200 dark:bg-zinc-800"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default InventoryTable;
