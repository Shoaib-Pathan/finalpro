import React from 'react'
import axios from 'axios'

//for add vender

export const addfile = (data) => {
    // console.log('submitted data----->', data)
    // data.file = data.file[0];
    return axios.post(`http://127.0.0.1:8000/loan1/ven/`,data, {headers:{'content-type':'multipart/form-data'}});

}
//for show vendor
export const showvendor = (data) => {
    return axios.get(`http://127.0.0.1:8000/loan1/ven/`,{headers:{'content-type':'multipart/form-data'}});
}

//for update vendor
export const fetechvendor = (userId) =>{
    return axios.get(`http://127.0.0.1:8000/loan1/ven/${userId}/`,{headers:{'content-type':'multipart/form-data'}});
    
}
//for update vendor
export const putData = (userId, data) =>{
    return axios.put(`http://127.0.0.1:8000/loan1/ven/${userId}/`,data,{headers:{'content-type':'multipart/form-data'}});
    
}
// for add installments
export const addfile1 = (data)=>{
    return axios.post(`http://127.0.0.1:8000/loan1/inst/`, data,{headers:{'content-type':'multipart/form-data'}});
}
//for show installment
export const showinstall = (data)=>{
    return axios.get(`http://127.0.0.1:8000/loan1/inst/`,{headers:{'content-type':'multipart/form-data'}});
}
//for update installment
export const Update_Install = (userId)=>{
    return axios.get(`http://127.0.0.1:8000/loan1/inst/${userId}`,{headers:{'content-type':'multipart/form-data'}});
}
//for update insllment
export const putData1 = (userId, data)=>{
    return axios.put(`http://127.0.0.1:8000/loan1/inst/${userId}`,data,{headers:{'content-type':'multipart/form-data'}});
}
//for add disburs
export const disburs = (data)=>{
    return axios.post(`http://127.0.0.1:8000/loan1/dis/`,data, {headers:{'content-type':'multipart/form-data'},});
}
//for show disburs
export const Show_disburs = ()=>{
    return axios.get(`http://127.0.0.1:8000/loan1/dis/`,{headers:{'content-type':'multipart/form-data'}});
}
//for update disburs
export const fetchdisburs = (userId)=>{
    return axios.get(`http://127.0.0.1:8000/loan1/dis/${userId}`,{headers:{'content-type':'multipart/form-data'}});
}
//for update disburs
export const putdis = (userId,data)=>{
    return axios.put(`http://127.0.0.1:8000/loan1/dis/${userId}`,data)
}