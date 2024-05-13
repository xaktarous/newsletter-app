import {All} from "../component"
import images from "../assets/illustration-sign-up-mobile.svg"
import "./home.css"
const Home = () => {
  return (
    <>
     <img class="svg"  src={images}  alt="Sign up picture"/>
    <main>
    <All/>
   </main>
   </>
  )
}
export default Home