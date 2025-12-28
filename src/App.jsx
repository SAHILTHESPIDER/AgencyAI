import { useState } from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero';
import Trusted from './component/Trusted';
import Service from './component/Service';
import OurWork from './component/OurWork';
import Team from './component/Team';
import Contact from './component/Contact';
import {Toaster} from 'react-hot-toast'
import Footview from './component/Footview';


function App() {
  const [count, setCount] = useState(0)
  const [Theme,setTheme]=useState(localStorage.getItem('Theme')? localStorage.getItem('Theme')
  :'light'
  );
  return (
    <>
      <div className='dark:bg-black relative'>
        <Toaster />
        <Nav Theme={Theme} setTheme={setTheme} />
        <Hero />
        <Trusted />
        <Service />
        <OurWork />
        <Team />
        <Contact />
        <Footview Theme={Theme} />
      </div>
    </>
  )
}

export default App
