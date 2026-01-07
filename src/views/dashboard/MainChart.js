// import React from 'react'
// import { CChartBar } from '@coreui/react-chartjs'
// import { getStyle } from '@coreui/utils'
// import { CRow, CCol, CProgress, CProgressBar } from '@coreui/react'

// const productData = [
//   { name: 'Mountain Bike X1', sold: 320, target: 350, color: 'success' },
//   { name: 'Road Bike Pro', sold: 280, target: 400, color: 'info' },
//   { name: 'Mountain Bikes', sold: 960, target: 1200, color: 'warning', isRupee: true },
//   { name: 'Kids Bikes', sold: 50, target: 500, color: 'danger' },
// ]

// const MainChart = () => {
//   const labels = productData.map(item => item.name)
//   const salesValues = productData.map(item => item.sold)

//   return (
//     <>
//       {/* === Bar Chart Using Same Data === */}
//       <CChartBar
//         style={{ height: '300px', marginTop: '40px' }}
//         data={{
//           labels,
//           datasets: [
//             {
//               label: 'Sales',
//               backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .7)`,
//               borderColor: getStyle('--cui-info'),
//               data: salesValues,
//             },
//           ],
//         }}
//         options={{
//           maintainAspectRatio: false,
//           plugins: { legend: { display: false } },
//           scales: {
//             x: { grid: { display: false } },
//             y: { beginAtZero: true, max: Math.max(...salesValues) + 50 },
//           },
//         }}
//       />

//     </>
//   )
// }

// export default MainChart

import React from 'react'
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CBadge,
} from '@coreui/react'
import { useSelector } from 'react-redux'

// const topSellingCategories = [
//   { title: 'New Arrivals', value: 25901 },
//   { title: 'End of Season Sale', value: 8959 },
//   { title: "Men's Gifts Under $50", value: 8805 },
//   { title: 'Home Decor', value: 7968 },
//   { title: 'Top Gifts For Him', value: 7536 },
// ]

const TopSellingCategoriesTable = () => {
   const categories = useSelector((state) => state.dashboard.topCategories) ?? []

  return (
    <CTable striped hover bordered responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>#</CTableHeaderCell>
          <CTableHeaderCell>Category</CTableHeaderCell>
          <CTableHeaderCell>Total Quantity</CTableHeaderCell>
          {/* <CTableHeaderCell>Rank</CTableHeaderCell> */}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {categories.map((item, index) => (
          <CTableRow key={item.name}>
            <CTableDataCell>{index + 1}</CTableDataCell>
            <CTableDataCell>{item.name}</CTableDataCell>
            <CTableDataCell>{item.quantity.toLocaleString()}</CTableDataCell>
            {/* <CTableDataCell>
              <CBadge color={index === 0 ? 'success' : 'primary'}>
                {index === 0 ? 'Top Seller' : 'Selling'}
              </CBadge>
            </CTableDataCell> */}
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default TopSellingCategoriesTable
