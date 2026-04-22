import PageLayout from './components/layout/PageLayout'

export default function DashboardPage() {
  return (
    <PageLayout>
      <div className="page-content-wrapper">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h1 className="h3 mb-0">Welcome back, Sarah!</h1>
            <p className="text-muted">Here&apos;s your sales performance overview</p>
          </div>
          <div className="col-lg-4">
            <div className="d-flex gap-2 justify-content-lg-end">
              <button className="btn btn-light border-0">Last 7 days</button>
              <button className="btn btn-primary">Export</button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-1">Total Sales</p>
                    <h4 className="mb-0">$45,231.89</h4>
                  </div>
                  <div className="badge bg-primary-subtle text-primary">+12.5%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-1">Customers</p>
                    <h4 className="mb-0">1,256</h4>
                  </div>
                  <div className="badge bg-success-subtle text-success">+8.2%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-1">Total Orders</p>
                    <h4 className="mb-0">532</h4>
                  </div>
                  <div className="badge bg-info-subtle text-info">+4.1%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-1">Revenue</p>
                    <h4 className="mb-0">$12,456</h4>
                  </div>
                  <div className="badge bg-warning-subtle text-warning">-2.3%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent border-bottom">
                <h5 className="card-title mb-0">Sales Performance</h5>
              </div>
              <div className="card-body">
                <div style={{ height: '300px' }} className="d-flex align-items-center justify-content-center bg-light rounded">
                  <p className="text-muted">Chart will be rendered here with ApexCharts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent border-bottom">
                <h5 className="card-title mb-0">Top Products</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Product A</span>
                    <span className="badge bg-primary rounded-pill">2,532</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Product B</span>
                    <span className="badge bg-info rounded-pill">1,856</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Product C</span>
                    <span className="badge bg-success rounded-pill">1,423</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Product D</span>
                    <span className="badge bg-warning rounded-pill">987</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="row g-3 mt-2">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent border-bottom">
                <h5 className="card-title mb-0">Recent Activity</h5>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>John Doe</td>
                      <td>$1,234.00</td>
                      <td><span className="badge bg-success">Completed</span></td>
                      <td>2 hours ago</td>
                    </tr>
                    <tr>
                      <td>#12344</td>
                      <td>Jane Smith</td>
                      <td>$856.50</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                      <td>4 hours ago</td>
                    </tr>
                    <tr>
                      <td>#12343</td>
                      <td>Bob Johnson</td>
                      <td>$2,456.00</td>
                      <td><span className="badge bg-success">Completed</span></td>
                      <td>1 day ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
