import React from 'react'
import { Chrono } from "react-chrono";


function Roadmap() {
  return (
    <div className="w-[100vw] flex flex-col justify-center items-center">
      <div className="md:text-6xl text-4xl md:font-bold font-medium">Road to <span className="text-[#28b3f2]">Alexa</span></div>
      <div className="md:my-12" style={{ width: "100%", height: "100vh"}}>
        
        <Chrono
          mode="VERTICAL_ALTERNATING"
          cardHeight={120}
          cardWidth={300}
          lineWidth="5"
          disableNavOnKey="true"
          hideControls="true"
          theme={{
            primary: 'white',
            secondary: 'white',
            cardBgColor: '#01002d',
            cardForeColor: 'white',
            titleColorActive: 'grey',
          }}
        >
          <div className="">
            <div className="text-4xl ml-auto flex justify-end font-medium my-4">Registration</div>
            <div className="text-right text-[#808096]">Fill the form below by entering required details to get your journey started!</div>
          </div>

          <div className=""> 
          <div className="text-4xl mr-auto flex justify-start font-medium my-4">Email</div>
            <div className="text-left text-[#808096]">Keep yourself up to date by checking your registered email on the regular. (Sneak a peek in the spam folder too)</div>
          </div>

          <div className="">
            <div className="text-4xl ml-auto flex justify-end font-medium my-4">Tests/Tasks</div>
            <div className="text-right text-[#808096]">Let the fire in you be kindled. Showcase your talent through tests or tasks to make your mark among the competitors.</div>
          </div>

          <div className="">
            <div className="text-4xl mr-auto flex justify-start font-medium my-4">Interviews</div>
            <div className="text-left text-[#808096]">You are just one step away. Keep calm and get ready for a small, casual interview.</div>
          </div>

          <div className="">
            <div className="text-4xl ml-auto flex justify-end font-medium my-4">Welcome</div>
            <div className="text-right text-[#808096]">Look at that! You are now officially a part of the Alexa Developers SRM family. Much surprises await on the other side!</div>
          </div>

        </Chrono>
      </div>
    </div>
    
  )
}

export default Roadmap