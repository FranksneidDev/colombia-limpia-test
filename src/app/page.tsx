import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      {/*<Testimonial*/}
      {/*  id="testimonial-from-tommy-stroman"*/}
      {/*  author={{*/}
      {/*    name: 'Alex Stroman',*/}
      {/*    role: 'Gerente de operaciones',*/}
      {/*    image: avatarImage1,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    “No sabía nada sobre gestión de aseo y mantenimiento hasta que conocí*/}
      {/*    los servicios de Colombia Limpia. Ahora, nuestra empresa disfruta de*/}
      {/*    un entorno más limpio y seguro gracias a su eficiencia y compromiso.*/}
      {/*    ¡Un recurso invaluable!”*/}
      {/*  </p>*/}
      {/*</Testimonial>*/}
      <Screencasts />
      {/*<Testimonial*/}
      {/*  id="testimonial-from-gerardo-stark"*/}
      {/*  author={{*/}
      {/*    name: 'Gerardo Rodriguez',*/}
      {/*    role: 'Coordinador Logistico',*/}
      {/*    image: avatarImage2,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p>*/}
      {/*    “Había intentado manejar el mantenimiento por mi cuenta, pero siempre*/}
      {/*    surgían problemas. Desde que contamos con los servicios de Colombia*/}
      {/*    Limpia, todo funciona de manera más eficiente y sin contratiempos. Su*/}
      {/*    profesionalismo ha hecho una gran diferencia en nuestro entorno.”*/}
      {/*  </p>*/}
      {/*</Testimonial>*/}
      <Resources />
      <Pricing />
      <Testimonials />
      <Author />
      <FreeChapters />
      <Footer />
    </>
  )
}
