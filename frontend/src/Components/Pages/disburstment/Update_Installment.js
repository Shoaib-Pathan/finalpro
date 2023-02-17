import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { putData1 } from '../APIServices/APIservises';
import { Update_Install } from '../APIServices/APIservises';

function Update_Installment() {

                    const {register,setValue, handleSubmit} = useForm();
                    const {userId} = useParams();
                    const navigate = useNavigate();

                    async function fetchallUser(){
                        const result = await Update_Install(userId)
                        setValue('loan',result.data.loan)
                        setValue('remaining_amount',result.data.remaining_amount)
                        setValue('installment_no',result.data.installment_no)
                        setValue('monthly_installment_amount',result.data.monthly_installment_amount)
                        setValue('install_expected_date',result.data.monthly_expected_date)
                        setValue('installment_paid_date',result.data.install_paid_date)
                        setValue('penalty_amount',result.data.penalty_amount)
                        setValue('status',result.data.status)
                    }

        useEffect(()=>{fetchallUser()},[])

                    async function saveData(data){
                        const result = await putData1(userId, data)
                        if(result.status===201){
                            navigate('/show1')
                        }

                    }
  return (
    <>
        <h1 style={{color:'red'}}><center><b>UPDATE FORM</b></center></h1>
        <form onSubmit={handleSubmit(saveData)} className='container jumbotron'> 
       <label htmlFor='loan'><b>loan </b></label>
       <input type='text' id='loan' className='form-control' {...register('loan',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor='remaining_amount'><b>remaining_amount </b></label>
       <input type='text' id='remaining_amount' className='form-control' {...register('remaining_amount',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor='installment_no'><b>installment_no </b></label>
       <input type='number' id='installment_no' className='form-control' {...register('installment_no',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor='monthly_installment_amount'><b>monthly_installment_amount </b></label>
       <input type='text' id='monthly_installment_amount' className='form-control' {...register('monthly_installment_amount',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor='installment_expected_date'><b>installment_expected_date </b></label>
       <input type='date' id='installment_expected_date' className='form-control' {...register('installment_expected_date',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor='installment_paid_date'><b>installment_paid_date </b></label>
       <input type='date' id='installment_paid_date' className='form-control' {...register('installment_paid_date',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor='penalty_amount'><b>penalty_amount </b></label>
       <input type='text' id='penalty_amount' className='form-control' {...register('penalty_amount',{ required: true, maxLength: 10 })}></input>
       <br></br>
       <label htmlFor=' status'><b> status </b></label>
       <select id=' status' className='form-control' {...register(' status',{ required: true})}>
        <option>pending</option>
        <option>disbursed</option>
       </select>
       <br></br>
       <input type='submit' value='UPDATE INSTALLMENT' className='btn btn-success col-4'></input>
        
        <input type='reset' value='RESET' className='btn btn-danger col-4 float-end'></input>
    </form>
    
    </>
  )
}

export default Update_Installment