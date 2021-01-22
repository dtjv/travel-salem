import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'

const Item = ({ item }) => {
  return (
    <li className="inline-block w-40 mx-2 md:w-48 lg:mx-4 lg:w-64 first:ml-4 sm:first:ml-8 md:first:ml-12 xl:first:ml-32 last:mr-16 md:last:mr-20 lg:first:ml-20 lg:last:mr-24 xl:last:mr-32">
      <Link href="/">
        <a aria-label={`link to ${item.name}`}>
          <Image
            className="rounded-lg"
            quality={100}
            src={`/images/${slugify(item.name)}.jpg`}
            alt={`image for ${item.name}`}
            layout="responsive"
            width={500}
            height={500}
          />
          <h3 className="mt-2 text-xl font-semibold text-gray-800">
            {item.name}
          </h3>
        </a>
      </Link>
    </li>
  )
}

export const Food = ({ section }) => {
  const links = section.links.map((link, idx) => <Item key={idx} item={link} />)

  return (
    <ContainerY>
      <ContainerX>
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              {section.name}
            </h2>
          </div>
          <p className="font-medium text-gray-500">{section.description}</p>
        </div>
      </ContainerX>
      <div>
        <ul className="overflow-x-auto hide-scrollbar whitespace-nowrap">
          {links}
        </ul>
      </div>
    </ContainerY>
  )
}
