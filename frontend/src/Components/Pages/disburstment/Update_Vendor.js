import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { fetechvendor, putData } from '../APIServices/APIservises';

function Update_Vendor() {

                        const {register,setValue, handleSubmit}  = useForm();
                        const {userId} = useParams();
                        const navigate = useNavigate();
                        
                        async function fetchUser(){
                            const result = await fetechvendor(userId)
                            setValue('application',result.data.application)
                            setValue('name',result.data.name)
                            setValue('vendor_type', result.data.vendor_type)
                            setValue('email',result.data.email)
                            setValue('address',result.data.address)
                            setValue('city',result.data.city)
                            setValue('state',result.data.state)
                            setValue('country',result.data.country)
                            setValue('pin_code',result.data.pin_code)
                            setValue('mobile',result.data.mobile)
                            setValue('bank_name',result.data.bank_name)
                            setValue('passbook_copy',result.data.passbook_copy)
                            setValue('current_account_no',result.data.current_account_no)
                            setValue('ifsc_code',result.data.ifsc_code)
                           
                      }

            useEffect(()=>{fetchUser()},[])

             function saveData(userId, data){
                const result =  putData(userId, data)
                console.log(result)
                if(result.status===201){
                navigate('/show')
                }
            }
  return (
    <>
        <h1 style={{color:'red'}}><center><b>UPDATE FORM</b></center></h1>
        <div>
        <form onSubmit={handleSubmit(saveData)} className='container jumbotron'>
                <label htmlFor='application'><b>Application </b></label>
                <input type='text' id='application' className='form-control' {...register('application')}></input>
                <br></br>
                <label htmlFor='name'><b>Name </b></label>
                <input type='text' id='name' className='form-control' {...register('name')}></input>
                <br></br>
                <label htmlFor='vendor_type'><b>Vendor_Type </b></label>
                <input type='text' id='vendor_type' className='form-control' {...register('vendor_type')}></input>
                <br></br>
                <label htmlFor='email'><b>Email </b></label>
                <input type='email' id='email' className='form-control' {...register('email')}></input>
                <br></br>
                <label htmlFor='address'><b>Address </b></label>
                <input type='textfield' id='address' className='form-control' {...register('address')}></input>
                <br></br>
                <label htmlFor='city'><b>City </b></label>
                <input type='text' id='city' className='form-control' {...register('city')}></input>
                <br></br>
                <label htmlFor='state'><b>State </b></label>
                <input type='text' id='state' className='form-control' {...register('state')}></input>
                <br></br>
                <label htmlFor='country'><b>Country </b></label>
                <input type='text' id='country' className='form-control'{...register('country')}></input>
                <br></br>
                <label htmlFor='pin_code'><b>Pin_Code </b></label>
                <input type='number' id='pin_code' className='form-control'{...register('pin_code')}></input>
                <br></br>
                <label htmlFor='mobile'><b>Mobile </b></label>
                <input type='text' id='mobile' className='form-control'{...register('mobile')}></input>
                <br></br>
                <label htmlFor='bank_name'><b>Bank_Name </b></label>
                <input type='text' id='bank_name' className='form-control'{...register('bank_name')}></input>
                <br></br>
                <label htmlFor='passbook_copy'><b>Passbook_Copy </b></label>
                <input type='file' id='passbook_copy' className='form-control' {...register('passbook_copy')}></input>
                <br></br>
                <label htmlFor='current_account_no'><b>Current_account_no </b></label>
                <input type='text' id='current_account_no' className='form-control'{...register('current_account_no')}></input>
                <br></br>
                <label htmlFor='ifsc_code'><b>IFSC_code </b></label>
                <input type='text' id='ifsc_code' className='form-control'{...register('ifsc_code')}></input>
                <br></br>
                <input type='submit' value='UPDATE VENDOR' className='btn btn-success col-4'></input>
        
                <input type='reset' value='RESET' className='btn btn-danger col-4 float-end'></input>
        
            </form>
        </div>
    
    </>
  )
}

export default Update_Vendor