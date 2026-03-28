import React, { use } from 'react';

const Cards = ({promise}) => {
    const Cards = use(promise);





    return (
        <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 space-y-8 mt-16'>
{ Cards.map(card => (
        <div>
        <div className="card bg-[#ededed] w-96 h-full">
            <div className='bg-gray-200 rounded-2xl py-4'>
  <figure className='object-contain max-w-6/12 flex justify-center mx-auto'>
    <img
      src={card.image}
      alt="Shoes" />
    
  </figure>
    </div>
  <div className="card-body">
<h2 className="card-title font-bold">{card.title}</h2>
    <p>{card.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary flex-1">Subscribe Now</button>
    </div>
  </div>
</div>


        </div>
   ) ) }
   </div>
   )
}

export default Cards;



