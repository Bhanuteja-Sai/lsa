const Courses = () => {
  const courses = [
    { title: 'Blouse & Plain/ Lining', duration: '30 days', price: '2000/-' },
    { title: 'Katora', duration: '30 days', price: '1000/-' },
    { title: 'Boat Neck', duration: '30 days', price: '1000/-' },
    { title: 'Eye Neck', duration: '30 days', price: '1000/-' },
    { title: 'Sabyasachi', duration: '30 days', price: '1000/-' },
    { title: 'Princess Cut', duration: '30 days', price: '2000/-' },
    { title: 'Frock', duration: '30 days', price: '1000/-' },
    { title: 'Hand Models', duration: '30 days', price: '1000/-' },
    { title: 'Cut Work', duration: '30 days', price: '500/-' },
    { title: 'Dress', duration: '30 days', price: '1000/-' },
    { title: 'Patch Work', duration: '30 days', price: '500/-' },
    { title: 'Complete Bundle', duration: '66 days', price: '12,000/-t ', highlight: true },
  ]

  return (
    <main className="courses-page">
      <div className="courses-heading"><h1>Our Courses</h1><p>Explore our collection of sewing and tailoring courses</p></div>
      <div className="course-filters"><button>All Courses</button><button>Beginner</button><button>Intermediate</button><button>Advanced</button></div>
      <div className="course-grid">
          {courses.map((course) => (
            <article key={course.title} className={`card ${course.highlight ? 'border-brand-500 ring-1 ring-brand-200' : ''}`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-brand-600">Course</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">{course.title}</h2>
                </div>
                <div className="rounded-2xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">{course.duration}</div>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-slate-900">{course.price}</p>
                <button className="rounded-full bg-brand-900 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-800">
                  Enroll Now
                </button>
              </div>
            </article>
          ))}
        </div>
    </main>
  )
}

export default Courses
