import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Signup = () => {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  return (
    <div>
        <InputBox onChange={(e) => {
          setFullName(e.target.value)
        }} placeholder="Praneet" label={"Full Name"} type={"text"} />
        <InputBox onChange={(e) => {
          setPhone(e.target.value)
        }} placeholder="0123456789" label={"Phone Number"} />
        <InputBox onChange={(e) => {
          setEmail(e.target.value)
        }} placeholder="praneet@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div>
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/user/signup", {
              fullName,
              phone,
              email,
              password,
          });
          navigate("/home")
          }} label={"Sign up"} />
        </div>
        <div>
            Already have an Account? <Link to={"/signin"}>Sign In</Link> 
        </div>
    </div>
  )
}

export default Signup 