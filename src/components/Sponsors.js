import Link from 'next/link'
import Image from 'next/image'

import { ContainerX, ContainerY } from './Container'

const Item = ({ item }) => {
  return (
    <li>
      <Link href={item.url} target="_blank">
        <a aria-label={`link to ${item.url}`}>
          <Image
            src={`/images/logos/${item.logo}`}
            layout="responsive"
            width="100"
            height="100"
            alt={item.logo.replaceAll('-', ' ').slice(0, -4)}
          />
        </a>
      </Link>
    </li>
  )
}

export const Sponsors = ({ section }) => {
  const links = section.links.map((link, idx) => <Item key={idx} item={link} />)

  return (
    <ContainerX>
      <ContainerY>
        <div className="pb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">{section.name}</h2>
        </div>
        <div className="flex items-center justify-between px-4">
          <ul
            className="overflow-x-auto grid hide-scrollbar grid-rows-1 gap-x-4 grid-flow-col"
            style={{
              gridTemplateColumns: `repeat(${section.links.length}, minmax(75px, 1fr))`,
              columnGap: '1.50rem',
            }}
          >
            {links}
          </ul>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
