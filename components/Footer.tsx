import { FacebookIcon, Instagram, Twitter } from 'lucide-react'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <p>My logo goes here</p>
        {/* <img className="h-20" src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/FX5ATkass4-no-background-VmcZHSX7xE4ng29ATNphGUdb388fxH.png" alt="Company name" /> */}
        <p className="text-sm leading-6 text-gray-600">Elysian Horizon: Where Mind & Body Embrace Serenity</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FacebookIcon/>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Instagram/>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Twitter/>
          </a>
          
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Mental Health</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Chakra Test</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">OCEAN Test</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">RIASEC Test</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Childhood Trauma Test</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Advance Personality Test</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Procastination Test</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Physical Health</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Diets & Recipes</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Yoga & Workouts</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Meditation </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Breathing Exercises</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
            <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">AI Status</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p className="text-xs leading-5 text-gray-500">&copy; 2020-{new Date().getFullYear()} Purease, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
  )
}

export default Footer