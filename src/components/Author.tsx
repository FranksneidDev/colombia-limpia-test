import Image from 'next/image'
import Link from 'next/link'
import men from '@/images/colombia-limpia/men.png'
import { Container } from '@/components/Container'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pt-8 pb-3 sm:scroll-mt-32 sm:pt-10 sm:pb-16 lg:pt-16"
    >
      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col-reverse gap-8 text-justify sm:items-start lg:flex-row lg:px-5">
          {/* Imagen abajo en móvil */}
          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                src={men}
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
              Capacitación y Desarrollo del Personal
            </h3>
            <p className="mt-4 text-lg  text-gray-900">
              En Colombia Limpia SAS, fomentamos el crecimiento y desarrollo
              profesional de nuestros colaboradores a través de:
            </p>

            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <span className="font-bold text-[#325c89]">
                    Inducción y Adaptación:
                  </span>
                  Identificamos y seleccionamos personal apto para cumplir con
                  los perfiles requeridos por nuestros clientes.
                </p>
              </li>
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <span className="font-bold text-[#325c89]">
                    Capacitación Continua:
                  </span>
                  Planeamos capacitaciones específicas para optimizar las
                  competencias requeridas para cada cargo.
                </p>
              </li>
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <span className="font-bold text-[#325c89]">
                    Evaluación de Desempeño:
                  </span>
                  Realizamos evaluaciones periódicas para medir el desarrollo de
                  competencias y garantizar un buen desempeño en cada rol.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
