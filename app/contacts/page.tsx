'use client'

import { PageHeader, TableCard } from '@/app/components/common'

const contactsData = [
  { id: 1, name: 'Robert Brown', email: 'robert@gmail.com', phone: '+1 (555) 123-4567', company: 'Tech Corp', status: 'Active' },
  { id: 2, name: 'Isabella Walker', email: 'isabella@gmail.com', phone: '+1 (555) 234-5678', company: 'Design Inc', status: 'Active' },
  { id: 3, name: 'Marcus Johnson', email: 'marcus@gmail.com', phone: '+1 (555) 345-6789', company: 'StartUp LLC', status: 'Inactive' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@gmail.com', phone: '+1 (555) 456-7890', company: 'Enterprise Co', status: 'Active' },
  { id: 5, name: 'James Miller', email: 'james@gmail.com', phone: '+1 (555) 567-8901', company: 'Solutions Inc', status: 'Active' },
]

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'phone', label: 'Phone', sortable: false },
  { key: 'company', label: 'Company', sortable: true },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    className: 'text-center',
  },
]

export default function ContactsPage() {
  return (
    <div className="container-fluid">
      <PageHeader
        title="Contacts"
        description="Manage your contacts and customer relationships"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contacts' },
        ]}
        action={
          <button className="btn btn-primary">
            <i className="fi fi-rr-plus me-2"></i>Add Contact
          </button>
        }
      />

      <div className="row">
        <div className="col-12">
          <TableCard
            title="All Contacts"
            columns={columns}
            data={contactsData}
            striped
            hover
            actions={(row) => (
              <div className="btn-group btn-group-sm" role="group">
                <button type="button" className="btn btn-outline-primary">
                  <i className="fi fi-rr-edit"></i>
                </button>
                <button type="button" className="btn btn-outline-danger">
                  <i className="fi fi-rr-trash"></i>
                </button>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}
