import { useState, useMemo } from 'react';
import CollapsibleTableRow from "@/components/CollapsibleTableRow";

const InventoryTable = ({ filteredData, totalValue, selectedValues }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const columnsToShow = useMemo(() => {
    if (selectedValues.length > 0) {
      return ['adlCode', 'description', 'category', 'businessUnit', ...selectedValues, 'total', 'uMeasure', 'productPrice'];
    }
    return ['adlCode', 'description', 'category', 'businessUnit', 'pcam', 'lpz', 'nac', 'uni', 'pnc', 'inventarioCampeche', 'tol', 'inventarioAdl', 'total', 'uMeasure', 'productPrice'];
  }, [selectedValues]);

  return (
    <div> 
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-primary/10 dark:bg-gray-800">
            {columnsToShow.includes('adlCode') && <th className="px-8 py-3 text-left">CADL</th>}
            {columnsToShow.includes('description') && <th className="px-4 py-3 text-left">DESCRIPCIÓN</th>}
            {columnsToShow.includes('category') && <th className="px-2 py-3 text-left">CATEGORIA</th>}
            {columnsToShow.includes('businessUnit') && <th className="px-2 py-3 text-left">U.N</th>}
            {columnsToShow.includes('pcam') && <th className="px-4 py-3 text-right">PCAM</th>}
            {columnsToShow.includes('lpz') && <th className="px-4 py-3 text-right">LPZ</th>}
            {columnsToShow.includes('nac') && <th className="px-4 py-3 text-right">NAC</th>}
            {columnsToShow.includes('uni') && <th className="px-4 py-3 text-right">UNI</th>}
            {columnsToShow.includes('pnc') && <th className="px-4 py-3 text-right">PNC</th>}
            {columnsToShow.includes('inventarioCampeche') && <th className="px-8 py-3 text-right">ICAMPECHE</th>}
            {columnsToShow.includes('tol') && <th className="px-4 py-3 text-right">TOL</th>}
            {columnsToShow.includes('inventarioAdl') && <th className="px-4 py-3 text-right">IADL</th>}
            {columnsToShow.includes('total') && <th className="px-6 py-3 text-right">TOTAL</th>}
            {columnsToShow.includes('uMeasure') && <th className="px-2 py-3 text-left">UM</th>}
            {columnsToShow.includes('productPrice') && <th className="px-6 py-3 text-right">PRECIO</th>}
            <th className="px-4 py-3 text-right">VALOR</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <CollapsibleTableRow key={index} item={item} columnsToShow={columnsToShow} />
          ))}
          <tr className="bg-primary/10 dark:bg-gray-800">
            <td colSpan={columnsToShow.length} className="px-4 py-3 text-right font-bold">Total:</td>
            <td className="px-4 py-3 text-right font-bold">
              ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-300 disabled:bg-gray-200 dark:bg-gray-800"
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-300 disabled:bg-gray-200 dark:bg-gray-800"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default InventoryTable;
