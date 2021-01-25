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
          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-orange-200 to-orange-500">
            <div>
              <h3 className="mb-4 text-2xl font-bold">About Salem</h3>
              <p className="max-w-full prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <Link href="/">
              <a className="block mt-4 font-medium text-black no-underline hover:text-gray-600">
                Learn more -&gt;
              </a>
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-green-200 to-green-500">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Events</h3>
              <p className="max-w-full prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Link href="/">
              <a className="block mt-4 font-medium text-black no-underline hover:text-gray-600">
                Find an event -&gt;
              </a>
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-cyan-200 to-cyan-500">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Plan a trip</h3>
              <p className="max-w-full prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
            <Link href="/">
              <a className="block mt-4 font-medium text-black no-underline hover:text-gray-600">
                Get started -&gt;
              </a>
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-gradient-to-br from-amber-200 to-amber-500">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Our Blog</h3>
              <p className="max-w-full prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in.
              </p>
            </div>
            <Link href="/">
              <a className="block mt-4 font-medium text-black no-underline hover:text-gray-600">
                Read more -&gt;
              </a>
            </Link>
          </div>
        </div>
      </ContainerY>
    </ContainerX>
  )
}
