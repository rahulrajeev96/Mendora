import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Row className="h-100 m-0 flex-column flex-md-row">
        {/* Left Side - Login Form */}
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: '40px',
            backgroundColor: '#f8f9fa',
            
            height: '100vh',
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center fw-bold mb-3">Welcome back!</h2>
            <p className="text-center text-muted mb-4" style={{ fontSize: '14px' }}>
              Simplify your workflow and boost your productivity with <strong>Tuga's App</strong>. Get started for free.
            </p>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control rounded-pill px-4 py-2"
                  style={{ border: '1px solid #ccc' }}
                />
              </div>
              <div className="mb-2 position-relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control rounded-pill px-4 py-2"
                  style={{ border: '1px solid #ccc' }}
                />
                <i
                  className="fa fa-eye position-absolute"
                  style={{
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    cursor: 'pointer',
                  }}
                ></i>
              </div>

              <div className="text-end mb-3">
                <Link className="text-decoration-none text-muted" style={{ fontSize: '13px' }}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-dark w-100 rounded-pill py-2 fw-semibold">
                Login
              </button>

              <div className="text-center text-muted my-4" style={{ fontSize: '14px' }}>
                <span className="px-2 bg-white">or continue with</span>
              </div>

              <div className="d-flex justify-content-center gap-3 mb-4">
                {['google', 'apple', 'facebook-f'].map((icon) => (
                  <div
                    key={icon}
                    className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <Link to="#" style={{ color: 'white' }}>
                      <i className={`fab fa-${icon}`}></i>
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted" style={{ fontSize: '14px' }}>
                Not a member?{' '}
                <Link className="text-success text-decoration-none fw-semibold">Register now</Link>
              </p>
            </form>
          </div>
        </Col>

        {/* Right Side - Image */}
       <Col
  md={7}
  className="d-none d-md-block p-0"
  style={{
    height: '100vh',
    backgroundImage: "url('/images/loginimage.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
></Col>


      </Row>
    </div>
  );
}

export default LoginPage;


<form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control rounded-pill px-4 py-2"
                  style={{ border: '1px solid #ccc' }}
                />
              </div>
              <div className="mb-2 position-relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control rounded-pill px-4 py-2"
                  style={{ border: '1px solid #ccc' }}
                />
                <i
                  className="fa fa-eye position-absolute"
                  style={{
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    cursor: 'pointer',
                  }}
                ></i>
              </div>

              <div className="text-end mb-3">
                <Link className="text-decoration-none text-muted" style={{ fontSize: '13px' }}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-dark w-100 rounded-pill py-2 fw-semibold">
                Login
              </button>

              <div className="text-center text-muted my-4" style={{ fontSize: '14px' }}>
                <span className="px-2 bg-white">or continue with</span>
              </div>

              <div className="d-flex justify-content-center gap-3 mb-4">
                {['google', 'apple', 'facebook-f'].map((icon) => (
                  <div
                    key={icon}
                    className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <Link to="#" style={{ color: 'white' }}>
                      <i className={`fab fa-${icon}`}></i>
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted" style={{ fontSize: '14px' }}>
                Not a member?{' '}
                <Link className="text-success text-decoration-none fw-semibold">Register now</Link>
              </p>
            </form>
