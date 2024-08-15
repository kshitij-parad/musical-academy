import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

function UpComingWebinars() {


   const projects = [
        {
          "title": "Guitar Fundamentals",
          "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
          "link": "/courses/guitar-fundamentals"
        },
        {
          "title": "Piano for Beginners",
          "description": "Start your musical journey with foundational piano skills taught by expert instructors.",
          "link": "/courses/piano-for-beginners"
        },
        {
          "title": "Advanced Vocal Techniques",
          "description": "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
          "link": "/courses/advanced-vocal-techniques"
        },
        {
          "title": "Drumming Mastery",
          "description": "Master the drums with our comprehensive course covering all skill levels.",
          "link": "/courses/drumming-mastery"
        },
        {
          "title": "Jazz Improvisation",
          "description": "Learn the art of jazz improvisation with this course designed for all levels.",
          "link": "/courses/jazz-improvisation"
        },
        {
          "title": "Music Production Fundamentals",
          "description": "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
          "link": "/courses/music-production-fundamentals"
        },
        {
          "title": "Songwriting Essentials",
          "description": "Learn the essentials of songwriting to express your musical creativity.",
          "link": "/courses/songwriting-essentials"
        },
        {
          "title": "Electronic Music Production",
          "description": "Create compelling electronic music with our course designed for beginners to advanced users.",
          "link": "/courses/electronic-music-production"
        },
       
        {
          "title": "Blues Guitar Techniques",
          "description": "Discover the techniques of blues guitar to add soul and depth to your playing.",
          "link": "/courses/blues-guitar-techniques"
        }
      ]
      

    return (
        <div className='pt-12 pb-12 bg-gray-900 flex justify-center items-center'>
            <div className="max-w-7xl  px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <div className="max-w-full px-8">
                        <HoverEffect items={projects} />
                    </div>
                </div>
                <div className="mt-10 text-center justify-center">
                    <Link href={"/"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpComingWebinars
