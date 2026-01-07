// import React from 'react'
// import { CChartBar } from '@coreui/react-chartjs'
// import { getStyle } from '@coreui/utils'
// import { CCard, CCardBody } from '@coreui/react'

// const orderStatusData = {
//   PAYMENT_CAPTURED: 98197,
//   IN_PROGRESS: 10952,
//   PAYMENT_NOT_AUTHORIZED: 10788,
//   COMPLETED: 2592,
//   CANCELLED: 1452,
//   RETURNED: 1695,
//   BACK_ORDER: 737,
//   PAYMENT_NOT_CAPTURED: 940,
//   PARTIALLY_SHIPPED_BACK_ORDER: 1131,
//   OTHERS: 1549, // grouped
// }

// const STATUS_COLORS = {
//   PAYMENT_CAPTURED: '--cui-success',
//   IN_PROGRESS: '--cui-info',
//   PAYMENT_NOT_AUTHORIZED: '--cui-danger',
//   COMPLETED: '--cui-primary',
//   CANCELLED: '--cui-warning',
//   RETURNED: '--cui-secondary',
//   BACK_ORDER: '--cui-dark',
//   PAYMENT_NOT_CAPTURED: '--cui-danger',
//   PARTIALLY_SHIPPED_BACK_ORDER: '--cui-warning',
//   OTHERS: '--cui-light',
// }

// const OrderStatusStackedBar = () => {
//   const totalOrders = Object.values(orderStatusData).reduce((a, b) => a + b, 0)

//   const datasets = Object.entries(orderStatusData).map(([status, count]) => ({
//     label: status.replaceAll('_', ' '),
//     data: [count],
//     backgroundColor: `rgba(${getStyle(`${STATUS_COLORS[status]}-rgb`)}, .85)`,
//     borderWidth: 0,
//   }))

//   return (
//     <CChartBar
//       data={{
//         labels: ['Orders'],
//         datasets,
//       }}
//       options={{
//         indexAxis: 'y',
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//           legend: { display: false },
//           tooltip: {
//             callbacks: {
//               label: (ctx) => {
//                 const value = ctx.raw
//                 const percent = ((value / totalOrders) * 100).toFixed(1)
//                 return `${ctx.dataset.label}: ${value.toLocaleString()} (${percent}%)`
//               },
//             },
//           },
//         },
//         scales: {
//           x: {
//             stacked: true,
//             ticks: { display: false },
//             grid: { display: false },
//           },
//           y: {
//             stacked: true,
//             ticks: { display: false },
//             grid: { display: false },
//           },
//         },
//       }}
//     />
//   )
// }

// export default OrderStatusStackedBar

import React from 'react'
import { CChartDoughnut } from '@coreui/react-chartjs'

// const deliveryStatusData = [
//   { title: 'Shipped', value: 96451, color: '#198754' },
//   { title: 'In Progress', value: 12509, color: '#0dcaf0' },
//   { title: 'Picked', value: 2587, color: '#0d6efd' },
//   { title: 'Part Shipped', value: 2052, color: '#fd7e14' },
//   { title: 'Returned', value: 1695, color: '#dc3545' },
//   { title: 'Cancelled', value: 1460, color: '#dc3545' },
//   { title: 'Partially Returned', value: 1178, color: '#ffc107' },
//   { title: 'Partially Cancelled', value: 11, color: '#6c757d' },
// ]

const orderTypeData = [
  { title: 'BOPIS', value: 42850, color: '#0d6efd' }, // Buy Online, Pick Up in Store
  { title: 'Museum', value: 31520, color: '#198754' },
  { title: 'Backorder', value: 18740, color: '#fd7e14' },
  { title: 'Ship to Home', value: 25490, color: '#0dcaf0' },
  // { title: 'Store Fulfilled', value: 14230, color: '#6f42c1' },
  { title: 'Special Orders', value: 6890, color: '#dc3545' },
]
const OrderStatusDoughnut = () => {
  return (
    <CChartDoughnut
      data={{
        labels: orderTypeData.map((item) => item.title),
        datasets: [
          {
            data: orderTypeData.map((item) => item.value),
            backgroundColor: orderTypeData.map((item) => item.color),
            hoverOffset: 10,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 15,
              padding: 15,
            },
          },
        },
        maintainAspectRatio: false,
      }}
      style={{ height: '300px' }}
    />
  )
}

export default OrderStatusDoughnut
