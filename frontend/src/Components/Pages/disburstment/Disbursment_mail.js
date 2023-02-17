import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Disbursment_mail() {

    const navigate  = useNavigate();

    const { userId } = useParams();

    const [ dis, setDis ] = useState({});

    function sendMail(){
        axios.get(`http://127.0.0.1:8000/loan1/mail/${userId}/`);
        navigate('/showdisburs');  
      }
      async function fetchUser(){
        const result = await axios.get(`http://127.0.0.1:8000/loan1/dis/${userId}/`);
        setDis(result.data);
      }

      useEffect(()=> {fetchUser()});

  return (
    <>
        <div>
      <br />
      <NavLink to='/showdisburs'><button type='button' className='btn btn-danger btn-sm'>BACK</button></NavLink>
        <br /><br />
      <center>
    <h1>Do you really want to send the confirmation mail to this loan application{userId}</h1>
    <br />
    <table className='table table-bordered table-hover'>
        <thead className='bg-secondary'>
          <tr>
            <th>DISBURSRMENT ID</th>
            <th>LOAN ID</th>
            <th>PAYMENT MODE</th>
            <th>TOTAL DISBURSED AMOUNT</th>
            <th>ACCOUNT NO</th>
            <th>LOAN+FEE</th>
          </tr>
        </thead>
       <tbody>
        
          <tr>
            <td>{dis.id}</td>
            <td>{dis.loan}</td>
            <td>{dis.payment_mode}</td>
            <td>{dis.net_disbursed_amount}</td>
            <td>{dis.disbursed_to_account_no}</td>
            <td>{dis.receipt_doc}</td>
          </tr>
        
       </tbody>
        
      </table>
      <br />
      <button onClick={sendMail} className='btn btn-primary col-2' >SEND MAIL</button>
      </center>
    </div>
    
    </>
  )
}

export default Disbursment_mail