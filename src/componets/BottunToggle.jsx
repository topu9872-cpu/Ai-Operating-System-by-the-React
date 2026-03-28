import React, { useState } from 'react';

const BottunToggle = () => {

const [toggle , setToggle] = useState('Modals');



    return (
        <div className='flex justify-center gap-10'>
     <button onClick={()=>setToggle('Modals')}
     className={` ${toggle === 'Modals' ? 'btn btn-error' : 'btn bg-gray-300'}`}>Modals</button>
            <button onClick={()=> setToggle('Cart')}
             className={`${toggle === 'Cart' ? 'btn btn-error' : 'btn bg-gray-300'}`}>Cart(3)</button>
        </div>
    )
}
export default BottunToggle;