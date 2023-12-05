import '../../css/transition.css';
import {motion} from 'framer-motion'
function TransitionPage({location,Page}) {
  return (
  <>
    {Page}
    <motion.div className="slide-in"
    initial={{scaleY:1}}
    animate={{scaleY:0}}
    exit={{scaleY:0}}
    transition={{duration:1,easeOut:[0.22,1,0.36,1]}}>
    
    
   
    
  
 </motion.div>
  
   <motion.div className="slide-out"
   initial={{scaleY:0}}
   animate={{scaleY:0}}
   exit={{scaleY:1}}
   transition={{duration:1,easeIn:[0.22,1,0.36,1]}}>
   
   

 
</motion.div>
</>
  );
}

export default TransitionPage;
