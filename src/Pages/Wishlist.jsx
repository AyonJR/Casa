const Wishlist = () => {
  return (
    <div>
      {/* image div */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/x1nLTpx/sven-brandsma-GZ5c-KOge-IB0-unsplash.jpg"
          alt="Full Image"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white mt-14 text-4xl font-bold">
            About <span className="text-customGreen">Us</span>
          </h1>
        </div>
      </div>
      {/* main content */}
      <div className="flex items-center lg:flex-row flex-col-reverse gap-5 lg:mx-16 mx-5 mt-32">
        <div className="lg:w-1/2">
          <h1 className="text-bg-gray-900 font-bold text-xl">
            About <span className="text-customGreen">Casa</span>
          </h1>
          <h1 className="mt-3 text-gray-800 text-4xl font-bold">Who We Are</h1>
          <p className="mt-5 font-semibold">
            Welcome to Casa, where your dream home becomes a reality. We are a
            dedicated real estate platform that connects you with the finest
            properties, tailored to your unique lifestyle and needs. At Casa, we
            believe that finding the perfect home is more than just a
            transaction, it's a journey. Our mission is to provide you with a
            seamless, transparent, and personalized experience in discovering
            the place you'll call home.
          </p>
          <p className="mt-3">
            Our curated selection of properties ranges from modern urban
            apartments to serene countryside estates, ensuring that no matter
            your preference, Casa has the ideal home for you. We pride ourselves
            on offering detailed listings, high-quality images, and
            comprehensive information to help you make an informed decision with
            confidence.
          </p>
          <p className="mt-3">
          At Casa, we understand that buying or selling a property
            is one of the most significant decisions you'll make. That's why we
            are committed to guiding you every step of the way, with a focus on
            trust, integrity, and customer satisfaction. Our team of experienced
            professionals is here to support you, whether you're searching for
            your first home, upgrading to a larger space, or investing in real
            estate.
          </p>
        </div>
        <div className="lg:w-1/2 lg:mt-10">
         <img src="https://i.ibb.co/KzqssNY/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
