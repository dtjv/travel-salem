import Link from 'next/link'
import { ContainerX, ContainerY } from './Container'

export const Intro = () => {
  return (
    <ContainerX>
      <ContainerY>
        <div className="max-w-full text-gray-500 text-md prose">
          <p>
            <span className="text-xl font-medium">
              At the center of the Willamette Valley, Salem Oregon
            </span>{' '}
            is home of the Oregon State Capitol, its urban downtown full of
            lively shops, restaurants, museums, and attractions. Salem is also
            smack-dab in the heart of one of the most agriculturally productive
            regions in the world. Namely, you'll find some of Oregon’s tastiest
            berries, hazelnuts, honeys, cheeses, and handcrafted artisan
            products from chocolates and jams to ciders and blended spirits.
          </p>
          <p>
            Whatever you're looking for, you're likely to find it in Salem. For
            more information, requests a{' '}
            <Link href="/">
              <a>Vistor's Guide</a>
            </Link>
            .
          </p>
          <div>
            <button className="flex items-center justify-center px-5 py-3 text-black rounded-lg ring-1 ring-black hover:bg-gray-200">
              Plan your trip
            </button>
          </div>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
