import React, { useState } from "react";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Icon from '@mdi/react';
import { mdiBagSuitcase } from '@mdi/js';


AOS.init();

const Search = () => {
  
  return (
    <section id="Hero" className="flex justify-center h-screen items-center bg-cover bg-no-repeat " style={{backgroundImage:'url(https://i.pinimg.com/originals/b9/fd/07/b9fd0706b105d23574ff54278e497442.jpg)' , backgroundAttachment:'fixed'}}>
    <div className="flex flex-wrap justify-center lg:p-16 md:p px-4 items-center gap-2 ">
      <div className="w-fit bg-base-200 bg-opacity-75 p-5 rounded-xl pb-16">
      <Icon path={mdiBagSuitcase} size={2} data-aos="zoom-in-down"  color={'#102C57'} data-aos-duration="3000"/>

        <h1 className="max-w-2xl mb-4 text-4xl text-center font-extrabold text-[#102C57] tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Never Lose Your Luggage Again
        </h1>
        <p className="max-w-2xl mb-6 font-light text-center text-[#102c57af] lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Track and Locate Your Baggage with Ease <br></br>
        </p>
          <a href="http://bagguard.rf.gd/Search.html" className="flex justify-center">
          <button
            type="submit"
            className="inline-flex self items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
          </a>
      </div>
      
    </div>
  </section>
  )
}

export default Search