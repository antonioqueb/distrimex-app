import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BarChart, PieChart } from "@/components/Charts";
import { useInventory } from '@/hooks/useInventory';

export default function InventoryGraphics() {
  const { inventoryData, isLoading, isError } = useInventory();

  if (isLoading) return <div>Cargando gráficos...</div>;
  if (isError) return <div>Error al cargar los gráficos</div>;

  // Transformar los datos del inventario para los gráficos
  const barChartData = inventoryData.map(item => ({
    name: item.uMeasure,
    count: item.pcam + item.lpz + item.nac + item.uni + item.pnc + item.inventarioCampeche + item.tol + item.inventarioAdl,
  }));

  const barChartDataSecond = inventoryData.map(item => ({
    name: item.businessUnit,
    count: item.pcam + item.lpz + item.nac + item.uni + item.pnc + item.inventarioCampeche + item.tol + item.inventarioAdl,
  }));
  return (
    <div className="grid gap-6 md:gap-8 px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="dark:bg-zinc-950">
          <CardHeader>
            <CardTitle>Product Quantities</CardTitle>
            <CardDescription>Inventory quantities by product</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={barChartData} className="aspect-[9/4] " />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Value</CardTitle>
            <CardDescription>Inventory value distribution by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={barChartDataSecond} className="aspect-[9/4]" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
