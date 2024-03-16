"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function AboutMe() {
  return (
    <>
      <h2 className="mb-8 mt-4 text-center text-3xl font-semibold text-black dark:text-white">
        About Me
      </h2>
      <BentoGrid className="mx-auto max-w-4xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const ImgComponent = ({ imgSrc }: { imgSrc: string }) => {
  //   <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-griadient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>

  return (
    <motion.img
      whileHover={{ scale: 1.1 }}
      layout
      className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl object-cover"
      src={imgSrc}
    />
  );
};

const items = [
  {
    title: "Age",
    description: `I am ${new Date().getFullYear() - 2004} years old`,
    header: (
      <ImgComponent imgSrc="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Education",
    description: "I finished my IGCSE with 9A* and A Levels with 3As",
    header: (
      <ImgComponent imgSrc="https://plus.unsplash.com/premium_photo-1661947876256-b44c1bfc04d2?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Language",
    description:
      "I speak fluently in English and Burmese while also speaking a little bit of French & Chinese",
    header: (
      <ImgComponent imgSrc="https://images.unsplash.com/photo-1605170439002-90845e8c0137?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Hobbies",
    description:
      "Outside of my work, you would see me either programming or playing football. I also enjoy playing games and reading books",
    header: (
      <ImgComponent imgSrc="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Favourite Programming Language",
    description: "Definitely python due to how intuitive it feels when using.",
    header: (
      <ImgComponent imgSrc="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Favourite Football Club",
    description: "Chelsea 💙",
    header: (
      <ImgComponent imgSrc="https://images.unsplash.com/photo-1628813640706-ca88bcdfb228?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Books I ❤️",
    description:
      "I enjoy reading non-fiction books with a particular interest in business & economics although I sometimes read fiction books like the Witcher series.",
    header: (
      <ImgComponent imgSrc="https://images.unsplash.com/photo-1495175448924-1d9a30c90a42?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
];
