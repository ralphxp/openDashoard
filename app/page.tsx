'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { PageHeader, StatCard, ChartCard } from './components/common'

// Lazy load ApexCharts components
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function DashboardPage() {
  const [chartRevenueSeries] = useState([
    {
      name: 'Revenue',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  const chartRevenueOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#5b63f5'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: {
      borderColor: '#e9e9f8',
    },
  }

  const [chartTrafficSeries] = useState([41.5, 27, 15.2, 16.3])

  const chartTrafficOptions = {
    chart: {
      type: 'donut',
    },
    colors: ['#5b63f5', '#a89ef5', '#d0c9f6', '#e9e5fc'],
    labels: ['Organic Search', 'Direct Traffic', 'Social Media', 'Referral'],
    legend: {
      show: false,
    },
  }

  return (
    <div className="container-fluid">
      <PageHeader
        title="Dashboard"
        breadcrumbs={[
          { label: 'Home', href: '#' },
          { label: 'Dashboard' },
        ]}
      />

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-xxl-6 col-lg-8">
          <div className="row g-3">
            <div className="col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6>Total Contacts</h6>
                  <div className="dropdown">
                    <button className="btn btn-sm btn-icon btn-action-primary" data-bs-toggle="dropdown">
                      <i className="fi fi-bs-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">Edit</a></li>
                      <li><a className="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body py-0 d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">5,758</h2>
                    <span className="badge badge-sm bg-success-subtle text-success">+2.57%</span>
                  </div>
                </div>
                <div className="card-footer border-0 pt-0 mt-3">
                  <div className="border-top pb-2"></div>
                  <p className="mb-0 small">Vs last month: 1,195</p>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6>Lead Analytics</h6>
                  <div className="dropdown">
                    <button className="btn btn-sm btn-icon btn-action-primary" data-bs-toggle="dropdown">
                      <i className="fi fi-bs-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">Edit</a></li>
                      <li><a className="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">70</h2>
                    <span className="badge badge-sm bg-danger-subtle text-danger">-2.57%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title mb-3">Tasks Overview</h6>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small">Progress</span>
                      <span className="small text-primary fw-semibold">70%</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6>Active Deals</h6>
                  <div className="dropdown">
                    <button className="btn btn-sm btn-icon btn-action-primary" data-bs-toggle="dropdown">
                      <i className="fi fi-bs-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">Edit</a></li>
                      <li><a className="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">1,249</h2>
                    <span className="badge badge-sm bg-success-subtle text-success">+2.57%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="col-xxl-12">
              <ChartCard title="Revenue" subtitle="Monthly revenue overview">
                {typeof window !== 'undefined' && (
                  <Chart
                    options={chartRevenueOptions}
                    series={chartRevenueSeries}
                    type="area"
                    height={300}
                  />
                )}
              </ChartCard>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-xxl-3 col-lg-4">
          <div className="row g-3">
            {/* Traffic Sources */}
            <div className="col-xxl-12">
              <ChartCard title="Traffic Sources">
                {typeof window !== 'undefined' && (
                  <Chart
                    options={chartTrafficOptions}
                    series={chartTrafficSeries}
                    type="donut"
                    height={250}
                  />
                )}
                <div className="d-grid gap-2 mt-3">
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa fa-square text-primary"></i>
                      <span>Organic Search</span>
                    </div>
                    <strong>41.50%</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa fa-square text-opacity-50 text-primary"></i>
                      <span>Direct Traffic</span>
                    </div>
                    <strong>27%</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa fa-square text-opacity-25 text-primary"></i>
                      <span>Social Media</span>
                    </div>
                    <strong>15.2%</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa fa-square text-opacity-10 text-primary"></i>
                      <span>Referral</span>
                    </div>
                    <strong>16.3%</strong>
                  </div>
                </div>
              </ChartCard>
            </div>

            {/* Recent Activities */}
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header border-bottom">
                  <h6 className="card-title mb-0">Recent Activities</h6>
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-start gap-2 py-3">
                      <div className="avatar avatar-sm rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center">
                        <i className="fi fi-rr-check fs-6"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 small">Task completed</h6>
                        <p className="mb-0 text-muted text-1xs">2 hours ago</p>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-start gap-2 py-3">
                      <div className="avatar avatar-sm rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center">
                        <i className="fi fi-rr-user-add fs-6"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 small">New lead added</h6>
                        <p className="mb-0 text-muted text-1xs">4 hours ago</p>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-start gap-2 py-3">
                      <div className="avatar avatar-sm rounded-circle bg-info bg-opacity-10 text-info d-flex align-items-center justify-content-center">
                        <i className="fi fi-rr-document fs-6"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 small">Report generated</h6>
                        <p className="mb-0 text-muted text-1xs">1 day ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
