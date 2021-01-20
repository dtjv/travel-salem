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
              className="rounded-lg"
              quality={100}
              src={`/images/${slugify(item.name)}.jpg`}
              alt={`image for ${item.name}`}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
        </a>
      </Link>
    </li>
  )
}

export const Food = ({ section }) => {
  const links = section.links.map((link, idx) => <Item key={idx} item={link} />)

  return (
    <ContainerX>
      <ContainerY className="text-gray-800">
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
            {/* i'm displaying all food links for now.
            <Link href="/">
              <a aria-label={`link to view all items in ${section.name}`}>
                <p className="text-lg font-semibold sm:text-xl">
                  View all -&gt;
                </p>
              </a>
            </Link>
            */}
          </div>
          <p className="font-medium text-gray-500">{section.description}</p>
        </div>
        <ul
          className="overflow-x-auto grid hide-scrollbar grid-rows-1 gap-x-4 grid-flow-col"
          style={{
            gridTemplateColumns: `repeat(${section.links.length}, minmax(250px, 1fr))`,
            columnGap: '1.50rem',
          }}
        >
          {links}
        </ul>
      </ContainerY>
    </ContainerX>
  )
}
