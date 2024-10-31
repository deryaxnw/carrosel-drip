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
         { id: '1', image:'./src/assets/imagesProduct/slide1.png' },
      
      
         {id: '2', image: './src/assets/imagesProduct/slide2.png'},
      
      
      
         {id: '3', image:'./src/assets/imagesProduct/slide3.png'},
      
         {id: '4', image:'./src/assets/imagesProduct/slide4.png'}
        
        ];

        const colorToIndexMap = {
          red: 0,
          orange: 1,
          gray: 2,
          green: 3,
        }

        const handleSizeSelect = (size) => {
          setSelectedSize(size);
        };
      
        const handleColorSelect = (color) => {
          setSelectedColor(color);
        };
      
        const handleBuyClick = () => {
          setSelectedSize(null);
          setSelectedColor(null);
        };

    
        

    return (
      <div className="Slide-container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          className='Slide-images'
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={`imagem ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-content">
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>

        <p className="product-category">Casual | Nike | REF: 38416711</p>

        <div className="product-rating">
        <span>⭐⭐⭐⭐⭐</span> <span className="rating-value">4.7</span>{" "}
        <span>(90 avaliações)</span>
        </div>
        <div className="product-price">
          <span className="current-price">R$ 219,00</span>
          <span className="old-price">R$ 219,00</span>
        </div>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="product-size">
          <p>Tamanho</p>
          <div className="size-options">
            {[39, 40, 41, 42, 43].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-color">
          <p>Cor</p>
          <div className="color-options">
            {["red", "orange", "gray", "green"].map((color) => (
              <button
                key={color}
                className={`color ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorSelect(color)}
              ></button>
            ))}
          </div>
        </div>

        <button className="buy-button" onClick={handleBuyClick}>
          COMPRAR
        </button>

        </div>
      </div>
    );
  
  

};