
import './App.css'
import BannerSection from './component/Maincomponent/BannerSection'
import Hader from './component/Maincomponent/Hader'
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
    </main>
    </>
  )
}

export default App
