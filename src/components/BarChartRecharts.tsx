import React, { useState } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Interfaz para los datos de entrada
interface DataPoint {
  Date: string; // Fecha como cadena
  MmrLogin: number; // Métrica 1
  MmrGetPrice: number; // Métrica 2
  MmrApiErrors: number; // Métrica 3
}

// Props del componente
interface BarChartRechartsProps {
  data: DataPoint[]; // Datos dinámicos para el gráfico
  xAxisLabel?: string; // Etiqueta del eje X
  yAxisLabel?: string; // Etiqueta del eje Y
  lineColor?: string; // Color de la línea
  barColor?: string; // Color uniforme de las barras
  barSize?: number; // Tamaño de las barras
  height?: number; // Altura del contenedor
}

const BarChartRecharts: React.FC<BarChartRechartsProps> = ({
  data,
  xAxisLabel = "Date", // Etiqueta predeterminada del eje X
  yAxisLabel = "Values", // Etiqueta predeterminada del eje Y
  lineColor = "#FF7300", // Color predeterminado de la línea
  barColor = "#8884d8", // Color predeterminado de las barras
  barSize = 50, // Tamaño predeterminado de las barras
  height = 400, // Altura predeterminada
}) => {
  // Estado para la métrica seleccionada
  const [selectedMetric, setSelectedMetric] =
    useState<keyof DataPoint>("MmrLogin");

  // Transformar datos según la métrica seleccionada
  const transformedData = data.map((item) => ({
    name: item.Date, // Usamos "Date" como nombre para el eje X
    value: item[selectedMetric], // Valor dinámico basado en la métrica seleccionada
  }));

  return (
    <div style={{ width: "100%" }}>
      {/* Selector de métricas */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="metricSelector" style={{ marginRight: "10px" }}>
          Select Metric:
        </label>
        <select
          id="metricSelector"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value as keyof DataPoint)}
          style={{
            padding: "5px 10px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="MmrLogin">MmrLogin</option>
          <option value="MmrGetPrice">MmrGetPrice</option>
          <option value="MmrApiErrors">MmrApiErrors</option>
        </select>
      </div>

      {/* Gráfico */}
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={transformedData}>
          {/* Grid con estilo */}
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />

          {/* Eje X */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#546E7A" }}
            label={{
              value: xAxisLabel,
              position: "insideBottom",
              offset: -10,
              style: { fontSize: 12, fill: "#546E7A" },
            }}
          />

          {/* Eje Y */}
          <YAxis
            tick={{ fontSize: 12, fill: "#546E7A" }}
            label={{
              value: yAxisLabel,
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle", fill: "#546E7A" },
            }}
          />

          {/* Tooltips */}
          <Tooltip
            formatter={(value) => [`${value}`, selectedMetric]}
            contentStyle={{ backgroundColor: "#f9f9f9", borderRadius: 5 }}
          />

          {/* Leyenda */}
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ fontSize: "12px", color: "#333333" }}
          />

          {/* Barras */}
          <Bar
            dataKey="value"
            fill={barColor}
            barSize={barSize}
            isAnimationActive={true}
          />

          {/* Línea de tendencia */}
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={3}
            dot={{ r: 5, fill: lineColor }}
            activeDot={{ r: 7, stroke: lineColor, strokeWidth: 2 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartRecharts;
