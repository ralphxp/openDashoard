'use client'

import { PageHeader, ChartCard } from '@/app/components/common'

const projectsData = [
  { id: 1, name: 'Website Redesign', progress: 75, status: 'In Progress', team: 5, dueDate: '2024-05-15' },
  { id: 2, name: 'Mobile App Development', progress: 45, status: 'In Progress', team: 8, dueDate: '2024-06-30' },
  { id: 3, name: 'Database Migration', progress: 100, status: 'Completed', team: 3, dueDate: '2024-04-20' },
  { id: 4, name: 'API Integration', progress: 60, status: 'In Progress', team: 4, dueDate: '2024-05-30' },
  { id: 5, name: 'UI Component Library', progress: 90, status: 'In Progress', team: 6, dueDate: '2024-05-10' },
]

export default function ProjectsPage() {
  return (
    <div className="container-fluid">
      <PageHeader
        title="Projects"
        description="Track and manage your projects"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects' },
        ]}
        action={
          <button className="btn btn-primary">
            <i className="fi fi-rr-plus me-2"></i>New Project
          </button>
        }
      />

      <div className="row g-3">
        {projectsData.map((project) => (
          <div key={project.id} className="col-xxl-6 col-lg-12">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center border-0">
                <h6 className="mb-0">{project.name}</h6>
                <span className={`badge bg-${project.status === 'Completed' ? 'success' : 'primary'}-subtle text-${project.status === 'Completed' ? 'success' : 'primary'}`}>
                  {project.status}
                </span>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small">Progress</span>
                    <span className="small fw-semibold">{project.progress}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <small className="text-muted d-block">Team Members</small>
                    <strong>{project.team}</strong>
                  </div>
                  <div className="col-6">
                    <small className="text-muted d-block">Due Date</small>
                    <strong>{project.dueDate}</strong>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top">
                <div className="btn-group btn-group-sm w-100" role="group">
                  <button type="button" className="btn btn-outline-primary">
                    <i className="fi fi-rr-eye me-1"></i>View
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <i className="fi fi-rr-edit me-1"></i>Edit
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    <i className="fi fi-rr-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
