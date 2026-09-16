const About = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <section className="card mx-auto max-w-5xl">
        <h1 className="section-title">About Leela Sewing Academy</h1>
        <p className="section-subtitle">
          We provide structured sewing tutoring with expert-led video lessons, practical assignments, and ongoing mentorship for every student.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-brand-50 p-6 text-brand-900 shadow-sm">
            <h2 className="text-xl font-semibold">Trusted Tutor</h2>
            <p className="mt-3 text-sm text-slate-700">
              Years of teaching experience in Visakhapatnam and a focus on professional tailoring techniques.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Secure Streaming</h2>
            <p className="mt-3 text-sm text-slate-700">
              Videos are delivered with Bunny Stream protection and Firebase authentication for authorized students only.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Hands-On Support</h2>
            <p className="mt-3 text-sm text-slate-700">
              Get direct WhatsApp help and course guidance for every lesson.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
