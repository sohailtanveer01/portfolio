import React from "react";
import services from "../Images/services.jpg"

const Services = () => {
  return (
    <>
      <div class="flex justify-center items-center bg-black h-auto" id="services">
        <div class="flex flex-col justify-center items-center max-w-7xl ">
          <h1 class="text-3xl md:text-[50px] text-white font-bold mt-5 ">
            My Services
          </h1>
          <div class="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
            <div class="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
              
              <div class="flex items-center justify-center flex-col space-y-2 mt-5 ">
                <div class="flex items-center justify-center space-x-4">
                  <img
                    src="https://www.esearchlogix.com/wp-content/uploads/2022/04/web-left-banner.jpg"
                    class="w-[20%] md:w-[5%]"
                    alt=""
                  />
                  <h1 class="text-lg font-semibold mt-3 text-cyan-600">Frontend Development</h1>
                </div>
                <h1 class="text-justify text-gray-300 md:w-[250px]">
                 I primarily use React for developing Frontend, along with it goes Tailwindcss for styling im also good at writing plane css<br/>
                 but i find it a good practice doing it with Tailwind, i can make any website responsive(i.e for any device screen resolution)
                 im comfortable using any css frameworks like Chakra-UI, material-UI etc..
                </h1>
              </div>
              <div class="flex items-center justify-center flex-col space-y-2 mt-5">
                <div class="flex items-center justify-center space-x-4">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg?w=2000"
                    class="w-[20%] md:w-[5%]"
                    alt=""
                  />
                  <h1 class="text-lg font-semibold mt-2 text-cyan-600">Backend Development</h1>
                </div>
                <h1 class="text-justify text-gray-300 md:w-[250px]">
                  I use node and express to run servers and build api end points, im comfortable with using any Database but i prefer MongoDB most of the times as i can do all the CRUD operations on it with ease<br/>
                  i have a good experience working with languages like python, php on the backend.  
                </h1>
              </div>
            </div>
            <div class="w-60 lg:w-96 h-60 lg:h-96 overflow-hidden  ">
              <img
                src={services}
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="flex flex-col m-6 px-6 xl:w-1/3 w-full items-center justify-center">
              <div class="flex flex-col items-start">
                <h1 class="text-cyan-600 text-2xl font-bold">
                  Freelancing
                </h1>
                <p class="text-justify text-gray-300 md:w-[250px] mt-5">
                  I have worked with clients that i get online to get their website done from scratch.  
                </p>
                <button class="mt-5 px-6 py-1 text-lg text-white hover:bg-gray-800 bg-gray-700">
                  <a href="#contact">Hire me</a>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </>
  );
};

export default Services;
