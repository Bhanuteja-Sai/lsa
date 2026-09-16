const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <section className="card mx-auto max-w-4xl">
        <h1 className="section-title">Contact & Support</h1>
        <p className="section-subtitle">
          Reach out to join a course, get help with your learning plan, or ask about class schedules.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">WhatsApp Help Desk</h2>
            <p className="mt-3 text-sm text-slate-600">Message us for admissions, course updates, and support.</p>
            <p className="mt-4 text-brand-700 font-semibold">+91 6300206523</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Visit Our Center</h2>
            <p className="mt-3 text-sm text-slate-600">Anandhaapuram, Visakhapatnam, Andhra Pradesh — 530052</p>
            <p className="mt-4 text-sm text-slate-600">Open daily from 9 AM to 7 PM</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
