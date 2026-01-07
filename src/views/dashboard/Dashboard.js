import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import OrderStatusDoughnut from './OrderStatusDoughnut'
import OrderStatusBarChart from './OrderStatusBarChart '
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTopProducts } from '../../store/dashboardActions'
import RevenueLineChart from './RevenueLineChart'

const orderTypeData = [
  { title: 'BOPIS', value: 42850, color: '#0d6efd' }, // Buy Online, Pick Up in Store
  { title: 'Museum', value: 31520, color: '#198754' },
  { title: 'Backorder', value: 18740, color: '#fd7e14' },
  { title: 'Ship to Home', value: 25490, color: '#0dcaf0' },
  // { title: 'Store Fulfilled', value: 14230, color: '#6f42c1' },
  { title: 'Special Orders', value: 6890, color: '#dc3545' },
]

const Dashboard = () => {
  const selectedMonth = useSelector((state) => state.dashboard.selectedMonth)
  const dispatch = useDispatch()
  console.log(selectedMonth)

  useEffect(() => {
    const [year, month] = selectedMonth.split('-')
    dispatch(fetchTopProducts(month, year))
  }, [selectedMonth, dispatch])

  console.log(selectedMonth)
  return (
    <>
      <CRow className="mb-4 g-4 align-items-stretch">
        {/* Delivery Status */}
        <CCol md={7} className="d-flex">
          <CCard className="mb-4 h-100 w-100">
            <CCardBody className="d-flex flex-column">
              {/* Heading */}
              <CRow className="mb-3">
                <CCol sm={12}>
                  <h4 className="fw-semibold mb-1">💰 Revenue Overview</h4>
                  <div className="small text-body-secondary">
                    Monthly revenue trends for the last six months, comparing total revenue against
                    revenue after discounts to highlight discount impact on overall earnings.
                  </div>
                </CCol>
              </CRow>

              {/* Doughnut chart fills remaining height */}
              <div className="flex-grow-1 d-flex align-items-center">
                {/* <OrderStatusDoughnut /> */}
                <RevenueLineChart />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        {/* Top Selling Categories */}
        <CCol md={5} className="d-flex">
          <CCard className="mb-4 h-100 w-100">
            <CCardBody className="d-flex flex-column">
              {/* Heading */}
              <CRow className="mb-3">
                {/* <CCol sm={12}>
                  <h4 className="fw-semibold mb-1">📊 Top Selling Categories</h4>
                  <div className="small text-body-secondary">
                    Top-performing product categories based on total units sold, helping identify
                    major contributors to overall sales.
                  </div>
                </CCol> */}
                <CCol sm={12}>
                  <h4 className="fw-semibold mb-1">📦 Order Types Overview</h4>
                  <div className="small text-body-secondary">
                    Distribution of orders across different fulfillment types such as BOPUS, Museum,
                    Backorder, and other channels, providing insights into customer ordering
                    preferences and fulfillment strategies.
                  </div>
                </CCol>
              </CRow>

              {/* Chart grows to fill space */}
              <div className="flex-grow-1">
                {/* <MainChart /> */}
                <OrderStatusDoughnut doughnoutData={orderTypeData} />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardBody>
          <CRow className="mb-3 align-items-center">
            <CCol sm={12}>
              <h4 className="fw-semibold mb-1">📊 Top 5 Best-Selling Products</h4>
              <div className="small text-body-secondary">
                Highest-selling products across the US Harley-Davidson store
              </div>
            </CCol>
          </CRow>
          {/* Widgets */}
          <WidgetsDropdown />
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardBody>
          <CRow className="mb-3">
            <CCol sm={12}>
              <h4>📊 Order Status Overview</h4>
              <div className="small text-body-secondary">
                Visual representation of orders by status. Helps monitor workflow efficiency and
                identify bottlenecks.
              </div>
            </CCol>
          </CRow>
          {/* <MainChart /> */}
          <OrderStatusBarChart />
          <CRow className="g-3 mt-3">
            <CCol md={6} lg={4}>
              <CCard>
                <CCardBody>
                  <h6 className="text-success">Completed</h6>
                  <p className="small text-body-secondary mb-0">
                    Orders that have successfully completed the purchase lifecycle, including
                    payment capture and shipment.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6} lg={4}>
              <CCard>
                <CCardBody>
                  <h6 className="text-primary">In Progress</h6>
                  <p className="small text-body-secondary mb-0">
                    Orders currently under processing, validation, or fraud review and not yet
                    finalized.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6} lg={4}>
              <CCard>
                <CCardBody>
                  <h6 className="text-warning">Payment Issues</h6>
                  <p className="small text-body-secondary mb-0">
                    Orders facing payment authorization or capture failures that require
                    intervention.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6} lg={4}>
              <CCard>
                <CCardBody>
                  <h6 className="text-info">Back Order</h6>
                  <p className="small text-body-secondary mb-0">
                    Orders delayed due to inventory availability or partial fulfillment.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6} lg={4}>
              <CCard>
                <CCardBody>
                  <h6 className="text-danger">Cancelled / Failed</h6>
                  <p className="small text-body-secondary mb-0">
                    Orders cancelled by the system or customer, or failed during processing.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6} lg={4}>
              <CCard>
                <CCardBody>
                  <h6 className="text-secondary">Returned</h6>
                  <p className="small text-body-secondary mb-0">
                    Orders that were fully or partially returned by customers after delivery.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
        {/* <CCardFooter> */}
        {/* <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index) => (
              <CCol key={index}>
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow> */}

        {/* <TopSellingProgress products={topSellingProducts} storeName="hdUSstore" /> */}
        {/* </CCardFooter> */}
      </CCard>
      {/* <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <h5 className="mb-3">Customer Behavior</h5>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">Metric</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Category</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Value</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Trend
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Description</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {customerTableData.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{item.metric}</CTableDataCell>

                      <CTableDataCell>
                        <span className="badge bg-info">{item.category}</span>
                      </CTableDataCell>

                      <CTableDataCell>
                        <div className="fw-semibold">{item.display}</div>
                        <CProgress thin color="primary" value={item.value} />
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CIcon size="lg" icon={item.trendIcon} />
                      </CTableDataCell>

                      <CTableDataCell>
                        <div className="small text-body-secondary">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>

              <br />

              <h5 className="mb-3">Logistics Overview</h5>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">Metric</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Category</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Details</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Status
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Remark</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {logisticsTableData.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{item.metric}</CTableDataCell>

                      <CTableDataCell>
                        <span className="badge bg-warning text-dark">{item.category}</span>
                      </CTableDataCell>

                      <CTableDataCell>
                        <div className="fw-semibold">{item.display}</div>
                        <CProgress thin color="info" value={item.value} />
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CIcon size="lg" icon={item.trendIcon} />
                      </CTableDataCell>

                      <CTableDataCell>
                        <small className="text-body-secondary">{item.activity}</small>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default Dashboard
