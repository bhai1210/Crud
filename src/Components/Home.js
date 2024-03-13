import React from 'react'
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Home() {

    const navigate = useNavigate();
  return (
 <>
  
  <div style={{display : 'flex' ,paddingLeft:500, alignItems :'center', background: 'rgb(83, 167, 219)'}}>
  <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {

        axios.post("https://65d60968f6967ba8e3bd5619.mockapi.io/users",values).then((res)=> {
       console.log(res.data,"res from api data")
        })
        
         setTimeout(() => {
           setSubmitting(false);
           navigate("/readdata");
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        //  <form onSubmit={handleSubmit}>
        //     <div style={{display: 'flex',justifyContent: 'center',marginTop: 10 ,color:'white'}} >
        //         <h1>
        //             Create Form data
        //         </h1>
        //     </div>
        //     <div style={{marginTop:10}} className='form-group' >
        //     <label style={{color:'white',fontWeight: 'bold',marginBottom:10}}>EMail</label>
        //     <input
        //      type="email"
        //      className='form-control'
        //      name="email"
        //      onChange={handleChange}
        //      onBlur={handleBlur}
        //      value={values.email}
        //    />
        //    <div  style={{display: 'flex',justifyContent: 'center',marginTop: 10 ,color:'white'}}>  
        //    {errors.email && touched.email && errors.email}
        //    </div>
    
        //     </div>
         
        //  <div style={{marginTop:5}} className='form-group'>
        //  <label style={{color:'white',fontWeight: 'bold',marginBottom:10}}>Password</label>
        //  <input
        //    className='form-control'
        //      type="password"
        //      name="password"
        //      onChange={handleChange}
        //      onBlur={handleBlur}
        //      value={values.password}
        //    />
        //    {errors.password && touched.password && errors.password}

        //  </div>
        
        //    <div  style={{display: 'flex',justifyContent: 'center',marginTop: 10}} >

        //    <button      className='btn btn-primary' type="submit" disabled={isSubmitting}>
        //      Submit
        //    </button>
        //    </div>
           
        //  </form>
           <form onSubmit={handleSubmit}>
           <div style={{display: 'flex',justifyContent: 'center',marginTop: 10 ,color:'white'}} >
               <h1>
                   Create Form data
               </h1>


               
           </div>
           <div style={{marginTop:10}} className='form-group' >
           <label style={{color:'white',fontWeight: 'bold',marginBottom:10}}>EMail</label>
           <input
            type="email"
            className='form-control'
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div  style={{display: 'flex',justifyContent: 'center',marginTop: 10 ,color:'white'}}>  
          {errors.email && touched.email && errors.email}
          </div>
   
           </div>
        
        <div style={{marginTop:5}} className='form-group'>
        <label style={{color:'white',fontWeight: 'bold',marginBottom:10}}>Password</label>
        <input
          className='form-control'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}

        </div>
       
          <div  style={{display: 'flex',justifyContent: 'center',marginTop: 10}} >

          <button      className='btn btn-primary' type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
          
        </form>
       )}
     </Formik>
  </div>

 </>
  )
}

export default Home