import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import image1 from '@/images/selection/image0.jpeg'
import image2 from '@/images/selection/image2.jpeg'
import image3 from '@/images/selection/image3.jpeg'
import sectionprocess from '@/images/colombia-limpia/sectionprocess.png'

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
      'Nuestro equipo recibe constante capacitación en normas de seguridad, técnicas de limpieza y protocolos especializados, ' +
      'asegurando un servicio eficiente y de alta calidad.',
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
      className="scroll-mt-14 border border-t py-16 sm:scroll-mt-32 sm:py-20 lg:py-24"
    >
      <Container size="lg">
        <SectionHeading number="3" id="resources-title">
          Procesos de seleccion
        </SectionHeading>
        <Container size="lg" className="mt-16">
          <div className="mt-16 flex flex-col-reverse gap-8 text-justify sm:items-start lg:flex-row lg:px-5">
            {/* Imagen abajo en móvil */}
            <div className="flex w-full justify-center gap-10 lg:w-1/2">
              <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
                <Image
                  src={sectionprocess}
                  alt="Ubicación"
                  unoptimized
                  width={350}
                  height={350}
                  className="h-auto w-full object-cover"
                />
                <div className="w-full bg-white px-4 py-3 text-left">
                  <h2 className="text-center text-base font-semibold text-gray-900">
                    TU SOLUCIÓN IDEAL
                  </h2>
                </div>
              </div>
            </div>

            {/* Texto arriba en móvil */}
            <div className="lg:mt-10 lg:w-5xl">
              <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
                Proceso de Selección Efectivo
              </h3>
              <p className="mt-4 text-lg font-light text-gray-900">
                Colombia Limpia SAS se destaca por priorizar la contratación de
                mujeres cabezas de hogar, promoviendo la inclusión y el
                desarrollo social, mientras mantenemos un riguroso proceso de
                selección que incluye:
              </p>

              <ul className="mt-10 space-y-3 text-base text-gray-900">
                <li className="mt-10 flex items-start">
                  <span className="mr-2 text-[#325c89]">•</span>
                  <p>
                    Reclutamiento: Identificamos y seleccionamos personal apto
                    para cumplir con los perfiles requeridos por nuestros
                    clientes.
                  </p>
                </li>
                <li className="mt-5 flex items-start">
                  <span className="mr-2 text-[#325c89]">•</span>
                  <div>
                    <p>
                      Selección Integral: Definimos candidatos idóneos a través
                      de verificaciones exhaustivas, incluyendo:
                    </p>
                    <ul className="mt-2 space-y-1 pl-4">
                      <li>✓ Exámenes médicos,</li>
                      <li>✓ Visitas domiciliarias,</li>
                      <li>✓ Entrevistas y pruebas psicológicas,</li>
                    </ul>
                  </div>
                </li>
                <li className="mt-5 flex items-start">
                  <span className="mr-2 text-[#325c89]">•</span>
                  <p>
                    Contratación Segura: Legalizamos la relación laboral,
                    asegurando la afiliación a entidades de Seguridad Social y
                    la firma del contrato de trabajo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  )
}
