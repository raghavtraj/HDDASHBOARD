import { CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCalendar } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'

const months = [
  { label: 'Jan', value: 'JAN' },
  { label: 'Feb', value: 'FEB' },
  { label: 'Mar', value: 'MAR' },
  { label: 'Apr', value: 'APR' },
  { label: 'May', value: 'MAY' },
  { label: 'Jun', value: 'JUN' },
  { label: 'Jul', value: 'JUL' },
  { label: 'Aug', value: 'AUG' },
  { label: 'Sep', value: 'SEP' },
  { label: 'Oct', value: 'OCT' },
  { label: 'Nov', value: 'NOV' },
  { label: 'Dec', value: 'DEC' },
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 6 }, (_, i) => currentYear - i)

const MonthPicker = () => {
  const dispatch = useDispatch()
  const selectedMonth = useSelector((state) => state.dashboard.selectedMonth)

  // if (!selectedMonth) return null
  console.log(selectedMonth)

  const [year, month] = selectedMonth.split('-')

  const updateMonth = (y, m) =>
    dispatch({
      type: 'dashboard/setMonth',
      payload: `${y}-${m}`,
    })

  return (
    <CInputGroup size="sm" className="month-picker">
      {/* Calendar Icon */}
      <CInputGroupText>
        <CIcon icon={cilCalendar} />
      </CInputGroupText>

      {/* Month */}
      <CFormSelect value={month} onChange={(e) => updateMonth(year, e.target.value)}>
        {months.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </CFormSelect>

      {/* Year */}
      <CFormSelect value={year} onChange={(e) => updateMonth(e.target.value, month)}>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </CFormSelect>
    </CInputGroup>
  )
}

export default MonthPicker
