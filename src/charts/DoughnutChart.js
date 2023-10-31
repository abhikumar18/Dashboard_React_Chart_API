import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChart = () => {

    const [chart,setChart] = useState([]);

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var apiKey = "coinranking9e03f155d9f5ba1b968e285e135d3ab41cf12a7a73264fda";

    useEffect(() => {
        const fetchCoins = async () => {
          await fetch(`${proxyUrl}${baseUrl}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
          })
            .then((response) => {
              if (response.ok) {
                response.json().then((json) => {
                  console.log(json.data);
                  setChart(json.data)
                });
              }
            }).catch((error) => {
              console.log(error);
            });
        };
        fetchCoins()
      }, [baseUrl, proxyUrl, apiKey])

    var data = 
    {
        labels: chart?.coins?.map(item=>item.name),
        datasets: [{
          label: `${chart?.coins?.length} Coins Available`,
          data: chart?.coins?.map(item=>item.price),
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
        <Doughnut 
        data={data}
        height={400}
        options={options}
        />
    </div>
  )
}

export default DoughnutChart;