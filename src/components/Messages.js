import Link from 'next/link'

import { ContainerX } from './Container'

export const Messages = ({ messages }) => {
  if (!messages.length) return null

  const renderMessages = messages.map((msg, idx) => (
    <li key={idx}>
      <ContainerX>
        <Link href="/">
          <a className="text-sm text-white underline">{msg.message}</a>
        </Link>
      </ContainerX>
    </li>
  ))

  return (
    <ul className="py-4 text-center bg-black space-y-2">{renderMessages}</ul>
  )
}
