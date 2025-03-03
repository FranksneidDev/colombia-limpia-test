import Image from 'next/image'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import colombia_limpia from '@/images/presentation/Colombia Limpia SAS_page-0001.jpg'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          “This method of designing icons is genius. I wish I had known this
          method a lot sooner.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          Stacey Solomon
        </strong>
        , Founder at Retail Park
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
      <header className="overflow-hidden bg-slate-100 lg:bg-transparent">
        <div className="relative md:w-full h-[55vw] md:h-[50vw] lg:h-[55vw] xl:h-[48vw] ">
          <Image
              className="object-cover"
              src={colombia_limpia}
              alt="Colombia Limpia"
              fill
              priority
          />
          {/* Fondo decorativo opcional */}
          <div className="absolute inset-0 z-10 bg-black/20"></div>
        </div>
      </header>
  )
}
