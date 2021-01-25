import Link from 'next/link'
import { ContainerX, ContainerY } from './Container'

export const Intro = () => {
  return (
    <ContainerX>
      <ContainerY>
        <div className="max-w-full text-gray-500 text-md prose">
          <p>
            <span className="text-xl font-medium">Salem</span> is home of the
            Oregon State Capitol, its urban downtown full of lively shops,
            restaurants, museums, and attractions. It is also at the heart of
            one of the most agriculturally productive regions in the world.
            You'll find some of Oregon’s tastiest berries, hazelnuts, honeys,
            cheeses, and handcrafted artisan products from chocolates and jams
            to ciders and blended spirits.
          </p>
          <p>
            Whatever you're looking for, you're likely to find it in Salem. For
            more information, requests a{' '}
            <Link href="/">
              <a>Visitor's Guide</a>
            </Link>
            .
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center px-5 py-3 text-black rounded-lg ring-1 ring-black hover:bg-gray-200">
              Explore Salem
            </button>
            <button className="flex items-center justify-center px-5 py-3 text-black rounded-lg ring-1 ring-black hover:bg-gray-200">
              Plan your trip
            </button>
          </div>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
