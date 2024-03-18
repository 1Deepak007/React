import React, { useState } from 'react'

export default function CndtnlRndrng() {    
    

    const [loggedIn, setloggedIn] = useState(false)
    // const [loggedIn, setloggedIn] = useState(true)
    
    const [nwlgIn, setnwlgIn] = useState(2)
    return(
        <>
            <h3 className = 'text-center' > Conditional Rendring </h3>

            {/* if else */}
            <div className='text-center'>
                {loggedIn ? <h6>Welcome Deepak</h6> : <h6>Welcome Guest</h6>}
            </div>


            {/* if elif else */}
            <div className="text-center">
                {nwlgIn==1 ? <h6>Hello User 1</h6> : nwlgIn==2? <h6>Hello User 2</h6> : <h6>Hello Guest</h6>}
            </div>
            
            <hr />
        </>
    )
}