import React from 'react'
import Navbar from '../components/Navbar'
import { useAuthContext } from '../hooks/AuthContext'
const Profile = () => {

  const { user } = useAuthContext()

  return (
    <>
      <Navbar />
      <section className="vh-100" style={{ backgroundColor: "white" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">

              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle img-fluid" style={{ width: "100px" }} />
                  </div>
                  <h4 className="mb-2">{user.username}</h4>
                  <p className="text-muted mb-4">{user.roles.map((value, key) => <li key={key} style={{ listStyle: "none" }}>{value.name}</li>)} <span className="mx-2">|</span> <a
                    href="#!">{user.email}</a></p>

                  <button type="button" className="btn btn-primary btn-rounded btn-lg">
                    Message now
                  </button>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <p className="mb-2 h5">8471</p>
                      <p className="text-muted mb-0">Wallets Balance</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-2 h5">8512</p>
                      <p className="text-muted mb-0">Income amounts</p>
                    </div>
                    <div>
                      <p className="mb-2 h5">4751</p>
                      <p className="text-muted mb-0">Total Transactions</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Profile
