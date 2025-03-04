import Image from 'next/image'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import conserje from '@/images/services/conserje.png'
import aseo from '@/images/services/aseo.png'
import jardineria from '@/images/services/jardin.png'
import todero from '@/images/services/todero.png'
import piscina from '@/images/services/piscina.png'
import logistica from '@/images/services/logistic.png'


const services = [
  {
    title: 'Conserjería',
    description:
      'Ofrecemos un servicio integral de conserjería con personal\n' +
        'especializado en funciones como aseo integral, jardinería y\n' +
        'toderos, asegurando que tu empresa opere de manera\n' +
        'eficiente y segura.',
    image: conserje,
  },
  {
    title: 'Aseo Integral',
    description:
      'Nuestro servicio de aseo integral asegura un ambiente limpio\n' +
        'y seguro para conjuntos residenciales y empresa',
    image: aseo,
  },
  {
    title: 'Jardinería',
    description:
      'Nuestro equipo de jardinería profesional asegura áreas\n' +
        'verdes bien cuidadas y atractivas para conjuntos\n' +
        'residenciales o empresas.',
    image: jardineria,
  },
  {
    title: 'Todero',
    description:
      'Nuestro servicio de Todero está diseñado para atender tareas\n' +
        'generales de mantenimiento y reparaciones en conjuntos\n' +
        'residenciales, oficinas y empresas.',
    image: todero,
  },
  {
    title: 'Piscinas',
    description:
        'Aseguramos un mantenimiento impecable de las\n' +
        'piscinas en conjuntos residenciales y empresas',
    image: piscina,
  },
  {
    title: 'Logística',
    description:
        'Brindamos soluciones logísticas eficientes para la recepción, ' +
        'de correspondencia, ' +
        'paquetería y otros recursos dentro de conjuntos residenciales, oficinas y empresas.',
    image: logistica,
  }

]

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-24 border border-t"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Servicios
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-light tracking-tight text-[#325c89]">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          En Colombia Limpia, ofrecemos servicios de conserjería, aseo,
          jardinería, todero, mantenimiento de piscinas y logística, adaptados a
          las necesidades de cada cliente para asegurar ambientes limpios,
          seguros y eficientes.
        </p>
      </Container>
      <Container size="md" className="mt-16">
        <div className="flex overflow-x-auto pb-4 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 sm:gap-y-10 sm:overflow-visible">
          {services.map((service, index) => (
              <div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-full max-w-[100%] flex flex-col items-center sm:w-full sm:max-w-none"
              >
                <div className="w-full flex flex-col border-2 border-gray-600 shadow-lg overflow-hidden rounded-3xl">
                  <Image
                      src={service.image}
                      alt={service.title}
                      unoptimized
                      className="w-full h-52 object-cover"
                  />
                  <div className="bg-white py-3 text-center">
                    <h3 className="text-2xl font-light text-gray-900">{service.title}</h3>
                  </div>
                </div>
                <div className="bg-white px-4 pb-4">
                  <p className="mt-2 text-base text-gray-700 text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </Container>



    </section>
  )
}
