import { useScroll,motion } from "framer-motion";
import { useEffect, useRef } from "react";



function Card({color}: {color: string}) {
    const container = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
    useEffect(() => {
        console.log(scrollYProgress)
    }, [scrollYProgress])
    return ( 

        <div ref={container} style={{
            backgroundColor: color
        }} className="flex h-[100vh] w-full justify-center items-center">
            <motion.div style={{
                scale: scrollYProgress
            }} className="w-[200px] h-[200px] bg-black"></motion.div>

        </div>
     );
}

export default Card;