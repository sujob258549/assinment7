
import './App.css'
import BannerSection from './component/Maincomponent/BannerSection'
import Hader from './component/Maincomponent/Hader'
import OurRecepis from './component/Maincomponent/OurRecepis'
import { useEffect } from "react";
import { useState } from "react";
import SingleData from './component/Maincomponent/SingleData'

function App() {

  const [datas, setdatas] = useState([]);
  const [newdatas, setnewdata] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(()=>{
      fetch('jsondata.json')
      .then(res => res.json())
      .then(data => setdatas(data));
  },[]);
  
  const showButton = (d) => {
    setnewdata([...newdatas,d])
    setCount(prevCount => prevCount + 1);
  }
 


  return (
    <>
      <header className='container mx-auto lg:max-w-[80%] max-w-full md:max-w-[90%] px-5 md:px-9'>
        <Hader></Hader>
      </header>
      <main className='container mx-auto  max-w-full md:max-w-[90%] px-5 md:px-9'>
        <BannerSection></BannerSection>
        <OurRecepis></OurRecepis>
        <div className='flex flex-col-reverse md:flex-row gap-10'>
        <div className='w-full lg:w-[60%]'>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {
             datas.map(item => <SingleData showButton={showButton} key={item.id} data={item} ></SingleData>)   
            }
            </div>
        </div>
        <div className='w-full lg:w-[40%] border-2 rounded-2xl py-5 px-10'>
        <div className="">
                    <div className="">

                    </div>
                    <div className="">
                        <div className='flex justify-around pb-2'>
                            <h2 className='text-2xl font-bold'>
                                Want to                    :
                            </h2>
                            <h2 className='text-2xl font-bold'>
                               {count}
                            </h2>
                        </div>
                        <hr />
                        <div className='flex justify-between py-5'>
                            <p>Name</p>
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                       <div>
                        {
                          newdatas.map(newdata =>  (
                            <div className='flex gap-2 flex-wrap justify-between'>
                            <p className='w-10'>{newdata.recipe_name}</p>
                            <p className='w-10'>{newdata.preparing_time}</p>
                            <p className='w-10'>{newdata.calories}</p>
                            <button  className="btn btn-active px-6 py-2 btn-accent my-5 hover:bg-lime-400 rounded-full border border-black bg-[#0BE58A]">Preparing</button>
                        </div>
                          ))
                        }
                       </div>
                    </div>

                </div>
        </div>
        </div>
      </main>
    </>
  )
}

export default App
