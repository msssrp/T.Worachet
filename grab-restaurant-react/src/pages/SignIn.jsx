import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
const SignIn = () => {
  return (
    <>
      <Navbar />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1Example13">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                <Link className="btn btn-light btn-lg btn-block" style={{ marginLeft: "15px" }} to="/signUp">Sign Up</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn


