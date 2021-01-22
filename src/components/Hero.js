import Image from 'next/image'

import { ContainerX } from './Container'

export const Hero = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-64 sm:h-112 md:h-120 lg:h-144 xl:h-180">
        <Image
          src="/images/vineyard.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="image of vineyard"
        />
      </div>
      <ContainerX className="absolute top-0">
        <h1 className="text-3xl font-extrabold text-white pt-36 sm:text-5xl md:text-6xl md:pt-80 lg:pt-96 xl:pt-120">
          Welcome to Salem.
        </h1>
        <p className="pt-1 italic font-bold tracking-wide text-white text-md sm:text-2xl md:text-3xl">
          "The most Oregon part of Oregon!"
        </p>
      </ContainerX>
    </div>
  )
}
