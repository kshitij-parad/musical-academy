'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

function TestimonialCards() {

    const testimonials =
        [
            {
                "quote": "The Guitar Fundamentals course completely transformed my playing skills. I can now play confidently in front of others!",
                "name": "Michael Thompson",
                "title": "Guitar Fundamentals"
            },
            {



                "quote": "Piano for Beginners was the perfect start for me. The instructor was patient and the lessons were incredibly engaging.",
                "name": "Sarah Williams",
                "title": "Piano for Beginners"
            },
            {


                "quote": "Advanced Vocal Techniques pushed my limits and helped me find my true voice. I’m thrilled with the progress I’ve made!",
                "name": "Daniel Martinez",
                "title": "Advanced Vocal Techniques"
            },
            {


                "quote": "Drumming Mastery was an intense and rewarding experience. Mike Brown’s teaching style kept me motivated every step of the way.",
                "name": "Emily Clark",
                "title": "Drumming Mastery"
            },
            {


                "quote": "Jazz Improvisation opened up a whole new world for me. The course made me fall in love with jazz all over again.",
                "name": "Robert Young",
                "title": "Jazz Improvisation"
            },
            {


                "quote": "Music Production Fundamentals was a game-changer. I now feel confident in producing my own tracks from scratch!",
                "name": "Laura Johnson",
                "title": "Music Production Fundamentals"
            },
            {


                "quote": "Songwriting Essentials sparked my creativity. I’ve written so many new songs since completing the course!",
                "name": "David Brown",
                "title": "Songwriting Essentials"
            },
            {

                "quote": "Electronic Music Production was an amazing journey. The course gave me all the tools I needed to start creating my own music.",
                "name": "Jessica Taylor",
                "title": "Electronic Music Production"
            },
            {

                "quote": "Classical Music History deepened my appreciation for music. It’s fascinating to learn about the origins of the pieces I play.",
                "name": "Mark Wilson",
                "title": "Classical Music History"
            }
        ];
    return (
        <div className="h-[40rem] lg:h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
            <h2 className="mt-2 mb-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">Hear our Harmony: voices of success</h2>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>


    )
}

export default TestimonialCards
