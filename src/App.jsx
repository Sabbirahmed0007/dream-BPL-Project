
import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/Players/AvailablePlayers';
import { useState } from 'react';
import SelectedPlayers from './Components/Players/SelectedPlayers';

const fetchedPlayers = async () => {

  const res = await fetch('/players.json');
  return res.json();
   

}
  

function App() {

  const [toggle, setToggle] = useState(false);


  const playersPromise = fetchedPlayers();
 


  return (
    <>
      
      <div className='max-w-screen-xl mx-auto'>
        <Navbar></Navbar>

        <div className='flex items-center justify-between   rounded-lg mx-5 my-4 px-2 py-4' >
          <div>
            <h1 className='text-lg font-semibold'>{toggle=== true? 'Available Players':'Selected Players'} </h1>
          </div>
          <div className=' flex items-center justify-center'>
            <button onClick={() => setToggle(true)} className={`btn  ${toggle === true ?'bg-[#E7FE29] text-black':'btn-info'} rounded-l-2xl rounded-r-none border-r-0`}>Available </button>
            <button onClick={() => setToggle(false)} className={`btn ${toggle === false ? 'bg-[#E7FE29] text-black' : 'btn-info'} rounded-r-2xl rounded-l-none border-l-0`}>Selected </button>
          </div>
        </div>

        
        <div className='  text-center flex items-center justify-center'>
          {
            toggle===true?
        <Suspense fallback={"Avaliable player Loading..."}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
          }
        

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
