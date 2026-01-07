import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'

const topSellingCategories = [
  { name: 'New Arrivals', quantity: 25901 },
  { name: 'End of Season Sale', quantity: 8959 },
  { name: "Men's Gifts Under $50", quantity: 8805 },
  { name: 'Home Decor', quantity: 7968 },
  { name: 'Top Gifts For Him', quantity: 7536 },
]

const topSellingProducts = [
  { name: "Men's 3 Pack Bar & Shield Riding Sock", quantity: 1295 },
  { name: '2025 Biker Santa Ball Ornament', quantity: 1175 },
  { name: "Men's H-D Original Straight Jean", quantity: 1064 },
  { name: "Men's Bar & Shield Fleece Shorts", quantity: 1020 },
  { name: 'Plaid Lined Zip Hoodie', quantity: 946 },
]
const TopSellingCategoriesChart = () => {
  const labels = topSellingProducts.map((c) => c.name)
  const values = topSellingProducts.map((c) => c.quantity)

  return (
    <>
      {/* === Store Label === */}
      {/* <h4 className="mb-4 text-center">
        🏷️ Top Selling Categories – <strong>hdUSstore</strong>
      </h4>

      <CRow>
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <strong>Top Categories by Quantity Sold</strong>
            </CCardHeader>

            <CCardBody>
              <div style={{ height: '340px' }}> */}
      <CChartBar
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels,
          datasets: [
            {
              label: 'Quantity Sold',
              backgroundColor: `rgba(${getStyle('--cui-warning-rgb')}, .8)`,
              borderColor: getStyle('--cui-warning'),
              borderWidth: 1,
              data: values,
            },
          ],
        }}
        options={{
          indexAxis: 'y', // 👈 Horizontal bars
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => ` ${ctx.raw.toLocaleString()} units`,
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              max: Math.max(...values) * 1.1,
            },
            y: {
              grid: { display: false },
            },
          },
        }}
      />
      {/* </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default TopSellingCategoriesChart
