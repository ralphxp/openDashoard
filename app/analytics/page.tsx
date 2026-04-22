'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { PageHeader, ChartCard, StatCard } from '@/app/components/common'
import type { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function AnalyticsPage() {
  const [salesChartSeries] = useState([
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: 'Revenue',
      data: [20, 30, 25, 35, 39, 50, 60],
    },
  ])

  const salesChartOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#5b63f5', '#13c560'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: {
      borderColor: '#e9e9f8',
    },
  } satisfies ApexOptions

  const [conversionChartSeries] = useState([
    {
      name: 'Conversion Rate',
      data: [45, 52, 38, 45, 52, 60, 70],
    },
  ])

  const conversionChartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    colors: ['#a89ef5'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    plotOptions: {
      bar: {
        distributed: false,
      },
    },
    grid: {
      borderColor: '#e9e9f8',
    },
  } satisfies ApexOptions

  return (
    <div className="container-fluid">
      <PageHeader
        title="Analytics"
        description="Track your business metrics and performance"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Analytics' },
        ]}
      />

      {/* Key Metrics */}
      <div className="row g-3 mb-4">
        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Total Visits"
            value="24,385"
            trend={{ value: 12, isPositive: true }}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Conversions"
            value="3,245"
            trend={{ value: 8, isPositive: true }}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Bounce Rate"
            value="42.3%"
            trend={{ value: 5, isPositive: false }}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Avg. Session"
            value="3m 24s"
            trend={{ value: 3, isPositive: true }}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="row g-3">
        <div className="col-lg-8">
          <ChartCard title="Sales & Revenue Trend" subtitle="Last 7 days">
            {typeof window !== 'undefined' && (
              <Chart
                options={salesChartOptions}
                series={salesChartSeries}
                type="line"
                height={300}
              />
            )}
          </ChartCard>
        </div>

        <div className="col-lg-4">
          <ChartCard title="Conversion Rate">
            {typeof window !== 'undefined' && (
              <Chart
                options={conversionChartOptions}
                series={conversionChartSeries}
                type="bar"
                height={300}
              />
            )}
          </ChartCard>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="row g-3 mt-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-bottom">
              <h6 className="card-title mb-0">Top Pages</h6>
            </div>
            <div className="table-responsive">
              <table className="table table-sm mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Page</th>
                    <th className="text-end">Views</th>
                    <th className="text-end">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>/dashboard</td>
                    <td className="text-end">2,459</td>
                    <td className="text-end"><span className="badge bg-success-subtle text-success">12.5%</span></td>
                  </tr>
                  <tr>
                    <td>/products</td>
                    <td className="text-end">1,856</td>
                    <td className="text-end"><span className="badge bg-success-subtle text-success">8.2%</span></td>
                  </tr>
                  <tr>
                    <td>/pricing</td>
                    <td className="text-end">1,234</td>
                    <td className="text-end"><span className="badge bg-warning-subtle text-warning">5.1%</span></td>
                  </tr>
                  <tr>
                    <td>/about</td>
                    <td className="text-end">856</td>
                    <td className="text-end"><span className="badge bg-info-subtle text-info">3.2%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-bottom">
              <h6 className="card-title mb-0">Traffic by Source</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Organic Search</span>
                  <span className="small fw-semibold">45%</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Direct Traffic</span>
                  <span className="small fw-semibold">30%</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-success" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Social Media</span>
                  <span className="small fw-semibold">15%</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-info" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Referral</span>
                  <span className="small fw-semibold">10%</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
