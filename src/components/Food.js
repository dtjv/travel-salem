import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'

const Item = ({ item }) => {
  return (
    <li className="flex-grow-0 flex-shrink-0 first:-mr-4 sm:first:mr-4 lg:first:mr-10 xl:first:mr-24 first:w-0 last:w-0 w-36 last:pr-6 sm:last:pr-10 md:last:pr-14 lg:last:pr-24 xl:last:pr-36">
      {!item.name ? null : (
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
      )}
    </li>
  )
}

export const Food = ({ section }) => {
  section.links.unshift({})
  section.links.push({})

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
        <ul className="flex justify-between overflow-x-auto space-x-8 lg:space-x-10 hide-scrollbar flex-nowrap">
          {links}
        </ul>
      </div>
    </ContainerY>
  )
}
