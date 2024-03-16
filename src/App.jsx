
import './App.css'
import BannerSection from './component/Maincomponent/BannerSection'
import DisplayData from './component/Maincomponent/DisplayData'
import Hader from './component/Maincomponent/Hader'
import JsonData from './component/Maincomponent/JsonData'
import OurRecepis from './component/Maincomponent/OurRecepis'

function App() {



  return (
    <>
      <header className='container mx-auto lg:max-w-[80%] max-w-full md:max-w-[90%] px-5 md:px-9'>
        <Hader></Hader>
      </header>
      <main className='container mx-auto lg:max-w-[80%] max-w-full md:max-w-[90%] px-5 md:px-9'>
        <BannerSection></BannerSection>
        <OurRecepis></OurRecepis>
        <div className='flex flex-col-reverse md:flex-row gap-10'>
        <div className='w-full lg:w-[60%]'>
        <JsonData></JsonData>
        </div>
        <div className='w-full lg:w-[40%] border-2 rounded-2xl py-5 px-10'>
          <DisplayData></DisplayData>
        </div>
        </div>
      </main>
    </>
  )
}

export default App
