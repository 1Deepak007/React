function PropsWthFxnlComp(props) {
    console.log(props.name);
  return (
    <>
        <h3 className="text-center">Props with functional component</h3>
        <h4>Name : {props.name}, Age : {props.age}, 
        Address : {props.other.address},
        Mobile : {props.other.mobile}</h4> 
    </>
  )
}

export default PropsWthFxnlComp;