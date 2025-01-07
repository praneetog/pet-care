import { InputBox } from '../components/InputBox';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <InputBox onChange={(e) => {
          setEmail(e.target.value)
        }} placeholder="praneet@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/user/signin", {
              email,
              password
          })
          navigate("/home")
          }} label={"Sign in"} />
        </div>
        <div>
            Don't have an Account? <Link to={"/signup"}>Sign Up</Link> 
        </div>
      </div>
    </div>
  </div>
}

export default Signin