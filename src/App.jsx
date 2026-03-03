
import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/Players/AvailablePlayers';

const fetchedPlayers = async () => {

  const res = await fetch('/players.json');
  return res.json();
   

}
  

function App() {


  const playersPromise = fetchedPlayers();
 


  return (
    <>
      
      <div className='max-w-screen-xl mx-auto'>
        <Navbar></Navbar>

        
        <div className='  text-center flex items-center justify-center'>
        {/*Available Players component  */}
        <Suspense fallback={"Avaliable player Loading..."}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>

        </div>

        {/** 
        <div className='text-center flex items-center justify-center h-screen'>
    
        <Suspense fallback={'Loading...'}>
          <Players playersPromise={playersPromise}></Players>
        </Suspense>

        </div>
        */}
     
        

      </div>

      
      
    </>
  )
}

export default App
