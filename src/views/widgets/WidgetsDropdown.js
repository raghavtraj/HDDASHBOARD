// import React, { useEffect, useRef, useState } from 'react'
// import PropTypes from 'prop-types'

// import {
//   CRow,
//   CCol,
//   CDropdown,
//   CDropdownMenu,
//   CDropdownItem,
//   CDropdownToggle,
//   CWidgetStatsA,
// } from '@coreui/react'
// import { CChartLine, CChartBar } from '@coreui/react-chartjs'
// import CIcon from '@coreui/icons-react'
// import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

// const WidgetsDropdown = (props) => {
//   const widgetChartRef1 = useRef(null)
//   const widgetChartRef2 = useRef(null)
//   const widgetChartRef3 = useRef(null)
//   const widgetChartRef4 = useRef(null)

//   // Mock API data
//   const [data, setData] = useState({
//     orders: {
//       total_orders: 1240,
//       completed_orders: 980,
//       shipped_orders: 1120,
//       bopis_orders: 150,
//       payment_not_captured: 300,
//     },
//     revenue: {
//       total_quantity_ordered: 3420,
//       total_revenue: {
//         with_tax: 1250000.75,
//         without_tax: 1125000.0,
//       },
//     },
//   })

//   // You can also simulate useEffect fetch if needed
//   useEffect(() => {
//     // Example: If you want to update chart colors on theme change
//   }, [])

//   return (
//     <CRow className={props.className} xs={{ gutter: 4 }}>
//       {/* Card 1: Total Orders */}
//       <CCol sm={6} xl={3}>
//         <CWidgetStatsA
//           color="primary"
//           value={
//             <>
//               {data.orders.total_orders}{' '}
//               <span className="fs-6 fw-normal">
//                 (-12.4% <CIcon icon={cilArrowBottom} />)
//               </span>
//             </>
//           }
//           title="Total Orders"
//           action={
//             <CDropdown alignment="end">
//               <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//                 <CIcon icon={cilOptions} />
//               </CDropdownToggle>
//               <CDropdownMenu>
//                 <CDropdownItem>View Details</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>
//           }
//           chart={
//             <CChartLine
//               ref={widgetChartRef1}
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//                 datasets: [
//                   {
//                     label: 'Orders',
//                     backgroundColor: 'transparent',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     data: [1000, 1100, 900, 1200, 1300, 1100, 1240],
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: { legend: { display: false } },
//                 maintainAspectRatio: false,
//                 scales: { x: { display: false }, y: { display: false } },
//               }}
//             />
//           }
//         />
//       </CCol>

//       {/* Card 2: Completed Orders */}
//       <CCol sm={6} xl={3}>
//         <CWidgetStatsA
//           color="info"
//           value={
//             <>
//               {data.orders.completed_orders}{' '}
//               <span className="fs-6 fw-normal">
//                 (vs {data.orders.total_orders} total)
//               </span>
//             </>
//           }
//           title="Completed Orders"
//           chart={
//             <CChartLine
//               ref={widgetChartRef2}
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//                 datasets: [
//                   {
//                     label: 'Completed',
//                     backgroundColor: 'transparent',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     data: [900, 950, 920, 970, 1000, 980, 980],
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: { legend: { display: false } },
//                 maintainAspectRatio: false,
//                 scales: { x: { display: false }, y: { display: false } },
//               }}
//             />
//           }
//         />
//       </CCol>

//       {/* Card 3: Shipped Orders */}
//       <CCol sm={6} xl={3}>
//         <CWidgetStatsA
//           color="warning"
//           value={
//             <>
//               {data.orders.shipped_orders}{' '}
//               <span className="fs-6 fw-normal">(Shipped)</span>
//             </>
//           }
//           title="Shipped Orders"
//           chart={
//             <CChartLine
//               ref={widgetChartRef3}
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//                 datasets: [
//                   {
//                     label: 'Shipped',
//                     backgroundColor: 'transparent',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     data: [1000, 1050, 1020, 1100, 1120, 1080, 1120],
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: { legend: { display: false } },
//                 maintainAspectRatio: false,
//                 scales: { x: { display: false }, y: { display: false } },
//               }}
//             />
//           }
//         />
//       </CCol>

//       {/* Card 4: Total Revenue */}
//       <CCol sm={6} xl={3}>
//         <CWidgetStatsA
//           color="danger"
//           value={
//             <>
//               ${data.revenue.total_revenue.with_tax.toLocaleString()}{' '}
//               <span className="fs-6 fw-normal">(Revenue)</span>
//             </>
//           }
//           title="Total Revenue"
//           chart={
//             <CChartBar
//               ref={widgetChartRef4}
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//                 datasets: [
//                   {
//                     label: 'Revenue',
//                     backgroundColor: 'rgba(255,255,255,.2)',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     data: [200000, 220000, 180000, 240000, 250000, 210000, 256000],
//                   },
//                 ],
//               }}
//               options={{
//                 maintainAspectRatio: false,
//                 plugins: { legend: { display: false } },
//                 scales: { x: { display: false }, y: { display: false } },
//               }}
//             />
//           }
//         />
//       </CCol>
//     </CRow>
//   )
// }

