const features = [
  { icon: '🎬', title: 'HD Video Lessons', text: 'Crystal-clear streaming powered by Bunny Stream. Watch on any device, anytime.' },
  { icon: '📐', title: 'Structured Curriculum', text: 'Step-by-step courses from basics to advanced tailoring techniques.' },
  { icon: '📊', title: 'Track Your Progress', text: 'Mark lessons complete and see your learning journey unfold.' },
  { icon: '🧑‍🏫', title: "Expert Instructors", text: 'Learn from seasoned professionals with decades of sewing experience.' },
  { icon: '🧵', title: 'Hands-On Projects', text: 'Apply what you learn with real-world sewing projects and patterns.' },
  { icon: '💬', title: 'Community Support', text: 'Join fellow students and share your creations along the way.' },
]

const Home = () => {
  return (
    <main className="academy-home">
      <section className="academy-content">
        <div className="academy-intro">
          <p className="academy-kicker">Learn. Create. Grow.</p>
          <h1>Everything you need to become a confident sewist</h1>
          <p>Learn from home with clear lessons, practical projects, and a supportive sewing community.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="home-cta">
        <h2>Ready to Start Sewing?</h2>
        <p>Join hundreds of students mastering the art of sewing</p>
        <a href="/login">Login to Your Account</a>
      </section>
    </main>
  )
}

export default Home
