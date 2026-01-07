const now = new Date()
const currentMonth = now.toLocaleString('en-US', { month: 'short' }).toUpperCase()
const currentYear = now.getFullYear()

const initialState = {
  selectedMonth: `${currentYear}-${currentMonth}`, // 2025-DEC
  topProducts: [],
  loading: false,
  error: null,
}

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'dashboard/setMonth':
      return {
        ...state,
        selectedMonth: action.payload,
      }

    case 'dashboard/topProducts/request':
      return { ...state, loading: true, error: null }

    case 'dashboard/topProducts/success':
      return {
        ...state,
        loading: false,
        topProducts: action.payload,
      }
    case 'dashboard/topCategories/success':
      return { ...state, topCategories: action.payload }

    case 'dashboard/topProducts/failure':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
