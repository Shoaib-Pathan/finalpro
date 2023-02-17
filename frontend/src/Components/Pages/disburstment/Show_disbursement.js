import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Show_disburs } from '../APIServices/APIservises';

function Show_disbursement() {

                    const [disburs, setDisburs] = useState([]);

                    async function fetchallUser(){
                        const result = await Show_disburs()
                        setDisburs(result.data)
                    }
            useEffect(()=>{fetchallUser()},[])
  return (
    <>
            <h1 style={{color:'red'}}><center><b>SHOW Disbursement</b></center></h1>
      <div>
      <table className='table table-bordered table-hover table-dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>LOAN</th>
            <th>INSURANCE DOCUMENT</th>
            <th>PAYMENT MODE</th>
            <th>NET DISBURSED AMOUNT</th>
            <th>AMOUNT DISBURSED TO A/C</th>
            <th>RECEIPT</th>
            <th>STATUS</th>
            <th>RESPONSED</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            disburs.map(obj=>{
              return (
                <tr>
                    <td>{obj.id}</td>
                    <td>{obj.loan}</td>
                    <td>{obj.insurance_doc}</td>
                    <td>{obj.payment_mode}</td>
                    <td>{obj.net_disbursed_amount}</td>
                    <td>{obj.disbursed_to_account_no}</td>
                    <td>{obj.receipt_doc}</td>
                    <td>{obj.status}</td>
                    <td>{obj.response_timestamp}</td>
                    <td>
                      <NavLink to={`/updatedis/${obj.id}`}><button className='btn btn-success btn-sm'>UPDATE</button></NavLink>
                      <NavLink to={`/dismail/${obj.id}`}><button className='btn btn-primary btn-sm ms-3'>SEND MAIL</button></NavLink>
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

export default Show_disbursement