import { useState } from 'react'
import Link from 'next/link'

import { ContainerX } from './Container'

export const Nav = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { food, todo, stay, vendors, company, support } = data.sections
  const sections = [food, todo, stay, vendors, company, support].map(
    (section, i) => {
      return (
        <li key={i} className="space-y-5">
          <p className="font-semibold text-gray-900 uppercase">
            {section.name}
          </p>
          <ul className="text-gray-600 space-y-4">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <Link href="/">
                  <a
                    aria-label={`link to ${link.name}`}
                    className="hover:underline"
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )
    }
  )

  return (
    <nav>
      <div
        className={`py-4 w-3/4 fixed inset-0 z-10 ${
          showMenu ? 'block' : 'hidden'
        } h-full bg-white`}
      >
        <ContainerX>
          <div className="relative">
            <button
              aria-label="button to close menu"
              onClick={() => setShowMenu((prevState) => !prevState)}
            >
              <svg
                className="absolute top-0 right-0 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="mt-4 overflow-y-auto hide-scrollbar space-y-8">
            {sections}
          </ul>
        </ContainerX>
      </div>
      <div className="py-3">
        <ContainerX className="flex items-center justify-between">
          <div className="flex">
            <Link href="/">
              <a aria-label="link to home page">
                <p className="text-3xl font-bold md:text-5xl font-display">
                  Travel Salem
                </p>
              </a>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="md:hidden"
              aria-label="link to display menu items"
              onClick={() => setShowMenu((prevState) => !prevState)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="items-center hidden md:flex space-x-4">
            <Link href="/">
              <a aria-label="button to search">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a
                aria-label="link to travelsalem services"
                className="font-medium text-gray-500 hover:text-gray-800"
              >
                Services
              </a>
            </Link>
            <Link href="/">
              <a
                aria-label="link to travelsalem blog"
                className="font-medium text-gray-500 hover:text-gray-800"
              >
                Blog
              </a>
            </Link>
            <Link href="/">
              <a
                aria-label="link to travelsalem about page"
                className="font-medium text-gray-500 hover:text-gray-800"
              >
                About
              </a>
            </Link>
          </div>
        </ContainerX>
      </div>
    </nav>
  )
}
