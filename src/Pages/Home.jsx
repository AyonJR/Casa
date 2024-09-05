import Advertisement from "../Layout/Advertisement";
import Agents from "../Layout/Agents";
import Banner from "../Layout/Banner";
import ChooseUs from "../Layout/ChooseUs";
import Testimonials from "../Layout/Testimonials";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-24">
        <Advertisement></Advertisement>
      </div>
      <div className="mt-24">
        <ChooseUs></ChooseUs>
      </div>
      <div className="lg:-mt-24">
        <Agents></Agents>
      </div>
      <div className="mt-24">
        <Testimonials></Testimonials>
      </div>
     

    </div>
  );
};

export default Home;
