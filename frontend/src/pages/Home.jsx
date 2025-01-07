import Logo from "../assets/Logo.svg";
import frontDog from "../assets/frontDog.svg";
import healthCare from "../assets/healthCare.svg";
import grooming from "../assets/grooming.svg";
import store from "../assets/store.svg";

const Home = () => {
  return (
    <div className="h-screen w-screen">
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
        <div className="text-xl font-semibold bg-[#031D44] px-7 py-2 rounded-full text-[#F2E3BC]">
          Sign Up
        </div>
      </div>

      {/* Home */}
      <div className="bg-[#FCF0CC] flex relative">
        <div className="w-[50%] flex flex-col justify-center px-12 gap-4">
          <div className="text-6xl font-bold text-[#031D44]">
            Your Dog's <br /> Second Home
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
        <div className="w-[50%]">
          <img
            className="h-full scale-x-[-1] w-full object-none"
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

export default Home;
