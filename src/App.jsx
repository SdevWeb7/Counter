import { Facebook } from "./svg/Facebook.jsx";
import { Pinterest } from "./svg/Pinterest.jsx";
import { Instagram } from "./svg/Instagram.jsx";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import {formatNumber} from './utils'

function App() {
   const [countdown, setCountdown] = useState({
      days: formatNumber(12),
      hours: formatNumber(0),
      minutes: formatNumber(0),
      seconds: formatNumber(1),
   })
   const [stopCountdown, setStopCountdown] = useState(false)
   const [secondAnim, setSecondAnim] = useState(false)
   const [minutesAnim, setMinutesAnim] = useState(false)
   const [hoursAnim, setHoursAnim] = useState(false)
   const [daysAnim, setDaysAnim] = useState(false)

   useEffect(() => {
      if (!stopCountdown) {
         const intervalId = setInterval(() => {
            updateCountdown();
         }, 1000);
         return () => clearInterval(intervalId);
      }
   }, [stopCountdown]);

   useEffect(() => {
      setTimeout(() => {
         setSecondAnim(false)
         setMinutesAnim(false)
         setHoursAnim(false)
         setDaysAnim(false)
      }, 200)
   }, [secondAnim, minutesAnim, hoursAnim, daysAnim])

   const updateCountdown = () => {
      setCountdown(last => {
         if (last.seconds != 0) {
            setSecondAnim(true)
            return {...last, seconds: formatNumber(last.seconds-1) }
         }
         if (last.minutes != 0) {
            setSecondAnim(true)
            setMinutesAnim(true)
            return {...last, minutes: formatNumber(last.minutes-1), seconds: 59}
         }
         if (last.hours != 0) {
            setSecondAnim(true)
            setMinutesAnim(true)
            setHoursAnim(true)
            return {...last, hours: formatNumber(last.hours-1), minutes: 59, seconds: 59}
         }
         if (last.days != 0) {
            setSecondAnim(true)
            setMinutesAnim(true)
            setHoursAnim(true)
            setDaysAnim(true)
            return {...last, days: formatNumber(last.days-1), hours: 23, minutes: 59, seconds: 59}
         }

         setStopCountdown(true)
         setSecondAnim(true)
         setMinutesAnim(true)
         setHoursAnim(true)
         setDaysAnim(true)
         return {days: '00', hours: '00', minutes: '00', seconds: '00'}
      })
   };

   let variants = {
      hidden: {opacity: .2, backgroundColor: 'hsl(0, 0%, 0%)', transform: "rotateX(0)"},
      visible: {transform: "rotateX(180deg)"}
   }

   return (
    <>
      <h1>WE'RE LAUNCHING SOON</h1>


       <div className="compteur">

          <div className={'number'}>
             <img src="/public/images/circles.svg" alt="a" className={'circle1'}/>
             <img src="/public/images/circles.svg" alt="a" className={'circle2'}/>
             <h2>{countdown.days}</h2>
            <p>DAYS</p>

             <motion.div
                className="background-black"
                initial={'hidden'}
                exit={'hidden'}
                animate={daysAnim ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: .1}}
             ></motion.div>
          </div>


          <div className={'number'}>
             <img src="/public/images/circles.svg" alt="a" className={'circle1'}/>
             <img src="/public/images/circles.svg" alt="a" className={'circle2'}/>
             <h2>{countdown.hours}</h2>
             <p>HOURS</p>

             <motion.div
                className="background-black"
                initial={'hidden'}
                exit={'hidden'}
                animate={hoursAnim ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: .1}}
             ></motion.div>
          </div>

          <div className={'number'}>
             <img src="/public/images/circles.svg" alt="a" className={'circle1'}/>
             <img src="/public/images/circles.svg" alt="a" className={'circle2'}/>
             <h2>{countdown.minutes}</h2>
             <p>MINUTES</p>

             <motion.div
                className="background-black"
                initial={'hidden'}
                exit={'hidden'}
                animate={minutesAnim ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: .1}}
             ></motion.div>
          </div>

          <div className={'number'}>
             <img src="/public/images/circles.svg" alt="a" className={'circle1'}/>
             <img src="/public/images/circles.svg" alt="a" className={'circle2'}/>
             <h2>{countdown.seconds}</h2>
             <p>SECONDS</p>

             <motion.div
                className="background-black"
                initial={'hidden'}
                exit={'hidden'}
                animate={secondAnim ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: .2}}
             ></motion.div>
          </div>
       </div>


       <footer>
         <Facebook />
          <Pinterest />
          <Instagram />
       </footer>
    </>
  )
}

export default App
