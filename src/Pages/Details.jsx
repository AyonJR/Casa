import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const handleUser = async () => {
    const userInfo = {
      image: user.photoURL,
      email: user.email,
      name: user.displayName,
      houseImage: details?.images?.[0],
      houseCity: details.city,
      houseStarting: details.starting_price,
      houseEnding: details.ending_price,
    };

    const res = await axios.post('http://localhost:5000/wishes', userInfo);
    if (res.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Added to wishlist",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, [id]);

  return (
    <div className="pt-16 lg:pt-[30vh] px-4 lg:px-0">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="lg:ml-40">
          <h2 className="text-2xl lg:text-3xl font-bold">Beautiful house in {details.city}</h2>
          <p className="mt-2">{details.address}</p>
        </div>
        <div className="lg:mr-40 mt-4 lg:mt-0">
          <h2 className="text-xl lg:text-2xl font-bold">
            ${details.starting_price} - ${details.ending_price}
          </h2>
          <p className="mt-2">
            <span className="text-lg lg:text-xl font-semibold">{details.bed}</span> BD
            <span className="ml-5 text-lg lg:text-xl font-semibold">{details.bath}</span> BA
            <span className="ml-5 text-lg lg:text-xl font-semibold">{details.area}</span> sqft
          </p>
        </div>
      </div>

      {/* Photos section */}
      <div className="flex flex-col lg:flex-row mt-8 gap-4 lg:gap-1">
        <div className="lg:w-1/2">
          <img className="w-full" src={details?.images?.[0]} alt="House" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 lg:w-1/2">
          <img className="w-full" src={details?.images?.[1]} alt="House" />
          <img className="w-full" src={details?.images?.[2]} alt="House" />
          <img className="w-full" src={details?.images?.[3]} alt="House" />
          <img className="w-full" src={details?.images?.[4]} alt="House" />
        </div>
      </div>

      {/* Key details and Agent section */}
      <div className="mt-12 lg:mx-40 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold">Key details</h2>
          <div className="grid grid-cols-2 mt-4 gap-8">
            <div>
              <h2 className="mt-6">STATUS</h2>
              <h2 className="text-lg lg:text-xl mt-1 font-semibold">Coming soon</h2>
              <h2 className="mt-6">YEAR BUILT</h2>
              <h2 className="text-lg lg:text-xl mt-1 font-semibold">{details.year_built}</h2>
            </div>
            <div>
              <h2 className="mt-6">PROPERTY TYPE</h2>
              <h2 className="text-lg lg:text-xl mt-1 font-semibold">Apartment</h2>
              <h2 className="mt-6">STORIES</h2>
              <h2 className="text-lg lg:text-xl mt-1 font-semibold">{details.stories}</h2>
            </div>
          </div>
        </div>

        {/* Agent details */}
        <div className="lg:w-1/3">
          <h2 className="text-xl lg:text-2xl font-bold">Listed By</h2>
          <div className="flex gap-4 mt-4 items-center">
            <img className="w-20 h-20 lg:w-24 lg:h-24" src={details?.agent_image} alt="Agent" />
            <div>
              <h2 className="font-bold">{details.agent_name}</h2>
              <p>{details.agent_mail}</p>
              <p>{details.agent_number}</p>
              <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-lg mt-4">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-6 lg:mx-40">
        <h2 className="font-bold text-xl lg:text-2xl">Overview</h2>
        <p className="mt-2">{details.description}</p>
      </div>

      {/* Wishlist button */}
      <div className="mt-4 lg:mx-40">
        <button
          onClick={handleUser}
          className="bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-full lg:w-auto"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Details;
