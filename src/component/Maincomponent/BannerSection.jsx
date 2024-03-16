
const BannerSection = () => {
    return (
        <div>
          <div className=' bg-no-repeat bg-cover rounded-2xl md:my-10' style={{ backgroundImage: `url(https://i.ibb.co/ZXVfD7j/your-image.png)`}}>
                <div className="w-full py-28 md:w-[80%]  mx-auto">
                <h2 className='text-white text-3xl md:text-5xl font-bold text-center py-5'>
                    Discover an exceptional cooking class tailored for you!
                </h2>
                <p className='text-white py-5 text-center'>
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
                <div className='flex justify-center py-5 gap-5 flex-wrap'>
                    <button className="px-5 py-2 btn btn-active btn-accent rounded-full border-2 hover:bg-[#0be58a34] hover:text-white bg-[#0BE58A]">Explore Now</button>
                    <button className="px-5 py-2 border-2 text-white border-white hover:bg-[#ffffff2c] btn btn-active btn-accent rounded-full bg-transparent">Explore Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
