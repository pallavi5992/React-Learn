import { useState } from "react"



const User = (props)=>{
    const [count] = useState(0)
    const [count2] = useState(1)
return (


<div className="user-card">
    <p>{count}</p>
    <p>{count2}</p>
<h2>Name: {props.name}</h2>
<h3>Location:Noida</h3>
<h4>contact:test@gmail.com</h4>
</div>)
}


export default User