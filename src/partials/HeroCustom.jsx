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
                    <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
                  </div>
                  <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      <span class="block text-white">Kenya Women & Children's</span>
                      <span class="block text-indigo-200">Wellness Center</span>
                    </h1>
                    <p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                      We’re focused on reaching the poorest and most vulnerable people who are often living in fragile and conflict-affected states.
                    </p>
                    <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                      <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get started</a>
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Live demo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-100">
              <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-base font-semibold text-gray-500">Trusted by over 5 very average small businesses</p>
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