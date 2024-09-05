import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const MyWishlist = () => {
  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/myWishlist/${user.email}`)
        .then((res) => {
          setDetails(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
        });
    }
  }, [user?.email]);

//  ! deleting wishes 

 const handleDelete = id => {
    fetch(`http://localhost:5000/myWishlist/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        Swal.fire({
          title: "Success!",
          text: "Deleted Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      const remaining = details.filter(detail =>detail._id !== id )
      setDetails(remaining)
      
      }
    })
 }




  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/55sd0Qv/brian-babb-Xbw-Hrt87m-Q0-unsplash-2.jpg"
          alt="Full Image"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white mt-14 text-4xl font-bold">
            My <span className="text-customGreen">Wishlist</span>
          </h1>
        </div>
      </div>

      {/* User Info Card */}
      <div className="flex justify-center mt-12">
        <div className="flex flex-col items-center">
          {/* User Image */}
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-customGreen shadow-md transition duration-500 ease-in-out transform hover:scale-110"
            src={user?.photoURL}
            alt={user?.displayName}
          />

          {/* User Name */}
          <h2 className="mt-4 text-3xl font-bold text-customGreen hover:text-customYellow transition duration-300">
            {user?.displayName}
          </h2>

          {/* User Email */}
          <p className="text-lg text-gray-500 mt-2 hover:text-gray-700">
            {user?.email}
          </p>
        </div>
      </div>
      {/* Wishlist Table */}
      <div className="mt-12 mx-6 md:mx-40">
        {details.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-900 text-white text-left">
                  <th className="py-4 px-6">Image</th>
                  <th className="py-4 px-6">City</th>
                  <th className="py-4 px-6">Starting Price</th>
                  <th className="py-4 px-6">Ending Price</th>
                  <th className="py-4 px-6">Action</th>
                </tr>
              </thead>
              <tbody>
                {details.map((detail) => (
                  <tr key={detail._id} className="border-b">
                    <td className="py-4 px-6">
                      <img
                        src={detail.houseImage}
                        alt={detail.houseCity}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-4 font-bold px-6">{detail.houseCity}</td>
                    <td className="py-4 font-bold px-6">
                      ${detail.houseStarting.toLocaleString()}
                    </td>
                    <td className="py-4 font-bold px-6">
                      ${detail.houseEnding.toLocaleString()}
                    </td>
                    <td className="py-4 font-bold px-6">
                      <button onClick={()=> handleDelete(detail._id)} className="px-4 py-2 text-sm bg-customGreen text-white rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mt-6 text-gray-600">
            No wishlist items found
          </p>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
