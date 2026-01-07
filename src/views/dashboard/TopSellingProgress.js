import React from 'react'
import { CRow, CCol, CProgress } from '@coreui/react'

const TopSellingProgress = ({ products, storeName = 'hdUSstore' }) => {
  if (!products || !products.length) return null

  const maxQuantity = products[0].quantity_sold

  const progressData = products.map((item, index) => ({
    title: item.name,
    value: `${item.quantity_sold.toLocaleString()} Sold`,
    percent: Math.round((item.quantity_sold / maxQuantity) * 100),
    color:
      index === 0
        ? 'success'
        : index === 1
          ? 'info'
          : index === 2
            ? 'warning'
            : index === 3
              ? 'primary'
              : 'danger',
  }))

  return (
    <>
      {/* === Header === */}
      {/* <div className="mb-2 text-center">
        <strong>Top Selling Products – {storeName}</strong>
      </div> */}

      {/* === Info Text === */}
      {/* <div className="mb-3 text-center text-body-secondary" style={{ fontSize: '0.85rem' }}>
        Highest selling product is always shown as <strong>100%</strong>
      </div> */}

      {/* === Progress Bars === */}
      <CRow
        xs={{ cols: 1, gutter: 4 }}
        sm={{ cols: 2 }}
        lg={{ cols: 4 }}
        xl={{ cols: 5 }}
        className="mb-3 text-center"
      >
        {progressData.map((item, index) => (
          <CCol key={index}>
            <div className="text-body-secondary text-truncate" title={item.title}>
              {item.title}
            </div>

            <div className="fw-semibold small">{item.value}</div>

            <CProgress thin className="mt-2" color={item.color} value={item.percent} />
            <div className="small text-body-secondary mt-1">{item.percent}%</div>
          </CCol>
        ))}
      </CRow>
    </>
  )
}

export default TopSellingProgress
