import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'

const groupedOrderStatusData = [
  { group: 'Completed', value: 100790, color: '#198754' },
  { group: 'In Progress', value: 11147, color: '#0d6efd' },
  { group: 'Payment Issues', value: 11728, color: '#ffc107' },
  { group: 'Back Order', value: 2031, color: '#fd7e14' },
  { group: 'Cancelled / Failed', value: 1482, color: '#dc3545' },
  { group: 'Returned', value: 1707, color: '#6f42c1' },
  { group: 'Invalid / Other', value: 2, color: '#adb5bd' },
]

const OrderStatusGroupedBar = () => {
  return (
    <>
      <CChartBar
        data={{
          labels: groupedOrderStatusData.map((item) => item.group),
          datasets: [
            {
              label: 'Orders',
              data: groupedOrderStatusData.map((item) => item.value),
              backgroundColor: groupedOrderStatusData.map((item) => item.color),
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.raw.toLocaleString()} orders`,
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => value.toLocaleString(),
              },
            },
          },
        }}
        style={{ height: '350px' }}
      />
    </>
  )
}

export default OrderStatusGroupedBar
