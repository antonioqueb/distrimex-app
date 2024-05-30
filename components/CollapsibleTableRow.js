import { useState } from 'react';

const CollapsibleTableRow = ({ item, columnsToShow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    adlCode, description, category, businessUnit, pcam, lpz, nac, uni, pnc, inventarioCampeche, tol, inventarioAdl, uMeasure, productPrice
  } = item;

  const total = (pcam || 0) + (lpz || 0) + (nac || 0) + (uni || 0) + (pnc || 0) + (inventarioCampeche || 0) + (tol || 0) + (inventarioAdl || 0);
  const valor = total * productPrice;

  return (
    <>
      <tr onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
        {columnsToShow.includes('adlCode') && <td className="px-4 py-3">{adlCode}</td>}
        {columnsToShow.includes('description') && <td className="px-4 py-3">{description}</td>}
        {columnsToShow.includes('category') && <td className="px-4 py-3">{category}</td>}
        {columnsToShow.includes('businessUnit') && <td className="px-4 py-3">{businessUnit}</td>}
        {columnsToShow.includes('pcam') && <td className="px-4 py-3 text-right">{pcam.toFixed(2)}</td>}
        {columnsToShow.includes('lpz') && <td className="px-4 py-3 text-right">{lpz.toFixed(2)}</td>}
        {columnsToShow.includes('nac') && <td className="px-4 py-3 text-right">{nac.toFixed(2)}</td>}
        {columnsToShow.includes('uni') && <td className="px-4 py-3 text-right">{uni.toFixed(2)}</td>}
        {columnsToShow.includes('pnc') && <td className="px-4 py-3 text-right">{pnc.toFixed(2)}</td>}
        {columnsToShow.includes('inventarioCampeche') && <td className="px-4 py-3 text-right">{inventarioCampeche.toFixed(2)}</td>}
        {columnsToShow.includes('tol') && <td className="px-4 py-3 text-right">{tol.toFixed(2)}</td>}
        {columnsToShow.includes('inventarioAdl') && <td className="px-4 py-3 text-right">{inventarioAdl.toFixed(2)}</td>}
        {columnsToShow.includes('total') && <td className="px-4 py-3 text-right">{total.toFixed(2)}</td>}
        {columnsToShow.includes('uMeasure') && <td className="px-4 py-3">{uMeasure}</td>}
        {columnsToShow.includes('productPrice') && <td className="px-4 py-3 text-right">$ {productPrice}</td>}
        <td className="px-4 py-3 text-right">$ {valor.toFixed(2)}</td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={columnsToShow.length + 1} className="px-4 py-3 text-left">
            {/* Additional details or content can go here if needed */}
          </td>
        </tr>
      )}
    </>
  );
};

export default CollapsibleTableRow;
