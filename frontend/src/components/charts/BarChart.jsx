import React from 'react'
import { Bar } from "react-chartjs-2"
import { Chart, PointElement, LineElement, LinearScale} from 'chart.js/auto';


const BarChart = ({ chartData }) => {
    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Published',
                data: Object.values(chartData),
                backgroundColor: "#404040",
                borderWidth: 0,
                barThickness: 10,
                borderRadius: 5
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      };      

    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart
