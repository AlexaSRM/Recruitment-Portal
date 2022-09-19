import React from 'react'
import { Chrono } from "react-chrono";

// items
const items = [
  {
    cardTitle: "Registration",
    cardSubtitle:
      "Fill the form below by entering required details to get your journey started!",
  },
  {
    cardTitle: "Email",
    cardSubtitle: "Keep yourself up to date by checking your registered email on the regular. (Sneak a peek in the spam folder too)",
  },
  {
    cardTitle: "Tests/Tasks",
    cardSubtitle: "Let the fire in you be kindled. Showcase your talent through tests or tasks to make your mark among the competitors.",
  },
  {
    cardTitle: "Interviews",
    cardSubtitle: "You are just one step away. Keep calm and get ready for a small, casual interview.",
  },
  {
    cardTitle: "Welcome",
    cardSubtitle: "Look at that! You are now officially a part of the Alexa Developers SRM family. Much surprises await on the other side!",
  },
];


function Roadmap() {
  return (
    <div className="w-[100vw] flex flex-col justify-center items-center">
      <div className="md:text-6xl text-4xl md:font-bold font-medium">Road to <span className="text-[#28b3f2]">Alexa</span></div>
      <div className="md:my-12" style={{ width: "100%", height: "100vh"}}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          cardHeight={120}
          cardWidth={500}
          hideControls="true"
          theme={{
            primary: 'red',
            secondary: 'blue',
            cardBgColor: 'yellow',
            cardForeColor: 'violet',
            titleColor: 'black',
            titleColorActive: 'red',
          }}
          fontSizes={{
            cardSubtitle: '1rem',
            cardTitle: '2.5rem',
          }}
        />
      </div>
    </div>
    
  )
}

export default Roadmap