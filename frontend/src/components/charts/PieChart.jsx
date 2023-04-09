import React from 'react'
import { Pie } from "react-chartjs-2"


const PieChart = ({ chartData }) => {

    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                data: Object.values(chartData),
                backgroundColor: [
                    "#262626",
                    "#404040",
                    "#595959",
                    "#737373",
                    "#8c8c8c",
                    "#a6a6a6",
                    "#bfbfbf",
                ],
                borderWidth: 2,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      }; 

    return (
        <Pie data={data} options={options} />
    )
}

export default PieChart
