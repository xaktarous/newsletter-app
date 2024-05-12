import "./success.css"
import secIcon from "../assets/icon-success.svg"

const Success = () => {
  return (
    <body className="body">
    <main id="main">
        
              <img className="sImg" src={secIcon}/>
              <h1 className="H1">Thanks for subscribing!</h1>
              <p className="P">  A confirmation email has been sent to <span id="g" style={{fontWeight:"600"}}> {JSON.parse(localStorage.getItem("data"))} </span> 
                
                Please open it and click the button inside to confirm your subscription.
                 Dismiss message</p>
                
                 <form className="form" action="https://mail.google.com/">
                 <button className="btn" type="submit">Dismiss message</button>
                </form>
           
        
    </main>
   
   </body>
  )
}
export default Success

