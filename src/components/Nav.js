import Link from 'next/link'
import Image from 'next/image'

import { ContainerX } from './Container'

//<a className="text-lg font-semibold tracking-wide">travelsalem</a>
export const Nav = () => (
  <nav>
    <div className="py-3">
      <ContainerX className="flex items-center justify-between">
        <div className="flex">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.jpg"
                width="55"
                height="55"
                className="rounded-full"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="hidden bg-gray-100 border-gray-300 sm:block rounded-md focus:border-black focus:ring-0"
            placeholder="Search"
          />
          <Link href="/">
            <a className="font-medium text-gray-500 hover:text-blue-600">
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className="font-medium text-gray-500 hover:text-blue-600">
              About
            </a>
          </Link>
        </div>
      </ContainerX>
    </div>
  </nav>
)
