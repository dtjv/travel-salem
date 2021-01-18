import Link from 'next/link'
import { ContainerX } from './Container'

export const Messages = ({ messages }) => {
  const renderMessages = messages.map((msg) => (
    <li key={msg.id}>
      <ContainerX>
        <Link href="/">
          <a className="text-sm text-white underline">{msg.message}</a>
        </Link>
      </ContainerX>
    </li>
  ))

  if (!renderMessages.length) return null
  return (
    <ul className="py-4 text-center bg-black space-y-2">{renderMessages}</ul>
  )
}
