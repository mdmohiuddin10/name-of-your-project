

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full md:h-[700px] h-[300px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.postimg.cc/prWW0Xgq/Untitled-design-1.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex md:gap-8  px-5">
              <div className="flex-1 mt-8 md:mt-24">
                <h2 className=" text-center md:mb-10 mb-3 text-xl md:text-7xl font-extrabold
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                text-transparent bg-clip-text
                ">Enjoy Your Day</h2>
                <p className="text-center text-white text-md md:text-6xl font-extrabold">Unlock Your Discount</p>
                <button className="bg-purple-500 text-white px-2 py-2 md:px-3 md:py-3 text-sm md:text-xl rounded-lg md:mt-8 mt-3">Buy Now</button>
              </div>
              <div className="">
                <img className="md:w-[600px] w-[200px] h-full" src="https://i.postimg.cc/tJhXyTbc/laptop.png" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle"><span className="">❮</span></a>
            <a href="#slide2" className="btn btn-circle"><span>❯</span></a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: 'url(https://i.postimg.cc/zf1Znsxx/abstract-uv-ultraviolet-light-composition.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex md:gap-8 px-5">
              <div className="flex-1 mt-8  md:mt-32">
                <h2 className=" text-center mb-3 md:mb-10 text-lg md:text-5xl font-extrabold
              bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500
                text-transparent bg-clip-text
                ">Perfect Electronics Launch</h2>
                <p className="text-center text-white text-lg md:text-7xl font-extrabold">Free Delivery!!!</p>
                <button className="bg-purple-500 text-white px-2 py-2 md:px-3 md:py-3 text-sm md:text-xl rounded-lg md:mt-8 mt-3">Buy Now</button>
              </div>
              <div className="">
                <img className="md:w-[600px] w-[200px] h-full" src="https://i.postimg.cc/VkZ7RP0r/electronic-gadgets-601ff3a1b8a22.png" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: 'url(https://i.postimg.cc/prWW0Xgq/Untitled-design-1.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex md:gap-8 gap-3 px-5">
              <div className="flex-1 mt-10 md:mt-32">
                <h2 className=" text-center mb-3 md:mb-10 text-xl md:text-7xl font-extrabold
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                text-transparent bg-clip-text
                ">Ready Stock!</h2>
                <p className="text-center text-white text-xl md:text-7xl font-extrabold">IPHONE 15 SERIES</p>
                <button className="bg-purple-500 text-white px-2 py-2 md:px-3 md:py-3 text-sm md:text-xl rounded-lg md:mt-8 mt-3">Buy Now</button>
              </div>
              <div className="">
                <img className="md:w-[600px] w-[200px] h-full" src="https://i.postimg.cc/VkZ7RP0r/electronic-gadgets-601ff3a1b8a22.png" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Banner;