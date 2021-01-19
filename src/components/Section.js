import Link from 'next/link'
import Image from 'next/image'
import slugify from '@sindresorhus/slugify'

import { ContainerX, ContainerY } from './Container'
import { HorizontalGrid, Grid } from './Grid'

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
            <h2 className="text-2xl font-bold sm:text-3xl">{section.name}</h2>
            <Link href="/">
              <a aria-label={`link to view all items in ${section.name}`}>
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
