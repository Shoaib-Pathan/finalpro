
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { showvendor } from '../APIServices/APIservises';


function Show_Vendor() {
                
                const [users, setUser] = useState([]);
            

                async function fetchallUser(){
                    const result = await showvendor()
                    setUser(result.data)      
                }

                useEffect(()=>{
                    fetchallUser()
                },[])

               
  return (
    <>
        <h1 style={{color:'red'}}><center>SHOW VENDORS</center></h1>
        <div>
            <table className='table table-bordered table-hover table-dark'>
                <thead>
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
                            <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        users.map(obj=>{
                            return(
                                <tr>
                                    <td>{obj.application}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.vendor_type}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.address}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.state}</td>
                                    <td>{obj.country}</td>
                                    <td>{obj.pin_code}</td>
                                    <td>{obj.mobile}</td>
                                    <td>{obj.bank_name}</td>
                                    <td>{obj.passbook_copy}</td>
                                    <td>{obj.current_account_no}</td>
                                    <td>{obj.ifsc_code}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className='btn btn-warning btn-sm'>UPDATE</button></NavLink>
                                        <NavLink to={`/vendormail/${obj.id}`}><button className='btn btn-danger btn-sm ms-3'>SEND MAIL</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
            <center>
            
            </center>

        </div>
    
    </>
  )
}

export default Show_Vendor