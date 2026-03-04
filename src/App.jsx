
import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/Players/AvailablePlayers';
import { useState } from 'react';
import SelectedPlayers from './Components/Players/SelectedPlayers';
import { ToastContainer } from 'react-toastify';

const fetchedPlayers = async () => {

  const res = await fetch('/players.json');
  return res.json();


}

const playersPromise = fetchedPlayers();

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]); 


  const removePlayer = (id) => {
    // console.log("delete btn", id);

    const remainedData = selectedPlayers.filter(player => player.id !== id);

    setSelectedPlayers(remainedData);

    const rePay = selectedPlayers.find(player => player.id === id);

    console.log(rePay);
    const newBalance = availableBalance + rePay.price;
    console.log(newBalance);
    
    setAvailableBalance(newBalance);
    


  }


 







  return (




    <>

      <div className='max-w-screen-xl mx-auto'>
        <Navbar availableBalance={availableBalance}></Navbar>

        <div className='flex items-center justify-between   rounded-lg mx-5 my-4 px-2 py-4' >
          <div>
            <h1 className='text-lg font-semibold'>{toggle === true ? 'Available Players' : `Selected Players(${selectedPlayers.length}/6)`} </h1>
          </div>
          <div className=' flex items-center justify-center'>
            <button onClick={() => setToggle(true)} className={`btn  ${toggle === true ? 'bg-[#E7FE29] text-black' : 'btn-info'} rounded-l-2xl rounded-r-none border-r-0`}>Available </button>
            <button onClick={() => setToggle(false)} className={`btn ${toggle === false ? 'bg-[#E7FE29] text-black' : 'btn-info'} rounded-r-2xl rounded-l-none border-l-0`}>Selected({selectedPlayers.length}) </button>
          </div>
        </div>


        <div className='  text-center flex items-center justify-center'>
          {
            toggle === true ?
              <Suspense fallback={"Avaliable player Loading..."}>
                <AvailablePlayers
                  playersPromise={playersPromise} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance}
                  selectedPlayers={selectedPlayers}
                  setSelectedPlayers={setSelectedPlayers}
                  ></AvailablePlayers>
              </Suspense> : <SelectedPlayers selectedPlayers={selectedPlayers}
                removePlayer={removePlayer} toggle={toggle} setToggle={setToggle}></SelectedPlayers>
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
      <ToastContainer position='top-center'></ToastContainer>



    </>
  )
}

export default App
