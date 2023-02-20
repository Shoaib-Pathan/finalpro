import React from 'react';
import Home from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendor from './Components/Pages/disburstment/Vendor';
import Navbar from './Components/Pages/disburstment/Navbar';
import Show_Vendor from './Components/Pages/disburstment/Show_Vendor';
import Update_Vendor from './Components/Pages/disburstment/Update_Vendor';
import Installments from './Components/Pages/disburstment/Installments';
import Show_Installments from './Components/Pages/disburstment/Show_Installments';
import Update_Installment from './Components/Pages/disburstment/Update_Installment';
import Disbursement from './Components/Pages/disburstment/Disbursement';
import Show_disbursement from './Components/Pages/disburstment/Show_disbursement';
import Update_disbursement from './Components/Pages/disburstment/Update_disbursement';
import Disbursment_mail from './Components/Pages/disburstment/Disbursment_mail';
import Show_loan from './Components/Pages/disburstment/Show_loan';
import Loan_mail from './Components/Pages/disburstment/Loan_mail';
import Vendor_mail from './Components/Pages/disburstment/Vendor_mail';

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
          {/* <Home></Home> */}
          {/* <Vendor></Vendor> */}
          <Routes>
            <Route path='/add' element={<Vendor/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/show' element={<Show_Vendor/>}/>
            <Route path='/vendormail/:userId' element={<Vendor_mail/>}/>
            <Route path='/update/:userId' element={<Update_Vendor/>}/>
            <Route path='/installments' element={<Installments/>}/>
            <Route path='/show1' element={<Show_Installments/>}/>
            <Route path='/updateinstall/:userId' element={<Update_Installment/>}/>
            <Route path='/disburs' element={<Disbursement/>}/>
            <Route path='/showdisburs' element={<Show_disbursement/>}/>
            <Route path='/updatedis/:userId' element={<Update_disbursement/>}/>
            <Route path='/dismail/:userId' element={<Disbursment_mail/>}/>
            <Route path='/showloan' element={<Show_loan/>}/>
            <Route path='/loanmail/:userId' element={<Loan_mail/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
