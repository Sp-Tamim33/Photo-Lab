import React from 'react';
import AboutMe from '../../img/AboutMe.jpeg'

let blank = "_blank";

const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div className="order-1 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:ml-[12rem]">
                        <img className="object-cover object-center rounded" alt="hero" src={AboutMe} />
                    </div>
                    <div className="order-2 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><span className='text-blue-500'>A</span>bout Me
                        </h1>
                        <p className="mb-8 leading-relaxed md:w-[600px]">Hey ! This is <span className='text-blue-500'>Sp Tamim</span> . From Bangladesh I'm a professional photographer ! I have 3 year experience in Photography. It would be nice if your photographs could do all the talking for you, but occasionally you need to use words. The about page on your website and your Instagram profile are just some of the places photographers need to have a bio. A good bio provides photographers with a powerful way to showcase their professional experience and convey their personalities to potential clients.</p>
                        <div className="flex justify-center">
                            <a href='https://www.facebook.com/Sp.Tam1m' target={blank} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;