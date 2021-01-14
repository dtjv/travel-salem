import Image from 'next/image'

import { ContainerX } from './Container'

export const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-96">
        <Image src="/images/vineyard.jpg" layout="fill" objectFit="cover" />
      </div>
      <ContainerX className="absolute top-0">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl pt-52">
          Welcome to Salem.
        </h1>
        <p className="pt-1 text-lg italic font-bold tracking-wide text-white sm:text-2xl md:text-3xl">
          "The most Oregon part of Oregon!"
        </p>
      </ContainerX>
    </div>
  )
}
