import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
function LandingPage() {
  return (
    <>
    <Navigation/>
      <div className="relative overflow-hidden">
        <div className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block text-pink-500">Welcome to </span>
                    <span className="block text-black">Bike Fleet</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Cue your favorite biker anthem, grab a fistful of throttle
                    and roll on out to a life-affirming adventure that will
                    change you forever. There are places on the paved side of
                    this planet that can only truly be experienced by
                    motorcycle, where life in the wind heightens the senses and
                    expands the spirit of every freedom seeking soul. At
                    BikeFleet, we provide motorcycles and design tours for men
                    and women not meant for the average citizen. Novice or
                    expert, bikers are a breed apart, and so are our programs.
                    We are one of you, and understand the pure primal joy only
                    motorcycling, above all else, offers.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <button
                          className="block w-full mr-20 rounded-md bg-gray-500 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          type="button"
                        >
                          <NavLink to="/owner">
                          Owner
                          </NavLink>
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button className="block w-full mr-20 rounded-md bg-pink-500 py-3 px-10 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                          <NavLink to="/rider">Rider</NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 hidden lg:block">
                <img
                  className=""
                  src="https://www.teahub.io/photos/full/193-1939377_bike-4k-wallpaper-for-mobile.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <NavLink to="/aboutus" className="text-base text-gray-500 hover:text-gray-900">
                About
              </NavLink>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Press
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Privacy
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="https://github.com/abdu-10"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            © 2023 BikeFleet. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
