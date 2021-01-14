import Link from 'next/link'
import { ContainerX } from './Container'

export const Messages = ({ messages }) => {
  const renderMessages = messages.map((msg) => (
    <ContainerX key={msg.id}>
      <Link href="/">
        <a className="text-sm text-white underline">
          <li>{msg.message}</li>
        </a>
      </Link>
    </ContainerX>
  ))

  if (!renderMessages.length) return null
  return (
    <ul className="py-4 text-center bg-black space-y-2">{renderMessages}</ul>
  )
}
