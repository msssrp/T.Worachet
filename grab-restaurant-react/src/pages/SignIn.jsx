import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const url = import.meta.env.VITE_BASE_URL;
const user = import.meta.env.VITE_BASE_USERNAME;
const password = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: user,
    password: password,
  },
};
import axios from "axios"
const SignIn = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    identifier: "",
    password: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const handleOnchange = (e) => {
    const { name, value } = e.target

    setUser((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleOnsubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (user.identifier.length === 0 || user.password.length === 0) {
      toast.error("Please fill the fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLoading(false)
    } else {
      axios.post(`${url}/user/login`, user, config, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(async (res) => {
        if (res.status === 200) {
          document.cookie = `token=${res.data.token}`;
          const token = document.cookie.split(';').find(c => c.trim().startsWith('token=')).split('=')[1];

          try {
            const tokenRes = await axios.get(`${url}/user/auth`, {
              headers: {
                "Authorization": `Bearer ${token}`,
              }
            });

            if (tokenRes.status === 200) {
              localStorage.setItem("u_id", tokenRes.data.decoded.userId);
              navigate("/")
              setIsLoading(false)
              return
            } else {
              console.log("Token invalid");
              document.cookie = `token=; Max-Age=0`;
              setIsLoading(false)
              return
            }
          } catch (error) {
            console.error("Error during token validation:", error);
            setIsLoading(false)
          }
        }
        else {
          toast.error(`${res.data.msg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          setIsLoading(false)
        }
      }).catch(error => {
        toast.error(`${error.response.data.msg}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setIsLoading(false)
      })
    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleOnsubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">Email or Username</label>
                  <input type="text" id="form1Example13" className="form-control form-control-lg" name="identifier" onChange={handleOnchange} />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                  <input type="password" id="form1Example23" className="form-control form-control-lg" name="password" onChange={handleOnchange} />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button type="submit" disabled={isLoading} className="btn btn-primary btn-lg btn-block">Sign in</button>
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


