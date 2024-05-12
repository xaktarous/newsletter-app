import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Left = () => {
    const [email,setEmail]=useState("");
    const [isTrue,setIsTrue]=useState(false);
    const navigate= useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault();
      
      if(/^[A-z]+[0-9]*[.]?[A-z]+[0-9]*@[A-z]+[.][a-z]+$/.test(email)){
         setIsTrue(false);
         localStorage.setItem("data",JSON.stringify(email))
       navigate("/success")
      }else{
        setIsTrue(true);
      }
    }
    const handleChange=(e)=>{
        setEmail(e.target.value)
    }
  return (
    <div className="left">
    <h1>Stay updated!</h1>
    <p>Join 60,000+ product managers receiving monthly updates on:</p>
 
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 21 21">
        <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
          <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
          <p>Product discovery and building what matters</p>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21">
        <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
          <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
          <p>Measuring to ensure updates are a success</p>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21">
        <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
          <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
          <p>And much more!</p>
    </li>
    <form className="fel" onSubmit={handleSubmit} >
   <label>Email address {isTrue && <span id="span" className="span">valid email required</span>}</label>
   <input className={isTrue && "invalid"} id="input" type="email" placeholder="email@company.com" value={email} onChange={handleChange}/>
   <button id="sub" type="submit">Subscribe to monthly newsletter</button>
    </form>
  </div>
  )
}
export default Left
