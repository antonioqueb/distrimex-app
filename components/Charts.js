import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

export function BarChart({ data, ...props }) {
  if (!data || data.length === 0) return <div>No hay datos disponibles para el gráfico de barras</div>;

  return (
    <div {...props} className='dark:bg-transparent'>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "14px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

export function PieChart({ data, ...props }) {
  if (!data || data.length === 0) return <div>No hay datos disponibles para el gráfico circular</div>;

  return (
    <div {...props}>
      <ResponsivePie
        data={data}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "14x",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
