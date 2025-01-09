import Main from "../sections/Main";
import Standards from "../sections/Standards";

const Home = () => {
  return (
    <div className="flex flex-col gap-0 lg:gap-40 xl:gap-72">
      <Main />
      <Standards />
    </div>
    
  );
};

export default Home;
