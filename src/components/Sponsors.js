import Link from 'next/link'
import Image from 'next/image'

import { ContainerX, ContainerY } from './Container'
import { HorizontalGrid } from './Grid'

export const Sponsors = ({ sponsors }) => {
  const renderSponsors = sponsors.map((sponsor, idx) => (
    <li key={idx}>
      <Link href={sponsor.url} target="_blank">
        <a>
          <Image
            src={`/images/logos/${sponsor.logo}`}
            layout="responsive"
            width="500"
            height="500"
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
          {/*
          <svg
            className="w-40 h-40 font-bold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          */}
        </div>
      </ContainerY>
    </ContainerX>
  )
}
