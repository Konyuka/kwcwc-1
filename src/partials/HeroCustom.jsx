import React, { useState } from 'react';


function HeroCustom()
{

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      <div class="bg-white mt-24">

        <main>
          <div>
            <div class="relative">
              <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
              <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                  <div class="absolute inset-0">
                    <img class="h-full w-full object-cover" src="https://downloader.la/temp/[Downloader.la]-6369aec7e9ba6.jpg" alt="People working on laptops" />
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-800 to-teal-600 mix-blend-multiply"></div>
                  </div>
                  <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      <span class="block text-white">Kenya Women & Children's</span>
                      <span class="block text-indigo-200">Wellness Center</span>
                    </h1>
                    <p class="italic mx-auto mt-6 max-w-lg text-center text-xl text-gray-300 sm:max-w-3xl">
                      We’re focused on reaching the poorest and most vulnerable people who are often living in fragile and conflict-affected states.
                    </p>
                    <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-10 sm:space-y-0">
                        <div>
                          <a className="transform translate hover:scale-125 duration-700 btn text-white bg-blue-600 hover:bg-white hover:text-black w-full sm:w-auto sm:ml-4" href="#0">What We Do</a>
                        </div>
                        <div>
                          <a className="transform translate hover:scale-125 duration-700 btn text-white bg-blue-600 hover:bg-white hover:text-black w-full mb-4 sm:w-auto sm:mb-0" href="#0">Who We Are</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-100">
              <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-base font-semibold text-gray-500">Some of our Completed Projects</p>
                <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                  </div>
                  <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                  </div>
                  <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                  </div>
                  <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                  </div>
                  <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>



    </section>
  );
}

export default HeroCustom;