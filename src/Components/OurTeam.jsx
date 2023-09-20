import React from "react";
import "../index.css"
import { Link } from "react-router-dom";
import Asma from "../Images/Asma.jpg";
import Ahmad from "../Images/Ahmad.jpg";
import Ayman from "../Images/Ayman.jpg";
import Qais from "../Images/Qais.jpg";
import Mohummad from "../Images/Mohummad.jpg";
import Mai from "../Images/Mai.jpg";
import { FaLinkedin , FaGithub , FaBehanceSquare } from 'react-icons/fa';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

const OurTeam = () => {
  return (
    <section id="team" className="bg-white dark:bg-gray-900">
            {/* <Icon path={mdiAirplane} size={2} className="plane rotate-45"

/> */}

      <div className="py-8 px-4 mx-auto w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#102C57] dark:text-white">
            Our team
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-28">
          <div className="text-center w-72 text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-lg"
              src={Ayman}
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#102C57] dark:text-white">
              <span>AYMAN AL-ATTILI</span>
            </h3>
            <p>AI Specialist</p>
            <ul className="flex justify-center mt-4 space-x-4 h-10 items-center">
              <li>
              <a target="_blank" href="https://www.linkedin.com/in/ayman-al-attili/"><FaLinkedin color="#0a66c2"/></a> 
              </li>
              <li>
              <a target="_blank" href="https://github.com/ayman-jamal"><FaGithub color="black" /></a> 

              </li>
            </ul>
          </div>
          <div className="text-center w-72 text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-lg"
              src={Ahmad}
              alt="Helene Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#102C57] dark:text-white">
              <span>AHMAD JUEITEM</span>
            </h3>
            <p>Business Specialist</p>
            <ul className="flex justify-center mt-4 space-x-4 h-10 items-center">
              <li>
              <Link><FaLinkedin color="#0a66c2"/></Link> 

              </li>
              <li>
              <Link><FaGithub color="black" /></Link> 

              </li>
            </ul>
          </div>
          <div className="text-center w-72 text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-lg"
              src={Asma}
              alt="Jese Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#102C57] dark:text-white">
              <span>ASMA AL-ATTILI</span>
            </h3>
            <p>Web Development Specialist </p>
            <ul className="flex justify-center mt-4 space-x-4 h-10 items-center">
              <li>
              <a target="_blank" href="https://www.linkedin.com/in/asma-rasheed-18b441267/"><FaLinkedin color="#0a66c2"/></a> 

              </li>
              <li>
              <a target="_blank" href="https://github.com/AsmaRasheed99?tab=repositories"><FaGithub color="black" /></a> 

              </li>
            </ul>
          </div>
          <div className="text-center w-72 text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-lg"
              src={Mohummad}
              alt="Joseph Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#102C57] dark:text-white">
              <span>MOHUMMAD AL-SYOUF </span>
            </h3>
            <p>Electronics Specialist</p>
            <ul className="flex justify-center mt-4 h-10 items-center space-x-4">
              <li>
              <Link><FaLinkedin color="#0a66c2"/></Link> 

              </li>
              <li>
              <Link><FaGithub color="black" /></Link> 

              </li>
            </ul>
          </div>
          <div className="text-center w-72 text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-lg"
              src={Qais}
              alt="Sofia Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#102C57] dark:text-white">
              <span>Qais Abu Ghazleh</span>
            </h3>
            <p>Software Engineer</p>
            <ul className="flex justify-center mt-4 h-10 items-center space-x-4">
              <li>
              <a href="https://www.linkedin.com/in/ACoAAEDvYjEBaTzPZMb4dBZomtTvta6AvNRvPP0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEDvYjEBaTzPZMb4dBZomtTvta6AvNRvPP0&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BGtib3%2FuxQaqnvNu8%2FAI%2B7A%3D%3D" target="_blank"><FaLinkedin color="#0a66c2" /></a> 

              </li>
              <li>
              <a href="https://github.com/qaisabughazleh"><FaGithub color="black" /></a> 

              </li>
            </ul>
          </div>
          <div className="text-center w-72 text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-lg"
src={Mai}              alt="Leslie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#102C57] dark:text-white">
              <span>MAI ARAR</span>
            </h3>
            <p>Design & Fabrication Specialist</p>
            <ul className="flex justify-center mt-4 h-10 items-center space-x-4">
              <li>
              <a href="https://www.linkedin.com/in/mai-arar-6014031a6/" target="_blank"><FaLinkedin color="#0a66c2"/></a> 

              </li>
              <li>
              <a href="https://www.behance.net/maiarar98" target="_blank"><FaBehanceSquare color="blue" /></a> 

              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
