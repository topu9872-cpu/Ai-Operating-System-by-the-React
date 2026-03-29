import React,{useState} from 'react';


const Card = ({card}) => {
    const [subscribe, setsubscribe] = useState(false);
    return (
       
      <div>
         
                <div className="card bg-[#ededed] w-96 h-full">
          <div className="bg-gray-200 rounded-2xl py-4">
            <figure className="object-contain max-w-6/12 flex justify-center mx-auto">
              <img src={card.image} alt="Shoes" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title font-bold">{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={ () => setsubscribe(true)}
                className="btn btn-secondary flex-1"
              >
                {subscribe ? "Subscribed" : "Subscribe Now"}
              </button>
              
            </div>
            
          </div>
          
        </div>
        
      </div> 
       
    );
};

export default Card;