import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import conserje from '@/images/services/conserje.jpeg'
import aseo from '@/images/services/aseo.jpeg'
import jardineria from '@/images/services/jardineria.jpeg'
import todero from '@/images/services/todero.jpeg'
import piscina from '@/images/services/piscina.jpeg'
import logistica from '@/images/services/logistica.jpeg'


const services = [
  {
    title: 'Conserjeria',
    description:
      'Ofrecemos un servicio integral de conserjería con personal\n' +
        'especializado en funciones como aseo integral, jardinería y\n' +
        'toderos, asegurando que tu empresa opere de manera\n' +
        'eficiente y segura.',
    image: conserje,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Aseo Integral',
    description:
      'Nuestro servicio de aseo integral asegura un ambiente limpio\n' +
        'y seguro para conjuntos residenciales y empresa',
    image: aseo,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Jardineria',
    description:
      'Nuestro equipo de jardinería profesional asegura áreas\n' +
        'verdes bien cuidadas y atractivas para conjuntos\n' +
        'residenciales o empresas.',
    image: jardineria,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Todero',
    description:
      'Nuestro servicio de Todero está diseñado para atender tareas\n' +
        'generales de mantenimiento y reparaciones en conjuntos\n' +
        'residenciales, oficinas y empresas.',
    image: todero,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Piscinas',
    description:
        'Aseguramos un mantenimiento impecable de las\n' +
        'piscinas en conjuntos residenciales y empresas',
    image: piscina,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Logistica',
    description:
        'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: logistica,
    runtime: { minutes: 28, seconds: 44 },
  },
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
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Servicios
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          En Colombia Limpia, ofrecemos servicios de conserjería, aseo,
          jardinería, todero, mantenimiento de piscinas y logística, adaptados a
          las necesidades de cada cliente para asegurar ambientes limpios,
          seguros y eficientes.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
              <li key={`${service.title}-${index}`} className="[counter-increment:video]">
                <Image
                    src={service.image}
                    alt=""
                    unoptimized
                    className="w-full lg:w-72 lg:h-60 object-cover rounded-3xl border-2 border-gray-600 shadow-lg"
                />
                <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 text-justify">{service.description}</p>
              </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
