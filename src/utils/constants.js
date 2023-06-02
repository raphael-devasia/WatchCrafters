import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to offer a carefully curated range of watches that meet the highest standards of quality and design. We strive to provide an exceptional shopping experience, offering personalized customer service, expert advice, and a seamless online platform that allows watch lovers to discover and acquire their perfect timepiece. We are committed to building long-lasting relationships with our customers, based on trust, authenticity, and a shared passion for horology.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "At WatchCrafters, our vision is to be the premier destination for watch enthusiasts, providing a curated selection of exceptional timepieces that embody the perfect fusion of craftsmanship, innovation, and style. We aim to inspire individuals to embrace the art of timekeeping and elevate their personal expression through our exquisite collection.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Established in 2021, WatchCrafters quickly gained recognition as a trusted destination for watch enthusiasts. Our journey began with a passion for horology, evolving into a curated collection of exceptional timepieces. Over the years, we have nurtured lasting relationships with customers, fostering a community built on trust, expertise, and a shared love for the art of watchmaking.",
  },
];

export const products_url = "/.netlify/functions/watches";

export const single_product_url = `/.netlify/functions/singlewatch?id=`;
