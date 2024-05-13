import {All} from "../component"
import images from "../assets/icon-success.svg"
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