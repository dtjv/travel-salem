import Link from 'next/link'

export const Section = ({ section, showMenu, onClick }) => {
  //
  // TODO:
  // this is a temp fix for demo purposes only. i want the menu links to close
  // the menu modal. if the destination page were valid, this would work;
  // however, destination pages don't exist in the demo, so i need to force the
  // menu links to close the modal directly.
  const MenuLinks = () => (
    <li className="space-y-5">
      <p className="font-semibold text-gray-900 uppercase">{section.name}</p>
      <ul className="text-gray-500 space-y-4">
        {section.links.map((link, idx) => (
          <li key={idx}>
            <p
              className="cursor-pointer hover:underline"
              onClick={() => onClick((prevState) => !prevState)}
            >
              {link.name}
            </p>
          </li>
        ))}
      </ul>
    </li>
  )

  const FooterLinks = () => (
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

  return showMenu ? <MenuLinks /> : <FooterLinks />
}
