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
    title: 'Getting started with Figma',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image: conserje,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Setting up your artboard',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image: aseo,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Designing your first icon',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image: jardineria,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Advanced design techniques',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: todero,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Advanced design techniques',
    description:
        'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: piscina,
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Advanced design techniques',
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
          {services.map((service) => (
            <li key={service.title} className="[counter-increment:video]">
              <div className="relative flex h-60 items-center justify-center rounded-2xl px-6 shadow-lg"
                // style={{
                //   backgroundImage:
                //     'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                // }}
              >
                <div className="flex overflow-hidden rounded-2xl border-2 border-black">
                  <Image src={service.image} alt="" unoptimized />
                </div>
                {/*<div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur-sm">*/}
                {/*  <PlayIcon className="h-4 w-4 fill-current stroke-current" />*/}
                {/*  <time*/}
                {/*    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}*/}
                {/*    className="ml-2"*/}
                {/*  >*/}
                {/*    {`${video.runtime.minutes}:${video.runtime.seconds*/}
                {/*      .toString()*/}
                {/*      .padStart(2, '0')}`}*/}
                {/*  </time>*/}
                {/*</div>*/}
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
