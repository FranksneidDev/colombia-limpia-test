import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Donde Estamos?': {
    'Barranquilla': 1,
    'Cartagena': 2,
    'Bogotá': 3,
    'Valledupar': 4,
    'Cali': 5,
    'Bucaramanga': 6,
    'Armenia': 7,
    'Tunja': 8,
    'Yopal': 9,
    'Pasto': 10,
    'Sabana centro de Cundinamarca': 11,
    'Medellín': 12,
    'Ibagué': 13,  // ✅ Ahora con tilde y comillas
    'Neiva': 14,
    'Sogamoso': 15,
    'Riohacha': 16, // (Corrigiendo a 'Riohacha')
  },
  // Fundamentals: {
  //   'Barranquilla': 21,
  //   'End points': 22,
  //   'Bezier curves': 26,
  //   'Designing on a grid': 31,
  //   'Vector shapes': 45,
  // },
  // 'Boolean operations': {
  //   'Combining shapes': 50,
  //   'Subtracting shapes': 57,
  //   'Intersecting shapes': 66,
  //   Flattening: 78,
  // },
  // 'Optimizing for production': {
  //   'Preparing for SVG': 82,
  //   'Configuring your export settings': 88,
  //   'Minifying and removing metadata': 95,
  // },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Sobre Nosotros
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          ¿Quiénes somos?
        </h2>
        <p className="mt-4 text-lg text-justify tracking-tight text-slate-700">
          En Colombia Limpia Soluciones S.A.S., somos
          expertos en servicios integrales de aseo,
          mantenimiento y seguridad. Nuestro equipo
          está comprometido en ofrecer soluciones
          personalizadas para conjuntos residenciales,
          hospitales, centros comerciales, empresas y
          bancos, siempre con la más alta calidad y
          eficiencia.
          Trabajamos constantemente para innovar y
          mejorar nuestros procesos, asegurando el
          bienestar de nuestros colaboradores y clientes.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                  <li key={title}>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                      {title}
                    </h3>
                    <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                    >
                      {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                              key={title}
                              className="flex justify-between py-3"
                              aria-label={`${title} on page ${pageNumber}`}
                          >
                        <span
                            className="font-medium text-slate-900"
                            aria-hidden="true"
                        >
                          • {title}
                        </span>
                            <span
                                className="font-mono text-slate-400"
                                aria-hidden="true"
                            >
                          {pageNumber}
                        </span>
                          </li>
                      ))}
                    </ol>
                  </li>
              ))}
            </ExpandableItems>
          </ol>
          {/*<ExpandableButton>See more</ExpandableButton>*/}
        </Expandable>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Misión
        </h2>
        <p className="mt-4 text-lg text-justify tracking-tight text-slate-700">
          Nuestra misión es brindar servicios de aseo integral,
          seguridad y mantenimiento con un enfoque en
          calidad, eficiencia y precios competitivos. Nos
          destacamos por asegurar la satisfacción de nuestros
          clientes a través de soluciones efectivas, ajustadas a las
          necesidades de cada espacio.
        </p>
      </Container>
    </section>
  )
}
