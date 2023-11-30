import React from 'react'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
  return (
    <>
  
   <div className='herosection '>
 
<div class="parallax  text-white text-center  d-grid align-content-center"> 
    <h1>Alex Smith</h1>
<TypeAnimation
        sequence={[
          "I'm a Developer",
          1000,
          "I'm a Writer",
          1000,
          "I'm a Designer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    </div>

   


//    </div>
  
    
//     </>
    
  )
}
export default Home;

