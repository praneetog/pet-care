import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen">
      <div className="bg-[#F2E3BC] w-[50%] flex flex-col justify-center items-center">
        <InputBox
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          placeholder="Full Name"
          type={"text"}
        />
        <InputBox
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Phone"
          type={"text"}
        />
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          type={"text"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type={"password"}
        />
        <div className="bg-[#F2E3BC] w-[40%] p-4">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/user/signup",
                {
                  fullName,
                  phone,
                  email,
                  password,
                }
              );
              navigate("/home");
            }}
            label={"Sign up"}
          />
        </div>
        <div className="bg-[#F2E3BC]">
          Already have an Account? <Link to={"/signin"}>Sign In</Link>
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
  );
};

export default Signup;
