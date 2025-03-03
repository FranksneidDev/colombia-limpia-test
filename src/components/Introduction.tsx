import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “En Colombia Limpia Soluciones S.A.S. nos especializamos en ofrecer
          servicios integrales de aseo, mantenimiento y seguridad para empresas,
          conjuntos residenciales, hospitales, centros comerciales y entidades
          bancarias.
        </p>
        <p className="mt-4">
          Nuestro equipo trabaja con un enfoque en la calidad, la eficiencia y
          la innovación, desarrollando soluciones personalizadas que garantizan
          espacios limpios, seguros y funcionales.
        </p>
        <p className="mt-4">
          Creemos que un entorno bien cuidado marca la diferencia, por eso cada
          proyecto es una oportunidad para superar las expectativas de nuestros
          clientes y asegurar el bienestar de todos los que lo habitan.
        </p>
        <p className="mt-4">
          Con procesos optimizados, precios competitivos y un compromiso
          constante con la mejora continua, somos aliados estratégicos para
          quienes buscan excelencia en cada detalle.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Servicios de aseo integral adaptados a cada tipo de espacio',
            'Mantenimiento preventivo y correctivo para garantizar funcionalidad',
            'Soluciones de seguridad enfocadas en la protección de personas y bienes',
            'Personal capacitado y procesos certificados de alta calidad',
            'Innovación constante para optimizar resultados y reducir costos',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Al confiar en nosotros, tendrás la tranquilidad de contar con un
          equipo experto, procesos eficientes y soluciones integrales que
          garantizan espacios impecables, seguros y listos para brindar la mejor
          experiencia a todos quienes los disfrutan.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-[#325c89] hover:text-blue-800"
          >
            Solicita tu cotización gratuita. Mejora tus espacios hoy{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
