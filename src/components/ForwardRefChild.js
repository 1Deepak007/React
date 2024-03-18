import React,{forwardRef} from 'react'

function ForwardRefChild(props,received_ref) {
  return (
    <>
        <h2 className='text-center'>ForwardRefChild</h2>
        <input type="text" ref = {received_ref} />
    </>
  )
}

export default forwardRef(ForwardRefChild)
