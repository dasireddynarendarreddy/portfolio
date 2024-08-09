// components/AnimatedComponent.js
import { motion } from 'framer-motion';
import 'animate.css/animate.min.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
const About= () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: '20px', textAlign: 'center' }}
      
    >
      <div className='flex gap-2 bg-yellow-500 w-fit rounded-lg p-2'>
      <div className='font-bold w-fit rounded-lg float-start hover:scale-y-150'>
        Hello EveryOne

      </div>
      <div>
        <WavingHandIcon/>
      </div>
      </div>
     
    </motion.div>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ padding: '20px', textAlign: 'center' }}
    
  >
       <div className="animate__heartBeat text-8xl">
       Hi, I’m Narendar, a recent B.Tech graduate specializing in Computer Science.
       I graduated with a Bachelor’s degree from Anurag College in 2024 june.
       </div>
    </motion.div>
    </div>
  );
};

export default About;
