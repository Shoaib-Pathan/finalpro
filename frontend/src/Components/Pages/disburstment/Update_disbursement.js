import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchdisburs } from '../APIServices/APIservises';
import { putdis } from '../APIServices/APIservises';

function Update_disbursement() {

                    const {register,setValue,handleSubmit, formState:{errors}} = useForm();
                    const {userId} = useParams();
                    const navigate = useNavigate();

                    async function fetchUser(){
                        const result = await fetchdisburs(userId)
                        setValue('id',result.data.id)
                        setValue('loan',result.data.loan)
                        setValue('insurance_doc', result.data.insurance_doc);
                        setValue('payment_mode', result.data.payment_mode);
                        setValue('net_disbursed_amount', result.data.net_disbursed_amount);
                        setValue('disbursed_to_account_no', result.data.disbursed_to_account_no);
                        setValue('receipt_doc', result.data.receipt_doc);
                        setValue('status', result.data.status);
                    
                    }
            useEffect(()=>{fetchUser()})
                    
                    async function saveData(data){
                      const result = await putdis(data)
                      if(result.status===201){
                        navigate('/showdisburs')
                      }

                    }
  return (
    <>
        <h1 style={{color:'red'}}><center><b>Update_disbursement</b></center></h1>
      <div className='container jumbotron'>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='id' ><b>ID</b></label>
            <input id='id' {...register('id' , { required: true })} className='form-control' readOnly='true' /><br />
            <label htmlFor='loan' ><b>LOAN ID</b></label>
            <input id='loan' {...register('loan' , { required: true })} className='form-control' readOnly='true' /><br />
            {/* {errors.loan && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <label htmlFor='doc' ><b>INSURANCE DOCUMENT</b></label>
            <input id='doc' type='file' {...register('insurance_doc' , { required: true })} className='form-control' /><br />
            {/* {errors.insurance_doc && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <label htmlFor='pay' ><b>PAYMENT MODE</b></label>
            <select id='pay' {...register('payment_mode' , { required: true })} className='form-control'>
                <option>ONLINE</option>
                <option>CASH</option>
                <option>CHEQUE</option>
            </select><br />
            {/* {errors.payment_mode && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <label htmlFor='net' ><b>NET DISBURSED AMOUNT</b></label>
            <input id='net' {...register('net_disbursed_amount' , { required: true })} className='form-control' /><br />
            {/* {errors.net_disbursed_amount && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <label htmlFor='acc' ><b>AMOUNT DISBURSED TO A/C</b></label>
            <input id='acc' {...register('disbursed_to_account_no' , { required: true })} className='form-control' /><br />
            {/* {errors.disbursed_to_account_no && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <label htmlFor='receipt' ><b>RECEIPT</b></label>
            <input id='receipt' type='file' {...register('receipt_doc' , { required: true })} className='form-control' /><br />
            {/* {errors.receipt_doc && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <label htmlFor='status' ><b>STATUS</b></label>
            <select id='status' {...register('status' , { required: true })} className='form-control'>
                <option>PENDING</option>
                <option>DISBURSED</option>
            </select><br /><br />
            {/* {errors.status && <span style={{color:'Red'}}><b>This field is required</b></span>} */}
            <input type='submit'  value='UPDATE' className='btn btn-success col-4' />
            <input type='reset' value='RESET' className='btn btn-warning col-4 float-end' />
            <br /><br />
        </form>
    </div>
    
    
    </>
  )
}

export default Update_disbursement