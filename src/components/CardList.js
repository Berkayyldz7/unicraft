import React from 'react';
import FeaturedCard from './FeaturedCard';

const cardsData = [
  {
    image: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1ccd5c6d45a068e6d907_04-03-Blog-Header.avif',
    category: 'Move',
    title: 'Announcing the Move Registry (MVR): Radical Interoperability',
    link: 'https://blog.sui.io/announcing-move-registry-interoperability/',
  },
  {
    image: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1c5c6b5bfd247785f887_xMoney-xPortal.avif',
    category: 'DeFi',
    title: 'Sui Expands Access to Real-World Payments with xMoney...',
    link: 'https://blog.sui.io/xmoney-xportal-wallet-mastercard/',
  },
  {
    image: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif',
    category: 'Games',
    title: 'Parasol Brings Trading Card Gaming Experience to Sui',
    link: 'https://blog.sui.io/parasol-mysten-labs-trading-card-games/',
  },
];

const CardList = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4">
      <h2 className="text-3xl text-center text-white font-bold mb-10">
        Latest News
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {cardsData.map((card, index) => (
          <FeaturedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
