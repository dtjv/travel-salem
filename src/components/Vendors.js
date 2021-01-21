import { useState } from 'react'
import Link from 'next/link'

import { ContainerX, ContainerY } from './Container'

export const Vendors = ({ section }) => {
  const [vendor, setVendor] = useState(section.links[0].name)

  const links = section.links.map((link, idx) => {
    return (
      <button
        key={idx}
        className="outline-none focus:outline-none hover:text-gray-500"
        onClick={() => setVendor(link.name)}
      >
        <p className="pb-2 font-semibold text-gray-900 cursor-pointer">
          <span
            className={`pb-2 ${
              vendor === link.name ? 'border-b-2 border-gray-800' : ''
            }`}
          >
            {link.name}
          </span>
        </p>
      </button>
    )
  })

  return (
    <ContainerX className="mb-4">
      <ContainerY className="text-gray-800">
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
          </div>
          <p className="font-medium text-gray-500">{section.description}</p>
        </div>
        <div className="flex flex-col">
          <ul
            className="overflow-x-auto border-b grid hide-scrollbar grid-rows-1 gap-x-4 lg:gap-x-8 grid-flow-col"
            style={{
              gridTemplateColumns: `repeat(${section.links.length}, minmax(150px, 1fr))`,
            }}
          >
            {links}
          </ul>
          <div className="pt-4">
            <ul className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-8 md:gap-y-10 sm:grid-cols-3">
              {section.links
                .find((link) => link.name === vendor)
                .vendors.map((v, i) => (
                  <li key={i}>
                    <Link href="/">
                      <a aria-label={`link to ${v.name}`}>
                        <p className="text-sm font-medium text-gray-800">
                          {v.name}
                        </p>
                        <p className="text-sm text-gray-500">{v.description}</p>
                        <p className="text-xs text-gray-500">{v.phone}</p>
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
