// components/AnimatedComponent.js
import { motion } from 'framer-motion';
import WavingHandIcon from '@mui/icons-material/WavingHand';
const About= () => {
  return (
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
  );
};

export default About;
