import React from 'react'
import list from '../../public/list.json'
import Slider from "react-slick";
import Cards from './Cards';

function Slides() {
    const filterData= list.filter((data)=> data.category==="Free");
    console.log(filterData);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='space-y-1 max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='text-xl font-bold'>Free Online Courses</h1>
      <p>Lorem ipsum odor amet.Taciti faucibus feugiat volutpat pellentesque malesuada maximus nam dui. consectetuer adipiscing elit. Egestas senectus egestas aptent blandit.
      </p>
      
    </div>
    <div className="slider-container">
    <Slider {...settings}>
      {filterData.map((item)=>(
        <Cards item={item} key={item.id} />
      ))}
        
      </Slider>

    </div>
</div>

    
      

  </>)
}

export default Slides