import React from 'react';
import { Link } from 'react-router-dom';
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

            {/* Image Gallery Section  */}

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

            {/* Services Section  */}

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 font-serif md:text-6xl"><span className='text-blue-500'>S</span>ervices</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">These my special services for you ! Choose one of them and Enjoy !</p>

                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full md:ml-[12rem]">
                            <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$38</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Wedding Photography
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Birthday Photography
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>School prise giving ceromony
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Other's function
                                </p>
                                <Link to='/checkout' class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Checkout
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <p class="text-xs text-gray-500 mt-3">This one is Popular. Most of the people have checked this !</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$56</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Wedding Photography
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Birthday Photography
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>School prise giving ceromony
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Full time support
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Other's function
                                </p>
                                <Link to='/checkout' class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Checkout
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <p class="text-xs text-gray-500 mt-3">This one is only for business purpase ! if you want to business with me you can check this !</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
                                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$72</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>School prise giving ceromony
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Birthday Photography
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Wedding Photography
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Full time support
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Other's function
                                </p>
                                <Link to='/checkout' class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Checkout
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <p class="text-xs text-gray-500 mt-3">This one is so Special. if you check this i'll do every photograph for you !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;