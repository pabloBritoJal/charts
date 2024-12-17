import BarChartRecharts from "./components/BarChartRecharts";

function App() {
  const data = [
    {
      Date: "11-17-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-18-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-19-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-20-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-21-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-22-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-23-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-24-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-25-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-26-2024",
      MmrLogin: 7,
      MmrGetPrice: 7,
      MmrApiErrors: 0,
    },
    {
      Date: "11-27-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-28-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-29-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "11-30-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-01-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-02-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-03-2024",
      MmrLogin: 7,
      MmrGetPrice: 7,
      MmrApiErrors: 0,
    },
    {
      Date: "12-04-2024",
      MmrLogin: 4,
      MmrGetPrice: 5,
      MmrApiErrors: 1,
    },
    {
      Date: "12-05-2024",
      MmrLogin: 3,
      MmrGetPrice: 3,
      MmrApiErrors: 0,
    },
    {
      Date: "12-06-2024",
      MmrLogin: 6,
      MmrGetPrice: 6,
      MmrApiErrors: 0,
    },
    {
      Date: "12-07-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-08-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-09-2024",
      MmrLogin: 4,
      MmrGetPrice: 4,
      MmrApiErrors: 0,
    },
    {
      Date: "12-10-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-11-2024",
      MmrLogin: 2,
      MmrGetPrice: 2,
      MmrApiErrors: 0,
    },
    {
      Date: "12-12-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-13-2024",
      MmrLogin: 171,
      MmrGetPrice: 171,
      MmrApiErrors: 2,
    },
    {
      Date: "12-14-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-15-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
    {
      Date: "12-16-2024",
      MmrLogin: 0,
      MmrGetPrice: 0,
      MmrApiErrors: 0,
    },
  ];
  return (
    <div
      style={{
        padding: "50px 150px",
      }}
    >
      <h2>Graphs</h2>

      <BarChartRecharts
        data={data}
        xAxisLabel="Dates"
        yAxisLabel="Metrics"
        lineColor="#FF7300"
        barColor="#008FFB"
        barSize={50}
        height={400}
      />
    </div>
  );
}
export default App;
