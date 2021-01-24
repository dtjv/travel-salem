import Link from 'next/link'

export const Menu = ({ data, showMenu, onClick }) => {
  const { food, todo, stay, vendors, company, support } = data.sections
  const sections = [food, todo, stay, vendors, company, support].map(
    (section, i) => {
      return (
        <li key={i} className="space-y-5">
          <p className="font-semibold text-gray-900 uppercase">
            {section.name}
          </p>
          <ul className="text-gray-500 space-y-4">
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
    <div className={`inset-0 z-20 ${showMenu ? 'fixed' : 'hidden'}`}>
      <div className="relative flex flex-col w-full h-full max-w-full max-h-full bg-white">
        <div className="flex items-center justify-between flex-shrink-0 px-4 py-4 border-b border-gray-200 sm:px-8">
          <button
            aria-label="button to close menu"
            onClick={() => onClick((prevState) => !prevState)}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex-auto px-4 py-8 mb-8 overflow-y-auto hide-scrollbar space-y-8 sm:px-8">
          {sections}
        </ul>
      </div>
    </div>
  )
}
