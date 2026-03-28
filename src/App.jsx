import React from 'react';
import Navbar from './componets/Navbar';
import Banner from './componets/Banner';
import Footer from './componets/Footer';
import BottunToggle from './componets/BottunToggle'
import Cards from './componets/CardsComponet/Cards';




const getCards= async ()=>{
  const res = await fetch('../public/Api.json');
  return res.json();
}

const promise= getCards();





const App = () => {
  return (
    <div>
     <Navbar/>
     <Banner/>
     < BottunToggle/>
     <Cards promise ={promise}/>
     <Footer/>
    </div>
  );
};

export default App;