import { nanoid } from "@reduxjs/toolkit";

export const product = [
  {
    id: nanoid(),
    title: "airpods-red",
    thumbnail: "/headphone/airpods-red.jpg",
    price: 99,
    category: "technology",
    images: [
      {
        id: 1,
        img: "/backend/images/airpods-1-red.jpg",
      },
      {
        id: 1,
        img: "/backend/images/airpods-2-red.jpg",
      },
      {
        id: 1,
        img: "/backend/images/airpods-3-red.jpg",
      },
    ],
  },
  {
    id: nanoid(),
    title: "airpods",
    thumbnail: "/headphone/airpods.jpg",
    price: 199,
    category: "technology",
    images: [
      {
        id: 1,
        img: "/backend/images/airpods-1.jpg",
      },
      {
        id: 1,
        img: "/backend/images/airpods-2.jpg",
      },
      {
        id: 1,
        img: "/backend/images/airpods-3.jpg",
      },
    ],
  },
];

