import React from 'react';
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <>
   <div className="container jumbotron bg-light">
        <nav className="navbar navbar-expand-lg navbar-danger  mb-5">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#"><span className="fas fa-hotel"></span> Easy Loan</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-bar"
                    aria-controls="navbar-bar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-bar">
                    <div className="navbar-nav ms-auto bg-danger">
                        <NavLink className="nav-link" aria-current="page" to="#">Home</NavLink>
                        <NavLink className="nav-link" to="#">About</NavLink>
                        <NavLink className="nav-link" to="#">Services</NavLink>
                        <NavLink className="nav-link" to="#">Blog</NavLink>
                        <NavLink className="nav-link" to="#">Conact</NavLink>
                        <NavLink className="nav-link" to="#">Apply For Loan</NavLink>
                        <NavLink className="nav-link" to="#">EMI Calculator</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        <div className="d-md-flex align-items-center justify-content-between pb-3">
            <div className="content mb-md-0 mb-5">
                <p className="h2">The Simple online Loan</p>
                <p className="line"></p>
                <div className="btn btn-primary">Our Service</div>
            </div>
            <form>
                <div className="d-flex flex-column align-items-center">
                    <p className="fs-4 fw-bold m-0 mt-4">How much you want?</p> <span className="text-muted">We provide online
                        instant cash loans.</span> <span className="line my-3"></span>
                </div>
                <div className="row p-0">
                    <div className="col-12 p-0 px-4"> <span className="text-uppercase text-muted">amount you want</span> </div>
                    <div className="col-12 p-0 px-4"> <select className="form-select d-flex align-items-center my-2" id="amount"
                            aria-label="">
                            <option selected hidden>Select category</option>
                            <option value="100">Category1</option>
                            <option value="200">Category2</option>
                            <option value="300">Category3</option>
                        </select> </div>
                    <div className="col-12 p-0 px-4"> <span className="text-uppercase text-muted">month</span> </div>
                    <div className="col-12 p-0 px-4"> <select className="form-select d-flex align-items-center my-2" id="amount"
                            aria-label="">
                            <option selected hidden>Select Month</option>
                            <option value="jan">January</option>
                            <option value="feb">Feburary</option>
                            <option value="mar">March</option>
                            <option value="apr">April</option>
                            <option value="may">May</option>
                            <option value="jun">June</option>
                            <option value="jul">July</option>
                            <option value="aug">August</option>
                            <option value="sept">September</option>
                            <option value="oct">October</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select> </div>
                    <div className="col-12 p-0 px-4">
                        <div className="d-flex align-items-center my-3"> <span className="text-muted text-uppercase">you have to
                                pay:</span> <span className="c-g ps-1">$ <span id="money"></span></span> </div>
                    </div>
                    <div className="col-12 p-0 px-4">
                        <div className="btn btn-primary w-100">apply now</div>
                        <div className="text-muted text-center mb-4 mt-3">We provide online instant cash loans</div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    
    </>
  );
}

export default Home