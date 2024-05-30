'use client'

// import { ResponsiveBar } from "@nivo/bar"
// import { ResponsivePie } from "@nivo/pie"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Alcances</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="px-4 py-3 text-left">Producto</th>
              <th className="px-4 py-3 text-left">Unidad de Medida</th>
              <th className="px-4 py-3 text-right">Cantidad</th>
              <th className="px-4 py-3 text-right">Conversión a Paquetes de Cigarros</th>
              <th className="px-4 py-3 text-right">Cobertura (Meses)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3">Producto A</td>
              <td className="px-4 py-3">Unidad</td>
              <td className="px-4 py-3 text-right">50</td>
              <td className="px-4 py-3 text-right">2.5</td>
              <td className="px-4 py-3 text-right">2.5</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3">Producto B</td>
              <td className="px-4 py-3">Caja</td>
              <td className="px-4 py-3 text-right">20</td>
              <td className="px-4 py-3 text-right">1.0</td>
              <td className="px-4 py-3 text-right">1.0</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3">Producto C</td>
              <td className="px-4 py-3">Bolsa</td>
              <td className="px-4 py-3 text-right">100</td>
              <td className="px-4 py-3 text-right">5.0</td>
              <td className="px-4 py-3 text-right">5.0</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3">Producto D</td>
              <td className="px-4 py-3">Litro</td>
              <td className="px-4 py-3 text-right">30</td>
              <td className="px-4 py-3 text-right">1.5</td>
              <td className="px-4 py-3 text-right">1.5</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3">Producto E</td>
              <td className="px-4 py-3">Metro</td>
              <td className="px-4 py-3 text-right">25</td>
              <td className="px-4 py-3 text-right">1.25</td>
              <td className="px-4 py-3 text-right">1.25</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Cantidad por Producto</h2>
          <BarChart className="w-full aspect-[4/3]" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Conversión a Paquetes de Cigarros</h2>
          <PieChart className="w-full aspect-[4/3]" />
        </div>
      </div> */}
    </div>
  )
}

// function BarChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           { name: "Jan", count: 111 },
//           { name: "Feb", count: 157 },
//           { name: "Mar", count: 129 },
//           { name: "Apr", count: 150 },
//           { name: "May", count: 119 },
//           { name: "Jun", count: 72 },
//         ]}
//         keys={["count"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={["#2563eb"]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   )
// }


// function PieChart(props) {
//   return (
//     <div {...props}>
//       <ResponsivePie
//         data={[
//           { id: "Jan", value: 111 },
//           { id: "Feb", value: 157 },
//           { id: "Mar", value: 129 },
//           { id: "Apr", value: 150 },
//           { id: "May", value: 119 },
//           { id: "Jun", value: 72 },
//         ]}
//         sortByValue
//         margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//         cornerRadius={0}
//         padAngle={0}
//         borderWidth={1}
//         borderColor={"#ffffff"}
//         enableArcLinkLabels={false}
//         arcLabel={(d) => `${d.id}`}
//         arcLabelsTextColor={"#ffffff"}
//         arcLabelsRadiusOffset={0.65}
//         colors={["#2563eb"]}
//         theme={{
//           labels: {
//             text: {
//               fontSize: "18px",
//             },
//           },
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }