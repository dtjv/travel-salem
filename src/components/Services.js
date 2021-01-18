import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'
import { Grid } from './Grid'

const Item = ({ item }) => {
  return (
    <li>
      <Link href="/">
        <a aria-label={`link to ${item.name}`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 p-1.5 sm:p-2 md:p-4 bg-indigo-200 rounded-full sm:w-14 sm:h-14 md:w-16 md:h-16">
                <Image
                  src={`/images/icons/${slugify(item.name)}.svg`}
                  width="40"
                  height="40"
                  alt={`icon for ${item.name}`}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center px-2 sm:px-4">
              <p className="font-semibold text-md md:text-lg">{item.name}</p>
              <p className="text-sm font-medium text-gray-500 md:text-base">
                15 vendors
              </p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

export const Services = ({ section }) => {
  const categories = section.categories.map((category, idx) => (
    <Item key={idx} parent={section} item={category} />
  ))

  return (
    <ContainerX className="mb-4">
      <ContainerY className="text-gray-800">
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
          </div>
          <p className="font-medium text-gray-500">{section.description}</p>
        </div>
        <Grid className="md:gap-y-10">{categories}</Grid>
      </ContainerY>
    </ContainerX>
  )
}
