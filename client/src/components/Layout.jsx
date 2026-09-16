import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="academy-brand" to="/">
          <span className="academy-brand-mark">🧵</span>
          <span>Leela Sewing Academy</span>
        </Link>
        <nav className="academy-nav" aria-label="Primary navigation">
          <Link to="/courses">Courses</Link>
          <Link className="academy-login" to="/login">Login</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div>
          <h2>Leela Sewing Academy</h2>
          <p>Master the art of sewing with expert-led courses in tailoring, embroidery, and fashion design.</p>
        </div>
        <div><h2>Quick Links</h2><Link to="/courses">Browse Courses</Link><Link to="/login">Login</Link></div>
        <div><h2>Contact</h2><p>info@leelasewingacademy.com</p><p>WhatsApp: <u>+91 91009 37651</u></p></div>
        <p className="site-copyright">© 2026 Leela Sewing Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
