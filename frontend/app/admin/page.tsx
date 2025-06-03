import { Header } from "@/components/header"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 mt-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage boat bookings and reservations</p>
        </div>
        <AdminDashboard />
      </main>
    </div>
  )
}
