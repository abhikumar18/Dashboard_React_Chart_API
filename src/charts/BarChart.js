import React from 'react';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {

    var data = 
    {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2
        }]
    };
    var options = {
        maintainAspectRatio:false,
        scales: 
        {
          y: 
          {
            beginAtZero: true
          }
        },
        legend:{
            labels:{
                fontSize:26
            }
        },
        backgroundColor: '#FFB1C1',
        borderColor: '#FF6384'
      }

  return (
    <div>
        <Bar 
        data={data}
        height={400}
        options={options}
        />
    </div>
  )
}

export default BarChart