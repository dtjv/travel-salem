import Link from 'next/link'

export const Section = ({ section }) => {
  return (
    <li className="space-y-5">
      <p className="font-semibold text-gray-900 uppercase">{section.name}</p>
      <ul className="text-gray-500 space-y-4">
        {section.links.map((link, idx) => (
          <li key={idx}>
            <Link href="/">
              <a
                aria-label={`link to ${link.name}`}
                className="hover:underline"
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
