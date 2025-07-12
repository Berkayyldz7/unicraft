// CRUCIAL NOTES 

// Gösterilen Card Sayısı en az 7 olmalı aksi halde Caruosel Patlıyor.

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const cardData = [
  {
    title: 'Move Registry Improves Developer Experience on Sui',
    subtitle: 'Announcing the Move Registry (MVR): Radical Interoperability',
    tag: 'Move',
    link: 'https://blog.sui.io/announcing-move-registry-interoperability/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1ccd5c6d45a068e6d907_04-03-Blog-Header.avif'
  },
  {
    title: 'Sui Expands Access to Real-World Payments',
    subtitle: 'xMoney xPortal Wallet and Mastercard Integration',
    tag: 'DeFi',
    link: 'https://blog.sui.io/xmoney-xportal-wallet-mastercard/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1c5c6b5bfd247785f887_xMoney-xPortal.avif'
  },
  {
    title: 'Parasol Brings Trading Card Gaming to Sui',
    subtitle: 'New immersive blockchain-based TCG',
    tag: 'Games',
    link: 'https://blog.sui.io/parasol-mysten-labs-trading-card-games/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif'
  },
  {
    title: 'Dummy-1',
    subtitle: 'Dummmmm',
    tag: 'Games',
    link: 'https://blog.sui.io/parasol-mysten-labs-trading-card-games/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif'
  },
  {
    title: 'Dummy-2',
    subtitle: 'Dummy-2',
    tag: 'Games',
    link: 'https://blog.sui.io/parasol-mysten-labs-trading-card-games/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif'
  },
  {
    title: 'Parasol Brings Trading Card Gaming to Sui',
    subtitle: 'New immersive blockchain-based TCG',
    tag: 'Games',
    link: 'https://blog.sui.io/parasol-mysten-labs-trading-card-games/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif'
  },
  {
    title: 'Parasol Brings Trading Card Gaming to Sui',
    subtitle: 'New immersive blockchain-based TCG',
    tag: 'Games',
    link: 'https://blog.sui.io/parasol-mysten-labs-trading-card-games/',
    img: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif'
  }
];

const CardCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    }, 500); // 500ms gecikme DOM render sonrası garanti olur

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full py-16 px-4 bg-[#0d0d22] text-white relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        navigation
        loopedSlides={cardData.length}
        loopPreventsSlide={false}
        watchSlidesProgress
        initialSlide={1} // orta kartla başla (3 kart varsa ortası 1'dir)
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false
        }}
        className="w-full max-w-6xl mx-auto"
      >
        {cardData.map((card, index) => (
          <SwiperSlide
            key={index}
            className="!w-[90%] sm:!w-[420px] !h-[480px] flex flex-col justify-end"
          >
            <div className="bg-[#101529] rounded-2xl overflow-hidden shadow-xl w-full h-full flex flex-col">
              <div className="h-1/2 w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <span className="bg-white/10 text-xs text-white px-3 py-1 rounded-full w-max mb-2">
                  {card.tag}
                </span>
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  {card.subtitle}
                </h3>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  Read article →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
