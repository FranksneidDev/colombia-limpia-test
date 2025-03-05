import Image from 'next/image'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import conserje from '@/images/services/conserje.png'
import aseo from '@/images/services/aseo.png'
import jardineria from '@/images/services/jardin.png'
import todero from '@/images/services/todero.png'
import piscina from '@/images/services/piscina.png'
import logistica from '@/images/services/logistic.png'
import conserge_h from '@/images/services/conserge-h.png'
import clean from '@/images/services/clean.png'
import garden from '@/images/services/garden.png'
import tod from '@/images/services/tod.png'
import pool from '@/images/services/pool.png'
import logist from '@/images/services/logist.png'
import mapcities from '@/images/colombia-limpia/map.jpg'

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
      className="scroll-mt-14 border border-t py-16 sm:scroll-mt-32 sm:py-20 lg:py-24"
    >
      <Container size="lg">
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
        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 sm:overflow-visible lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="flex w-full max-w-[100%] flex-shrink-0 flex-col items-center sm:w-full sm:max-w-none"
            >
              <div className="flex w-full flex-col overflow-hidden border-2 border-gray-300 shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  unoptimized
                  className="h-52 w-full object-cover"
                />
                <div className="bg-white py-3 text-center">
                  <h3 className="text-2xl font-light text-gray-900">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col gap-8 text-justify sm:items-start lg:flex-row lg:px-5">
          <div className="mt-10 lg:w-5xl">
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
              Conserjería
            </h3>
            <p className="mt-4 text-lg font-light text-gray-900">
              Ofrecemos un servicio integral de conserjería con personal
              especializado en funciones como aseo integral, jardinería y
              toderos, asegurando que tu empresa opere de manera eficiente y
              segura. Nuestro servicio incluye:
            </p>

            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Selección de Personal Especializado:
                  </strong>{' '}
                  Análisis riguroso de antecedentes para garantizar la mejor
                  elección.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Protocolos de Bioseguridad:
                  </strong>{' '}
                  Implementamos estrictas medidas de higiene para proteger a
                  todos.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Supervisión Continua::
                  </strong>{' '}
                  Supervisores y coordinadores en cada área, junto con
                  capacitación constante.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Compromiso con la Calidad:
                  </strong>{' '}
                  Reacción inmediata y visitas programadas para un servicio
                  óptimo.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="hidden h-auto w-1 bg-gray-300 lg:block"></div>
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                src={conserge_h}
                alt="Ubicación"
                unoptimized
                width={350}
                height={350}
                className="h-auto w-full object-cover"
              />
              <div className="w-full bg-white px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-gray-900">
                  NUESTRO PROPÓSITO
                </h2>
                <p className="text-sm text-gray-800">CONSERJERÍA</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col-reverse gap-8 text-justify sm:items-start lg:flex-row lg:px-5">

          {/* Imagen abajo en móvil */}
          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                  src={clean}
                  alt="Ubicación"
                  unoptimized
                  width={350}
                  height={350}
                  className="h-auto w-full object-cover"
              />
              <div className="w-full bg-white px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-gray-900">
                  NUESTRO PROPÓSITO
                </h2>
                <p className="text-sm text-gray-800">ASEO INTEGRAL</p>
              </div>
            </div>
            <div className="hidden h-auto w-1 bg-gray-300 lg:block"></div>
          </div>

          {/* Texto arriba en móvil */}
          <div className="lg:mt-10 lg:w-5xl">
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
              Aseo Integral
            </h3>
            <p className="mt-4 text-lg font-light text-gray-900">
              Nuestro servicio de aseo integral asegura un ambiente limpio y
              seguro para conjuntos residenciales y empresas.
            </p>

            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Selección de Personal:
                  </strong>{' '}
                  Proceso riguroso con revisión de antecedentes, pruebas de
                  polígrafo y entrevistas psicológicas.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Capacitación Continua:
                  </strong>{' '}
                  Formación constante en seguridad, salud y servicio al cliente.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Supervisión y Monitoreo:
                  </strong>{' '}
                  Supervisores dedicados que garantizan el control de horarios y
                  cumplimiento de tareas.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Reacción Inmediata y Visitas Programadas:
                  </strong>{' '}
                  Adaptadas a tus necesidades específicas. Confía en nuestro
                  equipo para mantener tu empresa impecable y en óptimas
                  condiciones operativas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col gap-8 text-justify sm:items-start lg:flex-row lg:px-5">
          <div className="mt-10 lg:w-5xl">
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
              Jardinería
            </h3>
            <p className="mt-4 text-lg font-light text-gray-900">
              Nuestro equipo de jardinería profesional asegura áreas verdes bien
              cuidadas y atractivas para conjuntos residenciales o empresas.
              Ofrecemos:
            </p>

            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Mantenimiento Integral:
                  </strong>{' '}
                  Incluye podas, siembras, fertilización y limpieza de jardines.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Supervisión Continua:
                  </strong>{' '}
                  Monitoreo constante para asegurar estándares de calidad y la
                  belleza de cada espacio verde.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Personal Calificado:
                  </strong>{' '}
                  Selección rigurosa de jardineros y capacitación en manejo
                  adecuado de plantas y herramientas.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="hidden h-auto w-1 bg-gray-300 lg:block"></div>
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                src={garden}
                alt="Ubicación"
                unoptimized
                width={350}
                height={350}
                className="h-auto w-full object-cover"
              />
              <div className="w-full bg-white px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-gray-900">
                  CALIDAD HUMANA
                </h2>
                <p className="text-sm text-gray-800">JARDINERIA</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col-reverse gap-8 text-justify sm:items-start lg:flex-row lg:px-5">
          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                  src={tod}
                  alt="Ubicación"
                  unoptimized
                  width={350}
                  height={350}
                  className="h-auto w-full object-cover"
              />
              <div className="w-full bg-white px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-gray-900">
                  EFICIENCIA DIARIA
                </h2>
                <p className="text-sm text-gray-800">CONSERJERÍA</p>
              </div>
            </div>
            <div className="hidden h-auto w-1 bg-gray-300 lg:block"></div>
          </div>

          <div className="mt-10 lg:w-5xl">
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
              Todero
            </h3>
            <p className="mt-4 text-lg font-light text-gray-900">
              Nuestro servicio de Todero está diseñado para atender tareas
              generales de mantenimiento y reparaciones en conjuntos
              residenciales, oficinas y empresas. Ofrecemos:
            </p>

            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Tareas de mantenimiento menor:
                  </strong>{' '}
                  Ajustes eléctricos, plomería básica, pintura, limpieza de
                  canales y reparaciones en general.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Atención inmediata:
                  </strong>{' '}
                  Respuesta rápida para emergencias menores.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Supervisión constante:
                  </strong>{' '}
                  Garantizamos que las tareas se realicen de manera eficiente y
                  segura.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Reacción Inmediata y Visitas Programadas:
                  </strong>{' '}
                  Adaptadas a tus necesidades específicas. Confía en nuestro
                  equipo para mantener tu empresa impecable y en óptimas
                  condiciones operativas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col gap-8 text-justify sm:items-start lg:flex-row lg:px-5">
          <div className="mt-10 lg:w-5xl">
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
              Piscinas
            </h3>
            <p className="mt-4 text-lg font-light text-gray-900">
              Aseguramos un mantenimiento impecable de las piscinas en conjuntos
              residenciales y empresas.
            </p>
            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Control de Calidad del Agua:
                  </strong>{' '}
                  Revisiones y ajustes para mantener el agua en perfecto estado.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Limpieza y Desinfección:
                  </strong>{' '}
                  Proceso exhaustivo para garantizar espacios seguros.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Supervisión y Revisión Técnica:
                  </strong>{' '}
                  Control de estado de bombas, filtros y otros equipos.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Cumplimiento Normativo:
                  </strong>{' '}
                  Protocolos alineados con las normas de seguridad e higiene.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="hidden h-auto w-1 bg-gray-300 lg:block"></div>
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                src={pool}
                alt="Ubicación"
                unoptimized
                width={350}
                height={350}
                className="h-auto w-full object-cover"
              />
              <div className="w-full bg-white px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-gray-900">
                  CALIDAD
                </h2>
                <p className="text-sm text-gray-800">PISCINAS</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container size="lg" className="mt-16">
        <div className="mt-16 flex flex-col-reverse gap-8 text-justify sm:items-start lg:flex-row lg:flex-row lg:px-5">
          {/* Imagen a la izquierda */}
          <div className="flex w-full justify-center gap-10 lg:w-1/2">
            <div className="flex w-full max-w-[350px] flex-col items-center overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                  src={logist}
                  alt="Logística"
                  unoptimized
                  width={350}
                  height={350}
                  className="h-auto w-full object-cover"
              />
              <div className="w-full bg-white px-4 py-3 text-left">
                <h2 className="text-base font-semibold text-gray-900">
                  EFICIENCIA ASEGURADA
                </h2>
                <p className="text-sm text-gray-800">LOGÍSTICA</p>
              </div>
            </div>
            <div className="hidden h-auto w-1 bg-gray-300 lg:block"></div>
          </div>

          {/* Texto a la derecha */}
          <div className="lg:mt-10 lg:w-5xl">
            <h3 className="font-display text-4xl font-bold tracking-tight text-[#325c89]">
              Logística
            </h3>
            <p className="mt-4 text-lg font-light text-gray-900">
              Ofrecemos un servicio de logística eficiente adaptado a tus necesidades.
            </p>

            <ul className="mt-10 space-y-3 text-base text-gray-900">
              <li className="mt-10 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Selección y Evaluación de Personal:
                  </strong>{' '}
                  Análisis exhaustivo de antecedentes y pruebas de polígrafo.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Elección Personalizada:
                  </strong>{' '}
                  Tú decides quién forma parte de tu equipo.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Supervisión y Capacitación:
                  </strong>{' '}
                  Control de horarios y cumplimiento garantizados.
                </p>
              </li>
              <li className="mt-5 flex items-start">
                <span className="mr-2 text-[#325c89]">•</span>
                <p>
                  <strong className="text-[#325c89]">
                    Compromiso con la Seguridad:
                  </strong>{' '}
                  Protocolos de bioseguridad y asesorías en seguridad adaptadas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
