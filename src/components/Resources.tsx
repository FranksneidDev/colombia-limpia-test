import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import image1 from '@/images/selection/image0.jpeg'
import image2 from '@/images/selection/image2.jpeg'
import image3 from '@/images/selection/image3.jpeg'

const resources = [
  {
    title: 'Evaluación y selección rigurosa',
    description:
      'En Colombia Limpia, ' +
        'cada candidato pasa por un proceso de selección detallado, ' +
        'incluyendo entrevistas,' +
        ' pruebas psicológicas y verificación de referencias para garantizar personal confiable y calificado.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={image1}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )
    },
  },
  {
    title: 'Compromiso con la excelencia',
    description:
      'Seleccionamos profesionales con vocación de servicio, comprometidos con la limpieza, ' +
        'el orden y el bienestar de cada espacio donde trabajamos.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={image2}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          {/*<Image*/}
          {/*  className="relative"*/}
          {/*  src={image3}*/}
          {/*  alt=""*/}
          {/*  unoptimized*/}
          {/*/>*/}
        </div>
      )
    },
  },
  {
    title: 'Capacitación y formación continua',
    description:
      "Nuestro equipo recibe constante capacitación en normas de seguridad, técnicas de limpieza y protocolos especializados, " +
        "asegurando un servicio eficiente y de alta calidad.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={image3}
            alt=""
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-24 border border-t"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Procesos de seleccion
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Proceso de Selección Efectivo
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Colombia Limpia SAS se destaca por priorizar la contratación de
          mujeres cabezas de hogar, promoviendo la inclusión y el desarrollo
          social, mientras mantenemos un riguroso proceso de selección que
          incluye:
        </p>
        <p className="mt-2 text-lg tracking-tight text-slate-700">
          ▪ Reclutamiento: Identificamos y seleccionamos personal apto para
          cumplir con los perfiles requeridos por nuestros clientes.
        </p>
        <p className="mt-2 text-lg tracking-tight text-slate-700">
          ▪ Selección Integral: Definimos candidatos idóneos a través de
          verificaciones exhaustivas, incluyendo:
          <span className="block">✓ Exámenes médicos,</span>
          <span className="block">✓ Visitas domiciliarias,</span>
          <span className="block">✓ Entrevistas y pruebas psicológicas</span>
        </p>
        <p className="mt-2 text-lg tracking-tight text-slate-700">
          • Contratación Segura: Legalizamos la relación laboral, asegurando la
          afiliación a entidades de Seguridad Social y la firma del contrato de
          trabajo.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-96">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