// WidgetsDropdown.propTypes = {
//   className: PropTypes.string,
// }

// export default WidgetsDropdown

// import React, { useRef } from 'react'
// import PropTypes from 'prop-types'

// import { CRow, CCol, CWidgetStatsA } from '@coreui/react'
// import { CChartLine } from '@coreui/react-chartjs'

// const deliveryStatusData = [
//   { title: 'Shipped', value: 96451, color: 'success' },
//   { title: 'In Progress', value: 12509, color: 'info' },
//   { title: 'Picked', value: 2587, color: 'primary' },
//   { title: 'Part Shipped', value: 2052, color: 'warning' },
//   { title: 'Returned', value: 1695, color: 'danger' },
//   { title: 'Cancelled', value: 1460, color: 'danger' },
//   { title: 'Partially Returned', value: 1178, color: 'warning' },
//   { title: 'Partially Cancelled', value: 11, color: 'secondary' },
// ]

// const DeliveryStatusWidgets = ({ className }) => {
//   const chartRefs = useRef([])

//   return (

//     <CRow className={className} xs={{ gutter: 4 }}>
//       {deliveryStatusData.map((item, index) => (
//         <CCol sm={6} xl={3} key={index}>
//           <CWidgetStatsA
//             color={item.color}
//             value={
//               <>
//                 {item.value.toLocaleString()}
//                 <span className="fs-6 fw-normal ms-1">Orders</span>
//               </>
//             }
//             title={item.title}
//             chart={
//               <CChartLine
//                 ref={(el) => (chartRefs.current[index] = el)}
//                 className="mt-3 mx-3"
//                 style={{ height: '70px' }}
//                 data={{
//                   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//                   datasets: [
//                     {
//                       label: item.title,
//                       backgroundColor: 'transparent',
//                       borderColor: 'rgba(255,255,255,.55)',
//                       data: [
//                         item.value * 0.6,
//                         item.value * 0.7,
//                         item.value * 0.65,
//                         item.value * 0.75,
//                         item.value * 0.8,
//                         item.value * 0.85,
//                         item.value,
//                       ],
//                     },
//                   ],
//                 }}
//                 options={{
//                   plugins: { legend: { display: false } },
//                   maintainAspectRatio: false,
//                   scales: {
//                     x: { display: false },
//                     y: { display: false },
//                   },
//                 }}
//               />
//             }
//           />
//         </CCol>
//       ))}
//     </CRow>
//   )
// }

// DeliveryStatusWidgets.propTypes = {
//   className: PropTypes.string,
// }

// export default DeliveryStatusWidgets

import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { CRow, CCol, CWidgetStatsA, CTooltip } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { useSelector } from 'react-redux'

const TopSellingProductWidgets = ({ className }) => {
  const chartRefs = useRef([])
  const { topProducts, loading } = useSelector((state) => state.dashboard)
  // const products = useSelector((state) => state.dashboard.topProducts)

  const colors = ['success', 'info', 'primary', 'warning', 'danger']
  return (
    <CRow className={className} style={{ gap: '0px' }}>
      {' '}
      {/* decreased gap */}
      {topProducts.map((item, index) => (
        <CCol key={index} style={{ flex: '1 0 18%', maxWidth: '20%' }}>
          <CWidgetStatsA
            color={colors[index % colors.length]}
            // Title with padding, multi-line ellipsis, tooltip
            title={
              <CTooltip content={item.name} placement="top">
                <div
                  style={{
                    padding: '0 4px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2, // limit to 2 lines
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                  }}
                >
                  {item.name}
                </div>
              </CTooltip>
            }
            value={
              <div className="fw-semibold">
                {item.overallTotalQuantity.toLocaleString()}
                <span className="fs-6 fw-normal ms-1">Units Sold</span>
              </div>
            }
            chart={
              <CChartLine
                ref={(el) => (chartRefs.current[index] = el)}
                className="mt-2 mx-3 mb-2"
                style={{ height: '60px' }}
                data={{
                  labels: item.prevMonthsQuantitySoldList.map((x) => x.month),
                  datasets: [
                    {
                      label: 'Units sold',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: item.prevMonthsQuantitySoldList.map((x) => x.quantity),
                    },
                  ],
                }}
                options={{
                  plugins: { legend: { display: false } },
                  maintainAspectRatio: false,
                  scales: { x: { display: false }, y: { display: false } },
                  elements: {
                    line: {
                      borderWidth: 3,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
            className="h-100 d-flex flex-column justify-content-between mb-2"
          />
        </CCol>
      ))}
    </CRow>
  )
}

TopSellingProductWidgets.propTypes = {
  className: PropTypes.string,
}

export default TopSellingProductWidgets
