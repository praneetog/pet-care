import Logo from "../assets/Logo.png";
import frontDog from "../assets/frontDog.png";
import healthCare from "../assets/healthCare.svg";
import grooming from "../assets/grooming.svg";
import store from "../assets/store.svg";
import dogFoot from "../assets/dogFoot.png";
import dogFoot2 from "../assets/dogFoot2.png";

const Main = () => {
  return (
    <div className="h-screen w-screen scroll-smooth">
      {/* Navbar */}
      <div className="bg-[#FCF0CC] flex justify-between items-center px-12 pt-4">
        <div className="">
          <img className="h-20" src={Logo} />
        </div>
        <div className="flex gap-16 text-xl font-semibold text-[#031D44]">
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact Us</div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="text-xl font-semibold text-[#031D44]">Login</div>
          <div className="text-xl font-semibold bg-[#031D44] px-7 py-2 rounded-full text-[#F2E3BC]">
            Sign Up
          </div>
        </div>
      </div>

      {/* Home */}
      <div className="bg-[#FCF0CC] flex relative">
        {/* Paw Images */}
        <div className="absolute right-[72%] bottom-[75%]">
          <img
            className="h-40 w-40 object-contain opacity-40 -rotate-45"
            src={dogFoot2}
            alt="Bottom Right"
          />
        </div>
        <div className="absolute right-[55%] bottom-[65%]">
          <img
            className="h-40 w-40 object-contain opacity-50 -rotate-45"
            src={dogFoot}
            alt="Top Left"
          />
        </div>
        <div className="absolute right-[60%] bottom-[30%]">
          <img
            className="h-40 w-40 object-contain opacity-40 -rotate-45"
            src={dogFoot2}
            alt="Bottom Left"
          />
        </div>
        <div className="absolute right-[42%] bottom-[15%]">
          <img
            className="h-40 w-40 object-contain opacity-50 -rotate-45"
            src={dogFoot}
            alt="Top Right"
          />
        </div>

        <div className="w-[50%] flex flex-col justify-center px-12 gap-4">
          <div className="text-6xl font-bold text-[#031D44]">
            Your Pet's <br /> Second Home
          </div>
          <div className="text-xl text-[#031D44]">
            Pets teach us unconditional love, loyalty, and joy in life’s
            simplest moments. They leave pawprints on our hearts that stay with
            us forever.
          </div>
          <div className="bg-[#031D44] p-6 w-[40%] mt-6 flex justify-center items-center text-2xl text-[#FCF0CC] rounded-full">
            <div>Customer Reviews</div>
          </div>
        </div>
        <div className="w-[50%] relative overflow-hidden">
          <img
            className="scale-x-[-1] w-full h-full object-contain"
            src={frontDog}
          />
        </div>

        {/* Floating Bar */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white flex justify-between items-center px-20 w-[80%] rounded-3xl shadow-2xl py-8">
          <div className="flex gap-4 w-[33%]">
            <img className="h-16 w-16 object-cover" src={healthCare} />
            <div>
              <div className="text-2xl font-bold">Health Care</div>
              <div>Regular checkup for your pet.</div>
            </div>
          </div>
          <div className="flex gap-4 w-[33%]">
            <img className="h-16 w-16 object-cover" src={grooming} />
            <div>
              <div className="text-2xl font-bold">Grooming</div>
              <div>Grooming is essential for every pet.</div>
            </div>
          </div>
          <div className="flex gap-4 w-[33%]">
            <img className="h-16 w-16 object-cover" src={store} />
            <div>
              <div className="text-2xl font-bold">Pet Store</div>
              <div>Buy pet food, toys, and other essentials.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
