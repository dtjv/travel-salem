import { ContainerX, ContainerY } from './Container'
import { Section } from './Section'
import { SocialIcons } from './icons/Social'

export const Footer = ({ data }) => {
  const { food, todo, stay, vendors, company, support } = data.sections
  const sections = [
    food,
    todo,
    stay,
    vendors,
    company,
    support,
  ].map((section, idx) => <Section key={idx} section={section} />)

  return (
    <footer className="text-sm border-t border-gray-300 bg-gray-50">
      <ContainerX>
        <ContainerY className="divide-y divide-gray-200 space-y-8">
          <ul className="grid gap-x-2 gap-y-10 sm:gap-x-4 md:gap-x-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
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
            <SocialIcons />
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
