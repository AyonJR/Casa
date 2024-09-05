import { HiOutlineHomeModern } from "react-icons/hi2";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const ChooseUs = () => {
  return (
    <div className="lg:mx-0 mx-5">
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://i.ibb.co/Ny0Q8Zv/nathan-fertig-FBXu-Xp57e-M0-unsplash.jpg"
          alt="Choose Us"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center bg-black bg-opacity-50">
          <h1 className="text-white mt-14 text-4xl font-bold">
            Why <span className="text-customGreen">Choose</span> Us
          </h1>
        </div>
      </div>

      {/* why choose us */}
      <div className="flex flex-col md:flex-row justify-center md:relative md:bottom-52 space-y-4 md:space-x-4 md:space-y-0">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="bg-base-100 w-full md:w-[300px] shadow-xl"
        >
          <figure className="px-10 pt-10 flex justify-center">
            <img className="w-20" src="https://i.ibb.co/w6Pwq7b/423483-200.png" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Find your future home</h2>
            <p>We help you to find a new home by offering a smart real estate experience.</p>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="bg-base-100 w-full md:w-[300px] shadow-xl"
        >
          <figure className="px-10 pt-10 flex justify-center">
            <img className="w-20" src="https://i.ibb.co/VLD3G6f/3439283.png" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Experienced agents</h2>
            <p>Find an agent who knows your market best.</p>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="bg-base-100 w-full md:w-[300px] shadow-xl"
        >
          <figure className="px-10 pt-10 flex justify-center">
            <img className="w-20" src="https://i.ibb.co/vDtdszy/245904.png" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Buy homes</h2>
            <p>Buy desired homes in your favorite cities.</p>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="bg-base-100 w-full md:w-[300px] shadow-xl"
        >
          <figure className="px-10 pt-10 flex justify-center">
            <img className="w-20" src="https://i.ibb.co/WWMg8hX/owner.png" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">List your own property</h2>
            <p>Sign up and sell your own property.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseUs;
