import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Desde que contratamos los servicios de Colombia Limpia, nuestras instalaciones se mantienen impecables. Su equipo es profesional, puntual y altamente capacitado. ¡Totalmente recomendados!',
      author: {
        name: 'Antonio Littel',
        role: 'Gerente de Operaciones',
        image: avatarImage3,
      },
    },
    {
      content:
        'Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.',
      author: {
        name: 'Lynn Nolan',
        role: 'Directora Administrativa',
        image: avatarImage4,
      },
    },
    {
      content:
        'Colombia Limpia ha superado nuestras expectativas. Su compromiso con la limpieza y el mantenimiento es evidente en cada detalle. Sin duda, una inversión que vale la pena',
      author: {
        name: 'Krista Prosacco',
        role: 'Directora Logistica',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'La eficiencia y calidad del servicio de Colombia Limpia han sido excepcionales. Siempre cumplen con lo prometido y dejan cada área en perfectas condiciones.',
      author: {
        name: 'Cameron Considine',
        role: 'Jefe de Operaciones',
        image: avatarImage7,
      },
    },
    {
      content:
        'No solo ofrecen limpieza, sino un servicio integral que optimiza nuestro entorno de trabajo. Con Colombia Limpia, tenemos la tranquilidad de contar con un equipo profesional y comprometido.',
      author: {
        name: 'Regina Wisoky',
        role: 'Director de Diseño',
        image: avatarImage11,
      },
    },
    {
      content:
        'Lo que más nos gusta de Colombia Limpia es su atención al cliente. Se adaptan a nuestras necesidades y nos brindan soluciones a la medida. ¡Un servicio de primera!',
      author: {
        name: 'Vernon Cummerata',
        role: 'Ingeniero UI',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Desde la primera visita, supimos que habíamos tomado la mejor decisión. Su equipo es profesional y su trabajo habla por sí solo. ¡100% recomendados!',
      author: {
        name: 'Steven Hackett',
        role: 'Contador',
        image: avatarImage5,
      },
    },
    {
      content:
        'Cada detalle cuenta, y eso lo sabe muy bien Colombia Limpia. Nos han brindado un servicio impecable que ha mejorado notablemente la imagen de nuestras instalaciones.',
      author: {
        name: 'Carla Schoen',
        role: 'CEO de Innovatech',
        image: avatarImage10,
      },
    },
    {
      content:
        'Colombia Limpia nos ha brindado tranquilidad. Su equipo es confiable y siempre cumplen con los más altos estándares de calidad. Sin duda, seguiremos trabajando con ellos.',
      author: {
        name: 'Leah Kiehn',
        role: 'Director Creativo',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({
  author,
  children,
}: {
  author: { name: string; role: string; image: ImageProps['src'] }
  children: React.ReactNode
}) {
  return (
    <figure className="rounded-4xl p-8 ring-1 shadow-md ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base/6 font-medium tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-24 border border-t">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Algunas palabras amables de los primeros clientes...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Trabajamos de la mano con un grupo selecto de clientes para
          asegurarnos de que cada detalle de nuestro servicio cumpliera con sus
          expectativas y necesidades. Aquí está lo que tienen para decir sobre
          su experiencia con nosotros.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-expanded:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
