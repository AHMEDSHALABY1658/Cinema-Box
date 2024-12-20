
import img from "../../assets/ZHh05SkqR12n-gSqbidxZw.webp";
import img2 from "../../assets/be192083-0dfc-3df5-bba2-67725ab6b0fc.jpeg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/MV5BMTEwNTU2MjAwMDdeQTJeQWpwZ15BbWU3MDk2Njc2Njk@._V1_.jpg";


import React, { useContext,useState } from 'react'
import{IsMobileContext} from"../../utilis/IsMobileContext"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Autoplay, Thumbs } from 'swiper/modules';
import { delay, motion } from "framer-motion";

export default function Banner() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const{isMobel}=useContext(IsMobileContext)
    return (
    <div className='banner'>

        <Swiper slidesPerView={1} modules={[Thumbs,Autoplay]} thumbs={{ swiper: thumbsSwiper }} Thumbs={{
            swiper:thumbsSwiper
        }}
        autoplay={{
            delay:3000,
        }}
        loop={true}>
        
                <SwiperSlide>
                    
                <div className="banner-image">
                <motion.img 
                initial={{ opacity: 0.8 }} 
                whileInView={{ opacity: 0.7 }} 
                transition={{ delay: 0, duration: 1 }} 
                src={img2} 
                alt="" 
                />
                    <div className="banner-text">
                        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 }} >the lord of the rings</motion.h2>
                        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt delectus earum beatae voluptas iste consequatur.</motion.p>
                    </div>
                </div>
        
                </SwiperSlide>
                <SwiperSlide>
                    
                <div className="banner-image">
                <motion.img 
                initial={{ opacity: 0.8 }} 
                whileInView={{ opacity: 0.7 }} 
                transition={{ delay: 0, duration: 1 }} 
                src={img3} 
                alt="" 
                />
                    <div className="banner-text">
                    <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 }} >avatar 3</motion.h2>
                    <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt delectus earum beatae voluptas iste consequatur.</motion.p>
                    </div>
                </div>
        
                </SwiperSlide>
                <SwiperSlide>
                    
                <div className="banner-image">
                <motion.img 
                initial={{ opacity: 0.8 }} 
                whileInView={{ opacity: 0.7 }} 
                transition={{ delay: 0, duration: 1 }} 
                src={img4} 
                alt="" 
                />
                    <div className="banner-text">
                    <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 }} >300</motion.h2>
                    <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt delectus earum beatae voluptas iste consequatur.</motion.p>
                    </div>
                </div>
        
                </SwiperSlide>
        </Swiper>

        {!isMobel?
        <Swiper className="banner-thumbs" modules={[Thumbs]} slidesPerView={3} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
            <SwiperSlide>
            <motion.div className="thumbs " initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <img src={img2} alt="" />
            </motion.div>
            </SwiperSlide>
            <SwiperSlide>
            <motion.div className="thumbs"initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <img src={img3} alt="" />
            </motion.div>
            </SwiperSlide>
            <SwiperSlide>
            <motion.div className="thumbs "initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <img src={img4} alt="" />
            </motion.div>
            </SwiperSlide>
        </Swiper>:""}
        
    </div>
    )
}
