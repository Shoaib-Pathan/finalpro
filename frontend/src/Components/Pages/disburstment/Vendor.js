import React from 'react';
import {useForm} from 'react-hook-form';
import { addfile } from '../APIServices/APIservises'; 
import {useNavigate} from 'react-router-dom';                           

function Vendor() {

                const {register, handleSubmit, formState:{errors}} = useForm();
                const navigate = useNavigate()
                
                async function sendData(data){
                  const resp = await addfile(data)
                  if (resp.status === 201){
                    navigate('/show')
                }

                function sizeValidation(){
                  const input = document.getElementById('passbook_copy');
                  var file = input.files;
                  if(file.length===0){
                    alert('no file chosen');
                    return false;
                  }
                  var filesize = Math.round((file[0].size / 1024));
                  if (filesize <= 1 * 1024){
                    alert('uploaded')
                  }else{
                    alert('file more than 1mb')
                  }
                  }
                }
  return (                                                      
    <>
        <h1 style={{color:'red'}}><center><b>VENDOR DEPT </b></center></h1>
        <div className='bg-light'>
            
            <form onSubmit={handleSubmit(sendData)} className='container jumbotron'>
                <label htmlFor='application'><b>Application </b></label>
                <input type='text' id='application' className='form-control' {...register('application',{ required: true, maxLength: 10 })}></input>
                {errors.application && <span style={{color:'Red'}}><b>application field is required</b></span>}
                <br></br>
                <label htmlFor='name'><b>Name </b></label>
                <input type='text' id='name' className='form-control' {...register('name',{ required: true, maxLength: 20 })}></input>
                {errors.name && <span style={{color:'Red'}}><b>name field is required</b></span>}
                <br></br>
                <label htmlFor='vendor_type'><b>Vendor_Type </b></label>
                <input type='text' id='vendor_type' className='form-control' {...register('vendor_type',{ required: true, maxLength: 30 })}></input>
                {errors.vendor_type && <span style={{color:'Red'}}><b>vendor_type field is required</b></span>}
                <br></br>
                <label htmlFor='email'><b>Email </b></label>
                <input type='email' id='email' className='form-control' {...register("email",{required: true,  })}></input>
                 {errors.email && <span style={{color:'Red'}}><b>email field is required</b></span>}
                <br></br>
                <label htmlFor='address'><b>Address </b></label>
                <input type='textfield' id='address' className='form-control' {...register('address',{ required: true, maxLength: 50 })}></input>
                {errors.address && <span style={{color:'Red'}}><b>address field is required</b></span>}
                <br></br>
                <label htmlFor='city'><b>City </b></label>
                <input type='text' id='city' className='form-control' {...register('city',{ required: true, maxLength: 20 })}></input>
                {errors.city && <span style={{color:'Red'}}><b>city field is required</b></span>}
                <br></br>
                <label htmlFor='state'><b>State </b></label>
                <input type='text' id='state' className='form-control' {...register('state',{ required: true, maxLength: 20 },)}></input>
                {errors.state && <span style={{color:'Red'}}><b>state field is required</b></span>}
                <br></br>
                <label htmlFor='country'><b>Country </b></label>
                <input type='text' id='country' className='form-control'{...register('country',{ required: true, maxLength: 5 })}></input>
                {errors.country && <span style={{color:'Red'}}><b>country field is required</b></span>}
                <br></br>
                <label htmlFor='pin_code'><b>Pin_Code </b></label>
                <input type='number' id='pin_code' className='form-control'{...register('pin_code',{ required: true, maxLength: 6 })}></input>
                {errors.pin_code && <span style={{color:'Red'}}><b>pin_code field is required</b></span>}
                <br></br>
                <label htmlFor='mobile'><b>Mobile </b></label>
                <input type='text' id='mobile' className='form-control'{...register('mobile',{ required: true, maxLength: 10 })}></input>
                {errors.mobile && <span style={{color:'Red'}}><b>mobile field is required</b></span>}
                <br></br>
                <label htmlFor='bank_name'><b>Bank_Name </b></label>
                <input type='text' id='bank_name' className='form-control'{...register('bank_name',{ required: true, maxLength: 15 })}></input>
                {errors.bank_name && <span style={{color:'Red'}}><b>bank_name field is required</b></span>}
                <br></br>
                <label htmlFor='passbook_copy'><b>Passbook_Copy </b></label>
                <input type='file' accept=".jpg, .jpeg, .png,.pdf"  id='passbook_copy'   className='form-control' {...register('passbook_copy',{required:true})}></input>
                {errors.passbook_copy && <span style={{color:'Red'}}><b>This field is required only allow pdf, jpg, jpeg,png </b></span>}
                <br></br>
                <label htmlFor='current_account_no'><b>Current_account_no </b></label>
                <input type='text' id='current_account_no' className='form-control'{...register('current_account_no',{ required: true, maxLength: 12 })}></input>
                {errors.current_account_no && <span style={{color:'Red'}}><b>current_account_no field is required</b></span>}
                <br></br>
                <label htmlFor='ifsc_code'><b>IFSC_code </b></label>
                <input type='text' id='ifsc_code' className='form-control'{...register('ifsc_code',{ required: true, maxLength: 8 })}></input>
                {errors.ifsc_code && <span style={{color:'Red'}}><b>ifsc_code field is required</b></span>}
                <br></br>
                <input type='submit' value='ADD VENDOR' className='btn btn-success col-4'></input>
        
                <input type='reset' value='RESET' className='btn btn-danger col-4 float-end'></input>
        
            </form>
        </div>
    
    </>
  )
}

export default Vendor