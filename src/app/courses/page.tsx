'use client'

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import courseData from '@/data/music_data.json'
import Footer from "@/components/Footer";

function Page() {
    return (
     <>
        <div className="min-h-screen bg-black py-12 pt-36">

<h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-6 text-white">All Courses ({courseData.courses.length})</h1>

<div className="flex flex-wrap justify-center">
    {courseData.courses.map((course) => (
        <CardContainer className="inter-var" key={course.id}>
            <CardBody className="bg-gray-50 mx-2  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6  border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {course.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={course.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-center items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="/"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white justify-center text-center"
                    >
                        Try now →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    ))}
</div>
</div>

<Footer/>
     </>
    )
}

export default Page
