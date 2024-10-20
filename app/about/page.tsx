import React from 'react'
import Image from 'next/image'
import book from '../../app/picture/lib.jpg';
import book1 from '../../app/picture/lib2.jpg';
import book2 from '../../app/picture/lib3.jpg';








const About = () => {
    return (
        <section className='w-screen mt-12'>
            <div className='flex flex-1 justify-start items-center flex-col gap-6'>
                <h5 className='font-bold text-4xl font-cursive'>Activities</h5>
                <p className='text-2xl uppercase font-light'>
                    ApnaEduHub Institute Of Technology
                </p>
                <p className='w-3/5 text-center md:text-2xl font font-cursive'>
                    At ApnaEduHub Institute Of Technology, we are dedicated to fostering innovation and creativity among our students. Our comprehensive curriculum covers a wide range of disciplines, including computer science, engineering, and business management. With state-of-the-art facilities and experienced faculty, we ensure that our students receive a holistic education that prepares them for the challenges of the modern workforce. Our extracurricular activities, including workshops, seminars, and collaborative projects, empower students to apply their knowledge in real-world scenarios, cultivating critical thinking and problem-solving skills
                </p>
                <div className='flex xs:flex-col md:flex-row justify-center items-center gap-6'>

                    <Image className='md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl' src={book} alt="img1" />
                    <Image className='md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl' src={book1} alt='img2' />
                    <Image className='md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl' src={book2} alt='img3' />


                </div>
                <button className='border-blue-500 border-2 p-2 rounded-md focus:ring  focus:ring-blue-200'>View More</button>
            </div>

        </section>
    )
}

export default About
