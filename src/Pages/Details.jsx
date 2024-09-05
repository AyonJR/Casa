import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
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
      houseImage : details?.images?.[0] ,
      houseCity : details.city ,
      houseStarting : details.starting_price ,
      houseEnding : details.ending_price ,

    };
    
    // console.log(userInfo) 
 
    const res =  await axios.post('http://localhost:5000/wishes', userInfo);
    console.log(res)
    if(res.data.insertedId){
    
      console.log(userInfo);
      Swal.fire({
        title: "Success!",
        text: "Added to wishlist",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }

  };

  // const name = user.displayName
  // const email = user.email
  // const image = user.photoURL
  // console.log(id)

  // TODO fetching data for specific id

  useEffect(() => {
    axios.get(`http://localhost:5000/details/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, [id]);

  // console.log(details);

  return (
    <div className="lg:pt-[30vh]">
      <div className="flex justify-between">
        <div>
          <div className="flex justify-items-start items-center relative  lg:ml-40 ">
            <h2 className="text-3xl font-bold">
              Beautiful house in {details.city}
            </h2>
          </div>
          <div className="lg:ml-40 mt-2">
            <p>{details.address}</p>
          </div>
        </div>
        <div className="lg:mr-40">
          <h2 className="text-2xl font-bold">
            ${details.starting_price} - ${details.ending_price}
          </h2>
          <p>
            <span className="text-xl font-semibold">{details.bed}</span> BD{" "}
            <span className="text-xl font-semibold ml-5">{details.bath}</span>{" "}
            BA{" "}
            <span className="text-xl font-semibold ml-5">{details.area}</span>
          </p>
        </div>
      </div>

      {/* photos div */}
      <div className="flex mt-8">
        <div className="w-1/2">
          <img src={details?.images?.[0]} alt="" />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 w-1/2 border-2 border-white">
          <img src={details?.images?.[1]} alt="" />
          <img
            className=" border-2 border-white"
            src={details?.images?.[2]}
            alt=""
          />
          <img src={details?.images?.[3]} alt="" />
          <img
            className=" border-2 border-white"
            src={details?.images?.[4]}
            alt=""
          />
        </div>
      </div>
      {/* key details */}
      <div className="mt-12 mx-40 flex justify-between">
        <div className="w-2/3  ">
          <h2 className="text-2xl font-bold">Key details</h2>
          <div className="flex justify-between">
            <div className="">
              <h2 className="mt-6">STATUS</h2>
              <h2 className="text-xl mt-1 font-semibold ">Coming soon</h2>
              <h2 className="mt-6">YEAR BUILT</h2>
              <h2 className="text-xl mt-1 font-semibold">
                {details.year_built}
              </h2>
            </div>
            <div className="mr-28">
              <h2 className="mt-6">PROPERTY TYPE</h2>
              <h2 className="text-xl mt-1 font-semibold ">Apartment</h2>
              <h2 className="mt-6">STORIES</h2>
              <h2 className="text-xl mt-1 font-semibold">{details.stories}</h2>
            </div>
          </div>
        </div>
        {/* agent details */}
        <div>
          <div>
            <h2 className="text-2xl font-bold">Listed By</h2>
          </div>
          <div className="flex gap-4">
            <div className="mt-6">
              <img className="w-24 h-24" src={details?.agent_image} alt="" />
            </div>
            <div className="mt-6">
              <h2 className="font-bold">{details.agent_name}</h2>
              <div className="mt-2">
                <p>{details.agent_mail}</p>
                <p>{details.agent_number}</p>
              </div>
              <div className="mt-2">
                <button className="bg-gray-900 text-white font-bold py-2 px-2 rounded-lg">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mx-40">
        <h2 className="font-bold text-2xl ">Overview</h2>
        <p className="mt-2">{details.description}</p>
      </div>
      <div className="mt-4 ml-40">
        <button
          onClick={handleUser}
          className="bg-gray-900 text-white font-bold py-2 px-2 rounded-lg"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Details;
