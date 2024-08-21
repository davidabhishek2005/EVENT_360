import React from 'react'

const Services = () => {
  const services = [
    {
      id:  1,
      url: "../public/party_event.jpg",
      title: "DJ PARTY",
    },
    {
      id:  2,
      url: "../public/birthday_event.jpg",
      title: "BIRTHDAY PARTY",
    },
    {
      id:  3,
      url: "../public/gaming_event.jpeg",
      title: "GAMING PARTY",
    },
    {
      id:  4,
      url: "../public/camping_event.jpg",
      title: "CAMPING NIGHT",
    },
    {
      id:  5,
      url: "../public/wedding_event.webp",
      title: "WEDDING PARTY",
    },
    {
      id:  6,
      url: "../public/anniversary_event.jpeg",
      title: "ANNIVERSARY PARTY",
    },
    
  ];
  return (
     <>
      <div className='services container'>
        <h2>OUR SERVICES</h2>
        <div className='banner'>
          {services.map((element)=>{
            return(
              <div className='item' key ={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title}></img>
              </div>
            );
          })};
        </div>
      </div>
     </>
  );
};

export default Services;