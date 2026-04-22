'use client'

import { PageHeader } from '@/app/components/common'
import { useState } from 'react'

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    firstName: 'Robert',
    lastName: 'Brown',
    email: 'robert@gmail.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Corp',
    position: 'Manager',
    bio: 'A passionate product manager with 10+ years of experience',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Settings updated:', formData)
  }

  return (
    <div className="container-fluid">
      <PageHeader
        title="Account Settings"
        description="Manage your account and preferences"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Settings' },
        ]}
      />

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Profile Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    name="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                  <button type="button" className="btn btn-light">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Preferences</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <span className="form-check-label">Email Notifications</span>
                </label>
              </div>
              <div className="mb-3">
                <label className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <span className="form-check-label">Push Notifications</span>
                </label>
              </div>
              <div className="mb-3">
                <label className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" />
                  <span className="form-check-label">Marketing Emails</span>
                </label>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Danger Zone</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-outline-danger w-100">
                <i className="fi fi-rr-trash me-2"></i>Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
