import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Edit() {
    const navigate = useNavigate();
    const [id,setid] = useState(0)
    const [email,setemail] = useState('')
    const [password ,setpassword] = useState('')
 
    useEffect(()=> {
        setid(localStorage.getItem('Id'))
     setemail(localStorage.getItem('EMAIL'))
     setpassword(localStorage.getItem('Password'))
    },[])
  
    const handleSubmit = (e) => {
        e.preventDefault();
         
        const updata = { 
            id : id,
            email : email,
            password : password
        }
 
    console.log(updata,"value get from datas")
    axios.put('https://65d60968f6967ba8e3bd5619.mockapi.io/users/'+id,updata)
    .then(()=> {
        navigate('/readdata')
    }).catch((err)=> {
        console.log(err)
    })

    }
     
  return (
    <div >
 
  <div style={{display : 'flex' ,paddingLeft:500, alignItems :'center', background: 'rgb(222, 53, 197)'}}>

  <form onSubmit={handleSubmit}>
            <div style={{display: 'flex',justifyContent: 'center',marginTop: 10,color:'white'}} >
                <h1>
                    Update Form Data
                </h1>
            </div>
         
            <div style={{marginTop:10}} className='form-group' >
            <label style={{color:'white',fontWeight:'bold',marginBottom:10}}>EMail</label>
            <input
             type="email"
             className='form-control'
             name="email"
             onChange={(e)=> setemail(e.target.value) }
             value={email}
           />
         
            </div>
         
         <div style={{marginTop:5}} className='form-group'>
         <label style={{color:'white',fontWeight:'bold',marginBottom:10}}>Password</label>
         <input
           className='form-control'
             type="password"
             name="password"
             onChange={(e)=> setpassword(e.target.value) }
             value={password}
           />
          

         </div>
        
           <div  style={{display: 'flex',justifyContent: 'center',marginTop: 10}} >

           <button      className='btn btn-primary' type="submit" >
             Submit
           </button>
           </div>
           
         </form>
  </div>
    </div>
  )
}

export default Edit