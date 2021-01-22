import Image from 'next/image'

import { ContainerX } from './Container'

export const Hero = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-52 md:h-96">
        <Image
          src="/images/vineyard.jpg"
          layout="fill"
          objectFit="cover"
          alt="image of vineyard"
        />
      </div>
      <ContainerX className="absolute top-0">
        <h1 className="pt-24 text-3xl font-extrabold text-white sm:text-5xl md:text-6xl md:pt-52">
          Welcome to Salem.
        </h1>
        <p className="pt-1 italic font-bold tracking-wide text-white text-md sm:text-2xl md:text-3xl">
          "The most Oregon part of Oregon!"
        </p>
      </ContainerX>
    </div>
  )
}
