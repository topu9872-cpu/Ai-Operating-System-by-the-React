import React, { Suspense } from 'react';
import Navbar from './componets/Navbar';
import Banner from './componets/Banner';
import Footer from './componets/Footer';
import BottunToggle from './componets/BottunToggle';
import Cards from './componets/CardsComponet/Cards';



const getCards= async ()=>{
  const res = await fetch('Api.json');
  return await res.json();
}

const promise= getCards();





const App = () => {
  return (
    <div>
     <Navbar/>
     <Banner/>
     < BottunToggle promise ={promise}/>
     {/* <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}> */}
     {/* <Cards promise ={promise}/> */}
     {/* </Suspense> */}

     <Footer/>
    </div>
  );
};

export default App;