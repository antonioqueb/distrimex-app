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
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed text-xs sm:text-sm">
        <thead>
          <tr className="bg-primary text-white">
            {columnsToShow.includes('adlCode') && <th className="w-1/12 px-1 sm:px-2 py-1 text-left">CADL</th>}
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
            {columnsToShow.includes('productPrice') && <th className="w-1/12 px-1 sm:px-2 py-1 text-right">PRECIO</th>}
            <th className="w-1/12 px-1 sm:px-2 py-1 text-right">VALOR</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <CollapsibleTableRow key={index} item={item} columnsToShow={columnsToShow} />
          ))}
          <tr className="bg-primary text-white">
            <td colSpan={columnsToShow.length} className="px-1 sm:px-4 py-3 text-right font-bold">Total:</td>
            <td className="py-3 text-right font-extrabold pr-1 sm:pr-4 text-lg">
              ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
