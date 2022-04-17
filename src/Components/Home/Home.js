import React from 'react';
import './Home.css'
import banner from '../../img/banner.jpg'
import wild from '../../img/wild.jpg'
import star from '../../img/star.jpg'
import dog from '../../img/dog.jpg'
import boat from '../../img/boat.jpg'
import snow from '../../img/snow.jpg'
import flower from '../../img/flower.jpg'


let sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const Home = () => {
    return (
        <div>
            <section className="banner bg-fixed" style={sectionStyle}>
                <div className='text-white'>
                    <h1 className='text-xl md:text-5xl md:px-10 md:pt-[120px] font-semibold font-serif'><span className='text-blue-500 text-6xl font-serif'>S</span>P's</h1>
                    <h1 className='text-xl md:text-5xl md:px-10 md:pt-[20px] font-semibold font-serif'><span className='text-blue-500 text-6xl font-serif'>C</span>reative <span className='text-blue-500 text-6xl'>P</span>hotography</h1>
                    <p className='md:w-[600px] md:px-10 mt-5 banner-description'>Hi There ! WelCome to my Photography portfolio. I've always imagined a photograph to be like a jigsaw puzzle, you have to find the various pieces that fit together to create something visually spellbinding. I like to set up my scenes; plastering bubble wrap and newspapers all over my house, covering absolutely everything or dragging my living room furniture into my garden.</p>
                    <div className="md:px-10 mt-8">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                See More
                                <span className='pl-3 text-blue-500'><i class="fa fa-arrow-down" aria-hidden="true"></i>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="services">
                <h1 className="md:text-6xl text-center mt-10 font-serif"><span className='text-blue-500 font-serif text-7xl'>I</span>mages</h1>
                <section class="overflow-hidden text-gray-700">
                    <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                        <div class="flex flex-wrap -m-1 md:-m-2">
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={wild} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={star} />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={dog} />
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={boat} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={snow} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={flower} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>





        </div>
    );
};

export default Home;