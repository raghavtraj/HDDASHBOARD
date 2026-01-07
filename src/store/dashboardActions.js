import mockTopProducts from '../mock/topProducts.json' // ✅ default import

const USE_MOCK = true

export const fetchTopProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'dashboard/topProducts/request' })

    const { selectedMonth } = getState().dashboard
    const [year, month] = selectedMonth.split('-')

    let data
    if (USE_MOCK) {
      data = mockTopProducts
    } else {
      const response = await fetch(
        `https://localhost:9002/us/en/api-commerce/dashboard/get-topSellers?month=${month}&year=${year}`,
      )
      if (!response.ok) throw new Error('API failed')
      data = await response.json()
    }

    // Extract products and categories separately
    const productTopSellingList = data.productsTopSellingList || []
    const categoryTopSellingList = data.categoriesTopSellingList || []

    // Dispatch products only (like your current implementation)
    dispatch({
      type: 'dashboard/topProducts/success',
      payload: productTopSellingList,
    })

    // If you want, you can also dispatch categories separately
    dispatch({
      type: 'dashboard/topCategories/success',
      payload: categoryTopSellingList,
    })

    // Return both if needed for local usage
    return { productTopSellingList, categoryTopSellingList }
  } catch (error) {
    dispatch({
      type: 'dashboard/topProducts/failure',
      payload: error.message,
    })
  }
}
