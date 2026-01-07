import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CFormInput,
  CBadge,
  CProgress,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilContrast,
  cilMenu,
  cilMoon,
  cilSun,
  cilCalendar,
  cilArrowTop,
  cilArrowBottom,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import MonthPicker from './MonthPicker'

const AppHeader = () => {
  const headerRef = useRef()
  const dispatch = useDispatch()

  const sidebarShow = useSelector((state) => state.sidebarShow)
  const selectedMonth = useSelector((state) => state.selectedMonth)

  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const [loading, setLoading] = useState(false)

  /* ===== Persist Month ===== */
  useEffect(() => {
    localStorage.setItem('dashboardMonth', selectedMonth)
  }, [selectedMonth])

  /* ===== Header shadow on scroll ===== */
  useEffect(() => {
    const handleScroll = () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    }
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  /* ===== Simulated MoM change (replace with API value later) ===== */
  const momChange = 12.4 // positive or negative %

  return (
    <CHeader position="sticky" className="mb-3 p-0 bg-body" ref={headerRef}>
      <CContainer fluid className="px-4 border-bottom">
        {/* THIS is the key fix */}
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* ================= LEFT SECTION ================= */}
          <div className="d-flex align-items-center gap-3">
            <CHeaderToggler onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}>
              <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>

            <CHeaderNav className="d-none d-md-flex">
              <CNavItem>
                <CNavLink to="/dashboard" as={NavLink} className="fw-semibold text-decoration-none">
                  <div className="lh-sm">
                    <div className="fs-6 fw-bold">HD Business Insights</div>
                    <small className="text-body-secondary">US Store • Admin Dashboard</small>
                  </div>
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <CHeaderNav className="align-items-center gap-3">
            {/* Month Picker */}
            {/* <CFormInput
              type="month"
              size="sm"
              value={selectedMonth}
              max={new Date().toISOString().slice(0, 7)}
              onChange={(e) =>
                dispatch({
                  type: 'dashboard/setMonth',
                  payload: e.target.value,
                })
              }
              className="w-auto"
              
            /> */}

            {/* <MonthPicker /> */}

            {/* Theme Switch */}
            <CDropdown variant="nav-item" placement="bottom-end">
              <CDropdownToggle caret={false}>
                {colorMode === 'dark' ? (
                  <CIcon icon={cilMoon} size="lg" />
                ) : colorMode === 'auto' ? (
                  <CIcon icon={cilContrast} size="lg" />
                ) : (
                  <CIcon icon={cilSun} size="lg" />
                )}
              </CDropdownToggle>

              <CDropdownMenu>
                <CDropdownItem onClick={() => setColorMode('light')}>
                  <CIcon icon={cilSun} className="me-2" /> Light
                </CDropdownItem>
                <CDropdownItem onClick={() => setColorMode('dark')}>
                  <CIcon icon={cilMoon} className="me-2" /> Dark
                </CDropdownItem>
                <CDropdownItem onClick={() => setColorMode('auto')}>
                  <CIcon icon={cilContrast} className="me-2" /> Auto
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CHeaderNav>
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
