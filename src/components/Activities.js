import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'
import { Grid } from './Grid'

const Item = ({ item }) => {
  return (
    <Link href="/">
      <a>
        <li className="flex flex-col items-center px-4 py-8 bg-white border border-gray-300 rounded-lg hover:shadow-md">
          <Image
            src={`/images/icons/${slugify(item.name)}.svg`}
            width="40"
            height="40"
            alt={`icon for ${item.name}`}
          />
          <p className="mt-2 text-base font-semibold sm:text-md">{item.name}</p>
        </li>
      </a>
    </Link>
  )
}

export const Activities = ({ section }) => {
  const categories = section.categories.map((category, idx) => (
    <Item key={idx} parent={section} item={category} />
  ))

  return (
    <ContainerX className="border border-gray-200 bg-gray-50">
      <ContainerY className="text-gray-800">
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
            <Link href="/">
              <a>
                <p className="text-lg font-semibold sm:text-xl">
                  View all -&gt;
                </p>
              </a>
            </Link>
          </div>
          <p className="font-medium text-gray-500">{section.description}</p>
        </div>
        <Grid>{categories}</Grid>
      </ContainerY>
    </ContainerX>
  )
}
