import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ReactChart } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

// Registrar los elementos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Props del componente
interface BarChartChartJSProps {
  data: number[]; // Datos dinámicos
  labels: string[]; // Etiquetas del eje X
  barColors?: string[]; // Colores personalizados para las barras
  lineColor?: string; // Color de la línea
  title?: string; // Título del gráfico
  height?: string | number; // Altura del contenedor
}

const BarChartChartJS: React.FC<BarChartChartJSProps> = ({
  data,
  labels,
  barColors = ["#008FFB", "#00E396", "#FEB019", "#FF4560"], // Colores por defecto
  lineColor = "#FF4560", // Color por defecto de la línea
  //title = "Gráfico de Barras y Línea de Tend", // Título por defecto
  height = 400, // Altura por defecto
}) => {
  // Configuración dinámica de los datos
  const chartData: ChartData<"bar" | "line", number[], string> = {
    labels, // Etiquetas dinámicas
    datasets: [
      {
        type: "bar" as const,
        label: "Values",
        data, // Datos dinámicos
        backgroundColor: barColors, // Colores dinámicos para las barras
        borderColor: barColors.map((color) => `${color}AA`), // Bordes dinámicos
        borderWidth: 2,
      },
      {
        type: "line" as const,
        label: "Tend",
        data, // Datos dinámicos para la línea
        borderColor: lineColor, // Color dinámico de la línea
        borderWidth: 3,
        pointBackgroundColor: "#FFFFFF", // Fondo de los puntos
        pointBorderColor: lineColor, // Borde de los puntos
        tension: 0.4, // Línea curva
      },
    ],
  };

  // Configuración dinámica de las opciones
  const chartOptions: ChartOptions<"bar" | "line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          color: "#333333",
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#546E7A",
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: "#546E7A",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div style={{ height, width: "100%" }}>
      <ReactChart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChartChartJS;