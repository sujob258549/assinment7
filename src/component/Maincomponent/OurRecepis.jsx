
import image from '../../assets/img/1.png'
import vactor from '../../assets/img/Vector (1).png'
import times from '../../assets/img/Frame.png'
const OurRecepis = () => {
    return (
        <div>
            <div className="w-full mx-auto md:w-[70%] py-4 md:mt-20 mt-5">
                <h2 className=" text-2xl font-bold md:text-4xl text-center">Our Recipes</h2>
                <p className="text-center py-5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div>
                <div className="flex flex-col-reverse md:flex-row gap-10">
                    <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 ">
                        <div className='border-2 rounded-2xl p-5'>
                            <img src={image} className='w-full' alt="" />
                            <h2 className='font-bold text-xl py-4'>Spaghetti Bolognese</h2>
                            <p className='py-2
                            '>Classic Italian pasta dish with savory meat sauce.</p>
                            <hr />
                            <h2 className='font-medium text-xl pt-3'>Ingredients: 6</h2>
                            <ul  className='py-3 list-disc px-5'>
                                <li>500g ground beef</li>
                                <li>500g ground beef</li>
                                <li>500g ground beef</li>
                                <li>500g ground beef</li>
                                <li>500g ground beef</li>
                            </ul>
                            <hr />
                            <div className='flex gap-5 py-3'>
                                <div className='flex gap-2'>
                                    <img className='w-3' src={times} alt="" />
                                    <p>30 minutes</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img  className='w-3' src={vactor} alt="" />
                                    <p>600 calories</p>
                                </div>
                            </div>
                            <button className="btn btn-active px-6 py-2 btn-accent my-5 hover:bg-lime-400 rounded-full border border-black bg-[#0BE58A]">Want to Cook</button>
                            
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] border-2 rounded-2xl py-5 px-10">
                        <div className='flex justify-around pb-2'>
                        <h2 className='text-2xl font-bold'>
                        Want to                    : 
                        </h2>
                        <h2 className='text-2xl font-bold'>
                        01
                        </h2>
                        </div>
                        <hr />
                        <div className='flex justify-between py-5'>
                            <p>Name</p>
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                        <div className='flex gap-2 flex-wrap justify-between'>
                            <p className='w-10'>Chicken Caesar Salad</p>
                            <p className='w-10'>Chicken Caesar Salad</p>
                            <p className='w-10'>Chicken Caesar Salad</p>
                        <button className="btn btn-active px-6 py-2 btn-accent my-5 hover:bg-lime-400 rounded-full border border-black bg-[#0BE58A]">Preparing</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurRecepis;