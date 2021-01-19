import Link from 'next/link'
import Image from 'next/image'

import { ContainerX, ContainerY } from './Container'
import { HorizontalGrid } from './Grid'

export const Sponsors = ({ sponsors }) => {
  const renderSponsors = sponsors.map((sponsor, idx) => (
    <li key={idx}>
      <Link href={sponsor.url} target="_blank">
        <a aria-label={`link to ${sponsor.url}`}>
          <Image
            src={`/images/logos/${sponsor.logo}`}
            layout="responsive"
            width="100"
            height="100"
            alt={sponsor.alt}
          />
        </a>
      </Link>
    </li>
  ))

  return (
    <ContainerX>
      <ContainerY>
        <div className="pb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Support our sponsors!
          </h2>
        </div>
        <div className="flex items-center justify-between px-4">
          <HorizontalGrid
            style={{
              gridTemplateColumns: `repeat(${sponsors.length}, minmax(75px, 1fr))`,
              columnGap: '1.50rem',
            }}
          >
            {renderSponsors}
          </HorizontalGrid>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
