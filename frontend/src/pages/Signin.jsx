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

    return <div className="h-screen w-screen flex">
    <div className="bg-[#F2E3BC] w-[50%] flex flex-col justify-center items-center">
        <InputBox onChange={(e) => {
          setEmail(e.target.value)
        }} placeholder="praneet@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="bg-[#F2E3BC] w-[40%] p-4">
          <Button className="" onClick={async () => {
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
    <div className="flex flex-col justify-center items-center bg-[#031D44] w-[50%]">
        <div className="text-[#F2E3BC] text-5xl font-bold flex flex-col justify-center items-center">
          <div>
            "Until one has loved an <br />
          </div>
          <div>
            animal, a part of one's soul <br />
          </div>
          <div>
            remains unawakened." <br />
          </div>
        </div>
        <div className="text-[#F2E3BC] text-4xl">- Anatole France</div>
      </div>
  </div>
}

export default Signin