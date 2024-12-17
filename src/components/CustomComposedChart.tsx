import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// Usamos un tipo genérico en lugar de Record<string, ...>
interface ChartProps<T extends object> {
  data: T[]; // Los datos del gráfico
  width?: number; // Ancho del gráfico
  height?: number; // Altura del gráfico
  xAxisKey: keyof T; // Clave del eje X
  barKey: keyof T; // Clave de los datos de la barra
  barColor?: string; // Color de las barras
  lineKey: keyof T; // Clave de los datos de la línea
  lineColor?: string; // Color de la línea
  margin?: { top?: number; right?: number; bottom?: number; left?: number }; // Margen personalizado
}

const CustomComposedChart = <T extends object>({
  data,
  width = 900,
  height = 400,
  xAxisKey,
  barKey,
  barColor = "#413ea0",
  lineKey,
  lineColor = "#ff7300",
  margin = { top: 20, right: 20, bottom: 20, left: 20 }
}: ChartProps<T>) => {
  return (
    <ComposedChart
      width={width}
      height={height}
      data={data}
      margin={margin}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey={xAxisKey as string} scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={barKey as string} barSize={50} fill={barColor} />
      <Line type="monotone" dataKey={lineKey as string} stroke={lineColor}/>
    </ComposedChart>
  );
};

export default CustomComposedChart;