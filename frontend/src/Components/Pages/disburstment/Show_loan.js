import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show_loan() {

                    const [loans, setLoans] = useState([]);

                    async function fetchallUser(){
                        const result = await axios.get(`http://127.0.0.1:8000/loan1/loan/`)
                        setLoans(result.data)

                    }
            useEffect(()=>{fetchallUser()},[])
return (
    <>
    <h1 style={{color:'red'}}><center><b>SHOW LOAN</b></center></h1>
        <div>
            <table className='table table-bordered table-hover table-dark'>
                <thead>
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
                            <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        loans.map(obj=>{
                            return(
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
                                    <td>
                                        <NavLink to='#'><button className='btn btn-warning btn-sm'>UPDATE</button></NavLink>
                                        <NavLink to={`/loanmail/${obj.id}`}><button className='btn btn-danger btn-sm ms-3'>SEND MAIL</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    </>
  )
}

export default Show_loan