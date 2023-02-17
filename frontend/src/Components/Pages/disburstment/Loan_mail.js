import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Loan_mail() {
                        const {userId} = useParams();
                        const [obj, setLoan] = useState([]);
                        const navigate = useNavigate();

                        async function fetchallUser(){
                            const result = await axios.get(`http://127.0.0.1:8000/loan1/loan/${userId}/`)
                            setLoan(result.data)
                        }
                        useEffect(()=>{fetchallUser()})

                        function sendmail(){
                            axios.get(`http://127.0.0.1:8000/loan1/mailsanction/${userId}/`)
                            navigate('/showloan')
                        }
  return (
   <>
     <div>
      <br />
      <NavLink to='/showloan'><button type='button' className='btn btn-danger btn-sm'>BACK</button></NavLink>
        <br /><br />
      <center>
    <h1>Do you really want to send the confirmation mail to this loan application{userId}</h1>
    <br />
    <table className='table table-bordered table-hover'>
        <thead className='bg-secondary'>
          <tr>
            <th>Application</th>
            <th>Loan principal amount:</th>
            <th>Loan tenure:</th>
            <th>Interest rate:</th>
            <th>Total amount and processing fees:</th>
            <th>Installment:</th>
            <th>Maturity date:</th>
            <th>Sanction letter:</th>
            <th>Status:</th>
            <th>Response time</th>
            <th>Remark:</th>
          </tr>
        </thead>
       <tbody>
          <tr>
            <td>{obj.application}</td>
            <td>{obj.loan_principal_amount}</td>
            <td>{obj.loan_tenure}</td>
            <td>{obj.interest_rate}</td>
            <td>{obj.total_amount_and_processing_fees}</td>
            <td>{obj.installment}</td>
            <td>{obj.maturity_date}</td>
            <td>{obj.sanction_letter}</td>
            <td>{obj.status}</td>
            <td>{obj.response_timestamp}</td>
            <td>{obj.remark}</td>
          </tr>
       </tbody>
      </table>
      <br />
      <button onClick={sendmail} className='btn btn-primary col-2' >SEND MAIL</button>
      </center>
    </div>
   </>
  )
}

export default Loan_mail