//import Image from 'next/image'
import { Messages } from '../components/Messages'
import { Nav } from '../components/Nav'
import { Meta } from '../components/Meta'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Footer } from '../components/Footer'

import { db } from '../data/db'

const { messages, sections } = db

// Hero and main are children to the Layout. All else go into Layout.
// Each component adds the appropriate Container - X and/or Y.
export default function HomePage() {
  return (
    <>
      <Meta />
      <div className="mx-auto antialiased">
        <Messages messages={messages} />
        <Nav />
        <Hero />
        <main>
          <Section key="food" section={sections.food} horizontal />
        </main>
        <Footer />
      </div>
    </>
  )
}
