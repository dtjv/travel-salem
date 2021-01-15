//import Image from 'next/image'
import { Messages } from '../components/Messages'
import { Nav } from '../components/Nav'
import { Meta } from '../components/Meta'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Sponsors } from '../components/Sponsors'
import { Activities } from '../components/Activities'
import { Services } from '../components/Services'
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
          <Section section={sections.food} horizontal />
          <Activities section={sections.activities} />
          <Section section={sections.stay} dark />
          <Services section={sections.services} />
          <Sponsors sponsors={sections.sponsors} />
        </main>
        <Footer sections={sections} />
      </div>
    </>
  )
}
