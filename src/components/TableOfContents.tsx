import { Container } from '@/components/Container'
import Image from 'next/image'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import mapcities from '@/images/colombia-limpia/map.jpg'
import mission from '@/images/colombia-limpia/mision.png'

const cities = [
  'Barranquilla',
  'Cartagena',
  'Bogotá',
  'Valledupar',
  'Cali',
  'Bucaramanga',
  'Armenia',
  'Tunja',
  'Yopal',
  'Pasto',
  'Sabana centro de Cundinamarca',
  'Medellín',
  'Ibagué',
  'Neiva',
  'Sogamoso',
  'Riohacha',
]

const tableOfContents = {
  'Donde Estamos?': {
    Barranquilla: 1,
    Cartagena: 2,
    Bogotá: 3,
    Valledupar: 4,
    Cali: 5,
    Bucaramanga: 6,
    Armenia: 7,
    Tunja: 8,
    Yopal: 9,
    Pasto: 10,
    'Sabana centro de Cundinamarca': 11,
    Medellín: 12,
    Ibagué: 13, // ✅ Ahora con tilde y comillas
    Neiva: 14,
    Sogamoso: 15,
    Riohacha: 16, // (Corrigiendo a 'Riohacha')
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
      <Container size="lg">
        <SectionHeading number="1" id="table-of-contents-title">
          Sobre Nosotros
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-[#325c89]">
          ¿Quiénes somos?
        </h2>
        <p className="mt-4 text-justify text-lg tracking-tight text-slate-700">
          En Colombia Limpia Soluciones S.A.S., somos expertos en servicios
          integrales de aseo, mantenimiento y seguridad. Nuestro equipo está
          comprometido en ofrecer soluciones personalizadas para conjuntos
          residenciales, hospitales, centros comerciales, empresas y bancos,
          siempre con la más alta calidad y eficiencia. Trabajamos
          constantemente para innovar y mejorar nuestros procesos, asegurando el
          bienestar de nuestros colaboradores y clientes.
        </p>
        <Expandable>
          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="sm:w-1/2">
              <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
                ¿Dónde estamos?
              </h3>
              <div className="flex items-center justify-center">
                <div className="mr-4 h-60 w-[3px] bg-[#325c89]" />
                <ol
                  role="list"
                  className="mt-6 grid grid-cols-2 text-base tracking-tight"
                >
                  {cities.map((city) => (
                    <li key={city} className="">
                      <span
                        className="font-medium"
                        style={{ color: '#325c89' }}
                      >
                        • {city}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="flex justify-center sm:w-1/2">
              <Image
                src={mapcities}
                alt="Ubicación"
                width={300} // Ajusta el tamaño como necesites
                height={300}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </Expandable>
        <Expandable>
          <div className="mt-24 flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="sm:w-1/2 lg:flex lg:h-full lg:flex-col lg:justify-center">
              <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
                Misión
              </h3>
              <p className="mt-4 text-justify text-lg tracking-tight text-slate-700">
                Nuestra misión es brindar servicios de aseo integral, seguridad
                y mantenimiento con un enfoque en calidad, eficiencia y precios
                competitivos. Nos destacamos por asegurar la satisfacción de
                nuestros clientes a través de soluciones efectivas, ajustadas a
                las necesidades de cada espacio.
              </p>
            </div>
            <div className="flex flex-col items-center sm:w-1/2">
              <Image
                src={mission}
                alt="Ubicación"
                width={300}
                className="rounded-t-2xl object-cover"
              />
              <div className="w-[300px] rounded-b-2xl border border-[#325c89] bg-white px-4 py-3 text-center">
                <p className="text-xl font-medium text-slate-700">
                  NUESTRO PROPOSITO
                </p>
              </div>
            </div>
          </div>
        </Expandable>
      </Container>
    </section>
  )
}
