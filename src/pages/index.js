import { useState } from 'react'

import { Meta } from '../components/Meta'
import { Messages } from '../components/Messages'
import { Nav } from '../components/Nav'
import { Menu } from '../components/Menu'
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
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Meta site={data.site} />
      <Menu data={data} showMenu={showMenu} onClick={setShowMenu} />
      <div className={`mx-auto antialiased ${showMenu ? 'fixed' : ''}`}>
        <Messages messages={messages} />
        <Nav data={data} onClick={setShowMenu} />
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
