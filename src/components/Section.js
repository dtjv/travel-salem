import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'
import { HorizontalGrid, Grid } from './Grid'

const Item = ({ parent, item }) => {
  return (
    <li>
      <Link href={`/${slugify(parent.name)}/${slugify(item.name)}`}>
        <a>
          <Image
            className="rounded-lg"
            src={`/images/${slugify(item.name)}.jpg`}
            width="500"
            height="375"
          />
          <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
        </a>
      </Link>
    </li>
  )
}

export const Section = ({ section, horizontal, dark }) => {
  const bgColor = dark ? 'bg-black' : 'bg-white'
  const textColor = dark ? 'text-white' : 'text-gray-800'

  const categories = section.categories
    .slice(0, 5)
    .map((category, idx) => <Item key={idx} parent={section} item={category} />)

  return (
    <ContainerX className={bgColor}>
      <ContainerY className={textColor}>
        <div className="pb-6">
          <div className="flex items-baseline justify-between pb-2">
            <h2 className="text-3xl font-bold">{section.name}</h2>
            <Link href={`/${slugify(section.name)}`}>
              <a>
                <p className="text-lg font-semibold sm:text-xl">
                  View all -&gt;
                </p>
              </a>
            </Link>
          </div>
          <p className={`font-medium ${dark ? 'text-white' : 'text-gray-500'}`}>
            {section.description}
          </p>
        </div>
        {horizontal ? (
          <HorizontalGrid>{categories}</HorizontalGrid>
        ) : (
          <Grid>{categories}</Grid>
        )}
      </ContainerY>
    </ContainerX>
  )
}
