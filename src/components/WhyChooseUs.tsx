"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Comprehensive Course Selection",
      description:
        "From beginner guitar to advanced vocal techniques, our diverse course offerings cater to all skill levels and interests. Whether you're starting with basics or aiming to master complex techniques, we have a course for you.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Comprehensive Course Selection
        </div>
      ),
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from experienced professionals like John Doe, Jane Smith, and Emily Johnson. Our instructors bring a wealth of knowledge and practical skills to help you achieve your musical goals.",
      content: (
        <div  className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Expert Instructors
        </div>
      ),
    },
    {
      title: "Featured Courses",
      description:
        "Explore our specially featured courses such as 'Guitar Fundamentals' and 'Music Production Fundamentals' for an in-depth learning experience. These courses are handpicked for their quality and effectiveness.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Featured Courses
        </div>
      ),
    },
    {
      title: "Affordable Pricing",
      description:
        "Our courses are designed to offer exceptional value for money, with prices starting from just $99.99. Choose the right course for you without breaking the bank.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Affordable Pricing
        </div>
      ),
    },
    {
      title: "Practical and Engaging Learning",
      description:
        "Our courses are crafted to be both practical and engaging, ensuring that you gain valuable skills while enjoying the learning process. Interactive lessons and hands-on practice make our courses effective and enjoyable.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Practical and Engaging Learning
        </div>
      ),
    },
  ]
  
export default function whyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
