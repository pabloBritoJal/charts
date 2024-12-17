import React, { useEffect, useRef } from "react";

interface CustomChartProps {
  data: number[]; // Datos para las barras y la línea
  labels: string[]; // Etiquetas del eje X
  barColors?: string[]; // Colores de las barras
  lineColor?: string; // Color de la línea
  width?: number; // Ancho del gráfico
  height?: number; // Altura del gráfico
}

const CustomChart: React.FC<CustomChartProps> = ({
  data,
  labels,
  barColors = ["#008FFB", "#00E396", "#FEB019", "#FF4560"], // Colores por defecto
  lineColor = "#FF7300", // Color de la línea
  width = 600,
  height = 400,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Dimensiones del gráfico
    const padding = 50;
    const barWidth = (width - padding * 2) / data.length - 10;
    const maxValue = Math.max(...data);
    const scaleFactor = (height - padding * 2) / maxValue;

    // Limpiar el canvas
    ctx.clearRect(0, 0, width, height);

    // Dibujar ejes
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    // Eje X
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Eje Y
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding);
    ctx.stroke();

    // Etiquetas del eje Y
    const ticks = 5; // Número de divisiones en el eje Y
    for (let i = 0; i <= ticks; i++) {
      const value = Math.round((maxValue / ticks) * i); // Valor de la etiqueta
      const y = height - padding - (value * scaleFactor);

      // Línea de referencia
      ctx.strokeStyle = "#ddd";
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();

      // Texto de la etiqueta
      ctx.fillStyle = "#000";
      ctx.font = "12px Arial";
      ctx.textAlign = "right";
      ctx.fillText(value.toString(), padding - 10, y + 5);
    }

    // Dibujar las barras y preparar puntos para la línea de tendencia
    const points: { x: number; y: number }[] = [];
    data.forEach((value, index) => {
      const x = padding + index * (barWidth + 10);
      const barHeight = value * scaleFactor;
      const y = height - padding - barHeight;

      // Dibujar barra
      ctx.fillStyle = barColors[index % barColors.length];
      ctx.fillRect(x, y, barWidth, barHeight);

      // Guardar puntos para la línea de tendencia
      points.push({ x: x + barWidth / 2, y });

      // Etiqueta del eje X
      ctx.fillStyle = "#000";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(labels[index], x + barWidth / 2, height - padding + 20);
    });

    // Dibujar la línea de tendencia
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar puntos en la línea de tendencia
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = lineColor;
      ctx.fill();
    });
  }, [data, labels, barColors, lineColor, width, height]);

  return (
    <div style={{ position: "relative", width, height, margin: "auto" }}>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default CustomChart;