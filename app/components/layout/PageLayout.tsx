import Header from './Header'
import Sidebar from './Sidebar'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="app-main">
        <Header />
        <main className="app-content">
          {children}
        </main>
      </div>
    </>
  )
}
