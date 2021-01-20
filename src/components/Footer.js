import Link from 'next/link'

import { ContainerX, ContainerY } from './Container'

export const Footer = ({ data }) => {
  const { food, todo, stay, vendors, company, support } = data.sections
  const sections = [food, todo, stay, vendors, company, support].map(
    (section, i) => {
      return (
        <li key={i} className="space-y-5">
          <p className="font-semibold text-gray-800 uppercase">
            {section.name}
          </p>
          <ul className="text-gray-500 space-y-4">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <Link href="/">
                  <a
                    aria-label={`link to ${link.name}`}
                    className="hover:text-gray-600"
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
    <footer className="text-sm border-t sm:text-base bg-gray-50">
      <ContainerX>
        <ContainerY className="divide-y divide-gray-200 space-y-8">
          <ul className="grid gap-x-2 gap-y-10 sm:gap-x-4 md:gap-x-6 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
            {sections}
          </ul>
          <div className="pt-8 sm:flex sm:items-center sm:justify-between">
            <div className="mr-6">
              <p className="font-semibold text-gray-800 uppercase">
                Subscribe to our newsletter
              </p>
              <p className="pt-2 text-gray-600">
                The latest news, articles, and resources, sent to your inbox
                monthly.
              </p>
            </div>
            <div className="items-center mt-4 sm:flex sm:mt-0">
              <label
                className="hidden"
                id="signup-email-label"
                htmlFor="signup-email-input"
              >
                Signup for Newsletter
              </label>
              <input
                id="signup-email-input"
                type="text"
                className="block mr-2 bg-gray-100 border border-black rounded-md focus:border-gray-500 focus:bg-white"
                placeholder="Enter your email"
                aria-labelledby="signup-email-label"
              />
              <button className="mt-4 sm:mt-0 flex items-center px-4 py-2.5 text-white bg-black rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="items-center justify-between pt-8 sm:flex">
            <div className="flex items-center">
              <img
                src="/images/icons/copyright.svg"
                alt="copyright icon"
                className="w-4 h-4"
                width="16"
                height="16"
              />
              <p className="ml-1">2021 Travel Salem</p>
            </div>
            <ul className="flex items-center mt-4 sm:mt-0 space-x-3 sm:space-x-6">
              {data.site.social.map((social, idx) => (
                <li key={idx}>
                  <Link href={social.url}>
                    <a aria-label={`link to ${social.url}`}>
                      <img
                        src={`/images/icons/social/${social.icon}.svg`}
                        alt={`icon for ${social.url}`}
                        className="w-6 h-6"
                        width="24"
                        height="24"
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ContainerY>
      </ContainerX>
      <div className="p-4 text-center text-white bg-black">
        <p className="font-medium tracking-wide">
          Made with ☕️ ☕️ ☕️ by{' '}
          <a href="https://dtjv.io" className="font-semibold underline">
            David Valles
          </a>
        </p>
      </div>
    </footer>
  )
}
