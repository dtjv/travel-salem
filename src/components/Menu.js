import { Section } from './Section'

export const Menu = ({ data, showMenu, onClick }) => {
  const { food, todo, stay, vendors, company, support } = data.sections
  const sections = [food, todo, stay, vendors, company, support].map(
    (section, idx) => (
      <Section
        key={idx}
        section={section}
        showMenu={showMenu} // TODO; remove if not a demo
        onClick={onClick} // TODO; remove if not a demo
      />
    )
  )

  return (
    <div className={`inset-0 z-20 ${showMenu ? 'fixed' : 'hidden'}`}>
      <div className="relative flex flex-col w-full h-full max-w-full max-h-full bg-gray-50">
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
        <div className="flex-auto px-4 py-8 mb-8 overflow-y-auto">
          <ul className="grid gap-x-2 gap-y-10 sm:gap-x-4 grid-cols-2 sm:grid-c ols-3">
            {sections}
          </ul>
        </div>
      </div>
    </div>
  )
}
