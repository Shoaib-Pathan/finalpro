import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { showinstall } from '../APIServices/APIservises';

function Show_Installments() {

                const [installment, setInstallment] = useState([]);

                async function fetchallUser(){
                    const result = await showinstall()
                    setInstallment(result.data)
                }

            useEffect(()=>{fetchallUser()},[])
  return (
    <>
      <h1 style={{color:'red'}}><center><b>SHOW INSTALLMENT</b></center></h1>
     <div>
      <table className='table table-hover table-bordered table-dark'>
        <thead>
          <tr>
            <th>LOAN</th>
            <th>REMAINING AMOUNT</th>
            <th>INSTALLMENT NO</th>
            <th>MONTHLY INSTALLMENT AMOUNT</th>
            <th>INSTALLMENT EXPECTED DATA</th>
            <th>INSTALLMENT OAID DATE</th>
            <th>PENALTY</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            installment.map(obj=>{
              return (
                <tr>
                  <td>{obj.loan}</td>
                  <td>{obj.remaining_amount}</td>
                  <td>{obj.installment_no}</td>
                  <td>{obj.monthly_installment_amount}</td>
                  <td>{obj.installment_expected_date}</td>
                  <td>{obj.installment_paid_date}</td>
                  <td>{obj.penalty_amount}</td>
                  <td>{obj.status}</td>
                  <td>
                    <NavLink to={`/updateinstall/${obj.id}`}><button className='btn btn-warning btn-sm'>UPDATE</button></NavLink>
                    <NavLink to='#'><button className='btn btn-danger btn-sm float-end'>DELETE</button></NavLink>
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

export default Show_Installments