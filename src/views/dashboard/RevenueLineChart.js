import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'

const lastSixMonths = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']

const revenueData = {
  revenue: [
    412000, // Aug – steady baseline
    438500, // Sep – slight growth
    472300, // Oct – festive lift
    455800, // Nov – post-festive dip
    529400, // Dec – peak season
    498900, // Jan – normalization
  ],
  discountedRevenue: [
    378200, // Aug
    401600, // Sep
    426900, // Oct – higher discounts
    418300, // Nov
    476100, // Dec – aggressive offers
    462700, // Jan
  ],
}

const RevenueLineChart = () => {
  return (
    <CChartLine
      data={{
        labels: lastSixMonths,
        datasets: [
          {
            label: 'Revenue',
            data: revenueData.revenue,
            borderColor: '#0d6efd', // blue
            backgroundColor: 'rgba(13,110,253,0.2)',
            pointBackgroundColor: '#0d6efd',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Revenue (After Discounts)',
            data: revenueData.discountedRevenue,
            borderColor: '#198754', // green
            backgroundColor: 'rgba(25,135,84,0.2)',
            pointBackgroundColor: '#198754',
            tension: 0.4,
            fill: true,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 15,
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => `₹ ${context.raw.toLocaleString()}`,
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => `₹ ${value / 1000}k`,
            },
            grid: {
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        maintainAspectRatio: false,
      }}
      style={{ height: '320px' }}
    />
  )
}

export default RevenueLineChart
