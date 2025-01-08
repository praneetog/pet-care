import petBoarding from "../assets/petBoarding.png"
import petNursing from "../assets/petNursing.png"
import petWalking from "../assets/petWalking.png"

const Standards = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-white pt-44">
      {/* Heading */}
      <div className="text-5xl font-bold text-[#031D44]">
        Our Pet Care Standards
      </div>

      {/* Cards */}
      <div className="h-full w-full">
        {/* Pet Nursing */}
        <div className="flex justify-center items-center w-[80%] gap-20">
            {/* Image Div */}
            <div className="w-[30%]">
                <img className="h-72 w-72 object-cover rounded-full" src={petBoarding} alt="" />
            </div>

            {/* Description */}
            <div className="">
                <div className="text-3xl font-semibold text-[#031D44]">
                    Pet Boarding
                </div>
                <div>
                    Our Place offers nice Pet Boarding Our Place offers nice Pet Boarding Our Place offers nice Pet Boarding Our Place offers nice Pet Boarding Our Place offers nice Pet Boarding Our Place offers nice Pet Boarding
                </div>
            </div>
        </div>

        {/* Pet Boarding */}
        <div></div>

        {/* Pet Walking */}
        <div></div>
      </div>
    </div>
  );
};

export default Standards;
