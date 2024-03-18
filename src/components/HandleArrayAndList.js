import React from 'react';
import { Button,Table } from 'react-bootstrap';

export default function HandleArrayAndList() {
    const students = ['Anil', 'Yashwardhan', 'Ajay', 'Deepak'];          // HandleArray.js

    //Accessing array elements by map function 
    students.map((item) => {
        console.warn('Index', students.indexOf(item), item);
    })

    //Accessing array elements by looping
    for (let i = 0; i <= students.length; i++) {
        console.log('Students ', [i], ' : ', students[i]);
        // document.write('Students ',[i],' : ',students[i]);
    }

    //List
    const teachers =[ 
        {name:'Ravi',contact:9283847657,email:'Ravi@gmail.com'},
        {name:'Dilawar',contact:8749823749,email:'Dilawar@gmail.com'},
        {name:'Anil',contact:7349832748,email:'Anil@gmail.com'},
        {name:'Gautam',contact:8739483784,email:'Gautam@gmail.com'},
        {name:'Kirti',contact:2837489228}
    ]


    // nested array   : below data is similay to what comes with api
    const users = [
        {name:'Ishita', email:'Ishita@gmail.com', address:[
            {Hn:'2a-2b',city:'Nainital',country:'India'},
            {Hn:'256',city:'Delhi',country:'India'},
            {Hn:'2278',city:'Goa',country:'India'},
            {Hn:'267',city:'Pune',country:'India'},
        ]},
        {name:'Pooja', email:'Pooja@gmail.com', address:[
            {Hn:'8237',city:'Nainital',country:'India'},
            {Hn:'8279',city:'Delhi',country:'India'},
            {Hn:'8273',city:'Goa',country:'India'},
            {Hn:'8364',city:'Pune',country:'India'},
        ]},
        {name:'Deepak', email:'Deepak@gmail.com', address:[
            {Hn:'23',city:'Nainital',country:'India'},
            {Hn:'42',city:'Delhi',country:'India'},
            {Hn:'43',city:'Goa',country:'India'},
            {Hn:'12',city:'Pune',country:'India'},
        ]},
        {name:'Deepti', email:'Deepti@gmail.com', address:[
            {Hn:'67a',city:'Nainital',country:'India'},
            {Hn:'82n',city:'Delhi',country:'India'},
            {Hn:'79b',city:'Goa',country:'India'},
            {Hn:'9w',city:'Pune',country:'India'},
        ]},
        {name:'Riccha', email:'Riccha@gmail.com', address:[
            {Hn:'287a/10',city:'Nainital',country:'India'},
            {Hn:'87b/19',city:'Delhi',country:'India'},
            {Hn:'22v/8',city:'Goa',country:'India'},
            {Hn:'267z/10',city:'Pune',country:'India'},
        ]},
    ]

    return (
        <>
            <h2 className='text-center'> Handle Arrays in React </h2>
            
            {   // ky is the key used by react to uniquely identify elements
                students.map((item,ky) =>
                    <h6 key={ky}>Name : {item}</h6>
                )
            }                                           <br /><br />

            
            <Table striped bordered hover>
                <thead>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                </thead>
            {
                // j is the key used by react to uniquely identify elements
                teachers.map((item,i) => 
                    <tbody>
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.email}</td>
                        {/* <h5>{item.name} , {item.email}</h5> */}
                        </tr>
                    </tbody>
                )
            }
            </Table>


            <hr />

            <h2 className='text-center'> Handle Nested Arrays in React </h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {
                    users.map((item, i)=>
                        <tbody>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {
                                        item.address.map((address)=>
                                            <tr>
                                                <td>{address.Hn}</td>
                                                <td>{address.city}</td>
                                                <td>{address.country}</td>
                                            </tr>
                                        )
                                    }
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
            
            <hr />
        </>
    )
}
