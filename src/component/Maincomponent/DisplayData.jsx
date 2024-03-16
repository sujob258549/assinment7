
const DisplayData = () => {
   
    return (
        <div>
            <div>
                <div className="">
                    <div className="">

                    </div>
                    <div className="">
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

export default DisplayData;