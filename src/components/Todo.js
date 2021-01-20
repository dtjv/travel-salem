import Link from 'next/link'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'

const Item = ({ item }) => {
  return (
    <li>
      <Link href="/">
        <a aria-label={`link to ${item.name}`}>
          <div className="flex flex-col items-center px-4 py-8 bg-white border border-gray-300 rounded-lg hover:shadow-md">
            <img
              src={`/images/icons/${slugify(item.name)}.svg`}
              alt={`icon for ${item.name}`}
              className="w-10 h-10"
              width="40"
              height="40"
            />
            <p className="mt-2 text-base font-semibold sm:text-md">
              {item.name}
            </p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export const Todo = ({ section }) => {
  const links = section.links.map((link, idx) => <Item key={idx} item={link} />)

  return (
    <ContainerX className="border border-gray-200 bg-gray-50">
      <ContainerY className="text-gray-800">
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
            {/*
            <Link href="/">
              <a aria-label="link to view all activities">
                <p className="text-lg font-semibold sm:text-xl">
                  View all -&gt;
                </p>
              </a>
            </Link>
            */}
          </div>
          <p className="font-medium text-gray-500">{section.description}</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-6 sm:grid-cols-3">
          {links}
        </ul>
      </ContainerY>
    </ContainerX>
  )
}
