// basic form validation

import React, { useState } from 'react'

export default function BasicFormValid() {

    const[user,setuser] = useState('')
    const[password,setpassword] = useState('')
    const[userErr, setuserErr] = useState(false)
    const[passErr , setpassErr ]=useState(false);

    function loginHandle(e){
        if(user.length <3||password.length<3){
            alert('Type correct values')
        }else{
            alert('all good')
        }
        e.preventDefault()
    }
    function userHandler(e){
        // console.warn(e.target.value); console.warn(e.target.value.length)
        let item = e.target.value;
        if(item.length < 4){
            // console.log('Invalid')
            setuserErr(true)
        }
        else{
            setuserErr(false)
        }
        setuser(item)
    }

    function passHandler(e){
        let item = e.target.value;
        if(item.length < 4){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpassword(item)
    }

    return (
        <>
            <form onSubmit={loginHandle} className='text-center'>
                <h3>Basic Form Validation</h3>

                <input type="text" placeholder='User Id' onChange={userHandler}/>     {userErr ? <span>User not valid</span>:""}       &nbsp;

                <input type="password" placeholder='User Password' onChange={passHandler}/> {passErr ? <span>Password not valid</span> : ""}   &nbsp;

                <button className='btn btn-success text-center' type='submit'>Login</button>
            </form>

            <hr />
        </>
    )
}
