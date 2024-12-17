import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Props del componente
interface BarChartApexChartsProps {
  data: number[]; // Datos de las barras y línea
  labels: string[]; // Etiquetas del eje X
  barColors?: string[]; // Colores de las barras (opcional)
  title?: string; // Título del gráfico (opcional)
  yAxisTitle?: string; // Título del eje Y (opcional)
  height?: number; // Altura del gráfico (opcional)
}

const BarChartApexCharts: React.FC<BarChartApexChartsProps> = ({
  data,
  labels,
  barColors = ["#008FFB", "#00E396", "#FEB019", "#FF4560"], // Colores por defecto
  title = "Bar chart", // Título por defecto
  yAxisTitle = "Laues", // Título del eje Y por defecto
  height = 350, // Altura por defecto
}) => {
  // Opciones del gráfico
  const options: ApexOptions = {
    chart: {
      id: "combo-bar-line",
      toolbar: {
        show: false, // Deshabilitar herramientas
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: "50%",
        borderRadius: 10,
      },
    },
    colors: barColors, // Colores dinámicos para las barras
    stroke: {
      width: [0, 2], // Grosor de las barras (0) y la línea (2)
      curve: "smooth", // Línea curva
    },
    xaxis: {
      categories: labels, // Etiquetas dinámicas
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#546E7A"],
        },
      },
    },
    yaxis: {
      title: {
        text: yAxisTitle, // Título dinámico del eje Y
      },
    },
    title: {
      text: title, // Título dinámico del gráfico
      align: "center",
      style: {
        fontSize: "20px",
      },
    },
  };

  // Series dinámicas
  const series: ApexAxisChartSeries = [
    {
      name: "Barras",
      type: "bar",
      data, // Datos dinámicos para las barras
    },
    {
      name: "Tend line",
      type: "line",
      data, // Datos dinámicos para la línea
    },
  ];

  return <Chart options={options} series={series} type="line" height={height} />;
};

export default BarChartApexCharts;