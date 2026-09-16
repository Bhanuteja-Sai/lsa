import { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    document.title = 'Login | Leela Sewing Academy'
  }, [])

  return (
    <main className="login-page">
      <div className="login-heading">
        <h1>Welcome Back</h1>
        <p>Sign in to continue your learning journey</p>
      </div>
      <div className="login-card">
        <label>Email</label><input type="email" />
        <label>Password</label><input type="password" />
        <button>Sign In</button>
        <p>Please contact the administrator to create your account.</p>
      </div>
    </main>
  )
}

export default Login
