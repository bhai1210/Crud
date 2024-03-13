import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { array, boolean } from 'yup'

function Tables() {
    const [apidata, setapidata] = useState([])
    const [fake,setfake] = useState(boolean)

    const fetchdata = () => {
        axios.get('https://65d60968f6967ba8e3bd5619.mockapi.io/users').then((res) => {
            console.log(res.data, "res fkor fdf")
            setapidata(res.data)
            if(res.data != null){
                setfake(false)
            }
            console.log(apidata, 'fddfd')
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchdata()
        console.log(apidata, "aaj ka array")
    }, [])

    const deletedata = ((id) => {
        axios.delete('https://65d60968f6967ba8e3bd5619.mockapi.io/users/'+id).then((response)=> {
            console.log(response)
            fetchdata();
        }).catch((arr)=> {
            console.log(arr)
        })
    })

    const seteditdata = ((id, email,password )=> {
        console.log(id,email,password,"fdjkkfjskdskfks")
        localStorage.setItem("Id", id)
        localStorage.setItem("EMAIL", email)
        localStorage.setItem("Password", password)
     

    })

    return (
        <div>
            <div>
                <Link  to={'/createdata'}>
                <button className='btn btn-primary'>
                    Create Data
                </button>
                </Link>
            </div>
            {
           fake ?  <h1 style={{color:'red',fontStyle:"inherit",fontWeight:'bold',fontSize:50}}>Loding.................................</h1> :   <table className="table table-striped table-dark table table-striped  table-bordered">
           <thead  >
               <tr>
                   <th scope="col">ID</th>
                   <th scope="col">Email</th>
                   <th scope="col">Password</th>
                   <th scope="col">Edit</th>
                   <th scope="col">Delete</th>

               </tr>
           </thead>
           <tbody>

               {
                   apidata.map((data, index) => {

                       return (
                           <>
                               <tr>

                                   <td>{data.id}</td>
                                   <td>{data.email}</td>
                                   <td>{data.password}</td>
                                   <td><Link to={'/edit'}><button  className='btn btn-primary' onClick={()=> seteditdata(data.id,data.email,data.password)} >Edit</button></Link></td>
                                   <td><Link><button  className='btn btn-danger' onClick={()=>  {
                                     if(window.confirm("are you sure you want to delete this data")) deletedata(data.id)} }>Delete</button></Link></td>
                               </tr>
                           </>
                       )





                   })
               }


           </tbody>



       </table>
            }
          


        </div>
    )
}

export default Tables