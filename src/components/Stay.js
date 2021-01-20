import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'

const Item = ({ item }) => {
  return (
    <li>
      <Link href="/">
        <a aria-label={`link to ${item.name}`}>
          <div>
            <Image
              className="rounded-t-lg"
              quality={100}
              src={`/images/${slugify(item.name)}.jpg`}
              alt={`image for ${item.name}`}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="p-2 bg-gray-900 rounded-b-lg md:p-4 lg:py-6">
            <p className="font-semibold text-md sm:text-xl lg:text-2xl">
              {item.name}
            </p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export const Stay = ({ section }) => {
  const links = section.links.map((link, idx) => <Item key={idx} item={link} />)

  return (
    <ContainerX className="bg-black">
      <ContainerY className="text-white">
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
            {/* i'm displaying all stay links for now.
            <Link href="/">
              <a aria-label={`link to view all items in ${section.name}`}>
                <p className="text-lg font-semibold sm:text-xl">
                  View all -&gt;
                </p>
              </a>
            </Link>
            */}
          </div>
          <p className="font-medium text-white">{section.description}</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-6 sm:grid-cols-3">
          {links}
        </ul>
      </ContainerY>
    </ContainerX>
  )
}
