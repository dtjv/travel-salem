import { Meta } from '../components/Meta'
import { Messages } from '../components/Messages'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Food } from '../components/Food'
import { Todo } from '../components/Todo'
import { Stay } from '../components/Stay'
import { Vendors } from '../components/Vendors'
import { Sponsors } from '../components/Sponsors'
import { Footer } from '../components/Footer'

import { data } from '../data'

const { messages, food, todo, stay, vendors, sponsors } = data.sections

export default function HomePage() {
  return (
    <>
      <Meta site={data.site} />
      <div className="mx-auto antialiased">
        <Messages messages={messages} />
        <Nav />
        <Hero />
        <main>
          <Food section={food} />
          <Todo section={todo} />
          <Stay section={stay} />
          <Vendors section={vendors} />
          <Sponsors section={sponsors} />
        </main>
        <Footer data={data} />
      </div>
    </>
  )
}
