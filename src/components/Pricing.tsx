import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import image5 from '@/images/selection/image5.jpeg'
import image3 from '@/images/selection/image3.jpeg'
import Image from "next/image";

function Plan({
  name,
  description,
  price,
  features,
  href,
  featured = false,
}: {
  name: string
  description: string
  price: string
  features: Array<string>
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem]/9',
              featured ? 'text-blue-200' : 'text-slate-500',
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'mt-1 ml-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="4" id="pricing-title">
          Beneficios
        </SectionHeading>
        <h2 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Beneficios del Proceso de Selección
        </h2>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          En Colombia Limpia SAS, garantizamos la idoneidad y motivación del
          personal mediante un riguroso proceso de selección que incluye:
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          • Reclutamiento: Identificamos y seleccionamos personal apto para
          cumplir con los perfiles requeridos por nuestros clientes.
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          • Selección Integral: Definimos candidatos idóneos a través de
          verificaciones exhaustivas, incluyendo exámenes médicos, visitas
          domiciliarias, entrevistas y pruebas psicológicas.
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          • Contratación Segura: Legalizamos la relación laboral, asegurando la afiliación a entidades de
          Seguridad Social y la firma del contrato de trabajo.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-3xl lg:px-6">
        <div className="grid grid-cols-1 gap-4 bg-slate-50 sm:px-6 sm:pb-16 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          {/*<Image*/}
          {/*    className="w-full h-60 object-contain rounded-3xl"*/}
          {/*    src={image3}*/}
          {/*    alt=""*/}
          {/*/>*/}
          <Image
              className="w-full h-60 object-contain rounded-3xl"
              src={image5}
              alt=""
          />
        </div>
      </div>

    </section>
  )
}
