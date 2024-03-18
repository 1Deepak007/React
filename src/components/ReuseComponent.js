import React from 'react'
// import { Table } from 'react-bootstrap';

export default function ReuseComponent(props) {

    console.log(props.data);


  return (
    <>
        {/* <Table>
            <thead>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </thead>
            <tbody>
                <tr>
                    <td>{props.id+1}</td>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.contact}</td>
                </tr>
            </tbody>
        </Table> */}
        <h3 className='text-center'>Id : {props.id}</h3>
        <h3 className='text-center'>Name : {props.name}</h3>
        <h3 className='text-center'>Email : {props.email}</h3>
        <h3 className='text-center'>Contact : {props.contact}</h3>
        <hr />
    </>
  )
}

