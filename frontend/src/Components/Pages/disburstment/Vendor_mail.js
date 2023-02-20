import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Vendor_mail() {

                        const {userId} = useParams();
                        const [vendor, setVendor] = useState({});
                        const navigate = useNavigate();

                        async function fetchUser(){
                           const result =  await axios.get(`http://127.0.0.1:8000/loan1/ven/${userId}/`)
                           setVendor(result.data)
                        }
                        function sendMail(){
                            axios.get(`http://127.0.0.1:8000/loan1/mail/${userId}/`)
                            navigate('/show')

                        }
            useEffect(()=>{fetchUser()})
  return (
    <>
     <div>
      <br />
      <NavLink to='/show'><button type='button' className='btn btn-danger btn-sm'>BACK</button></NavLink>
        <br /><br />
      <center>
    <h1>Do you really want to send the confirmation mail to this loan application{userId}</h1>
    <br />
    <table className='table table-bordered table-hover'>
        <thead className='bg-secondary'>
          <tr>
            <th>Application</th>
            <th>Name</th>
            <th>Vendor_Type</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Pin_Code</th>
            <th>Mobile</th>
            <th>Bank_Name</th>
            <th>Passbook_Copy</th>
            <th>Current_account_no</th>
            <th>IFSC_code</th>
          </tr>
        </thead>
       <tbody>
          <tr>
            <td>{vendor.application}</td>
            <td>{vendor.name}</td>
            <td>{vendor.vendor_type}</td>
            <td>{vendor.email}</td>
            <td>{vendor.address}</td>
            <td>{vendor.city}</td>
            <td>{vendor.state}</td>
            <td>{vendor.country}</td>
            <td>{vendor.pin_code}</td>
            <td>{vendor.mobile}</td>
            <td>{vendor.bank_name}</td>
            <td>{vendor.passbook_copy}</td>
            <td>{vendor.current_account_no}</td>
            <td>{vendor.ifsc_code}</td>
          </tr>
       </tbody>
      </table>
      <br/>
      <button onClick={sendMail} className='btn btn-primary col-2' >SEND MAIL</button>
      </center>
    </div>
    
    
    </>
  )
}

export default Vendor_mail