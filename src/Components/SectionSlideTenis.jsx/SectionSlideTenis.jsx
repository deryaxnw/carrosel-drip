import { useState } from 'react';
import './sectionSlideTenis.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export const SectionSlideTenis = () => {

        const [index, setIndex] = useState(0);

        const [selectedSize, setSelectedSize] = useState(null);

        const [selectedColor, setSelectedColor] = useState(null);

        const data = 
        
        [
         { id: '1', image:'./src/assets/White-Sneakers-PNG-Clipart 1.png' },
      
      
         {id: '2', image: './src/assets/White-Sneakers-PNG-Clipart 1.png'},
      
      
      
         {id: '3', image:'./src/assets/White-Sneakers-PNG-Clipart 1.png'},
      
         {id: '4', image:'./src/assets/White-Sneakers-PNG-Clipart 1.png'}
        
        ];


};