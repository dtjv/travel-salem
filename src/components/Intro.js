import Link from 'next/link'
import { ContainerX, ContainerY } from './Container'

export const Intro = () => {
  return (
    <ContainerX>
      <ContainerY>
        <div className="max-w-full prose">
          <p className="md:text-lg">
            <span className="text-xl font-medium">
              At the center of the Willamette Valley, Salem Oregon
            </span>{' '}
            is home of the Oregon State Capitol, its urban downtown full of
            lively shops, restaurants, museums, and attractions. It is also at
            the heart of one of the most agriculturally productive regions in
            the world. You'll find some of Oregon’s tastiest berries, hazelnuts,
            honeys, cheeses, and handcrafted artisan products from chocolates
            and jams to ciders and blended spirits.
          </p>
          <p className="md:text-lg">
            Whatever you're looking for, you're likely to find it in Salem. For
            more information, please request a{' '}
            <Link href="/">
              <a>Visitor's Guide</a>
            </Link>
            .
          </p>
        </div>
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-6 xl:grid-cols-4">
          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600">
            <div>
              <p className="mb-4 text-2xl font-bold text-white">About Salem</p>
              <p className="max-w-full text-white prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div>
              <Link href="/">
                <a className="inline-flex items-center justify-center px-4 py-2 mt-4 font-semibold text-white bg-orange-800 rounded-lg bg-opacity-50 hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90">
                  Learn more
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-green-400 to-green-600">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Events</h3>
              <p className="max-w-full text-white prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <Link href="/">
                <a className="inline-flex items-center justify-center px-4 py-2 mt-4 font-semibold text-white bg-green-800 rounded-lg bg-opacity-50 hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90">
                  Find an event
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Plan a trip
              </h3>
              <p className="max-w-full text-white prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <Link href="/">
                <a className="inline-flex items-center justify-center px-4 py-2 mt-4 font-semibold text-white rounded-lg bg-cyan-800 bg-opacity-50 hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90">
                  Get started
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Our Blog</h3>
              <p className="max-w-full text-white prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in.
              </p>
            </div>
            <div>
              <Link href="/">
                <a className="inline-flex items-center justify-center px-4 py-2 mt-4 font-semibold text-white rounded-lg bg-amber-800 bg-opacity-50 hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90">
                  Read more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
