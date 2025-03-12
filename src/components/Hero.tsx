import Image from 'next/image'
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
        <header className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white">
            <div className="relative w-full h-[80vw] md:h-[50vw] lg:h-[60vw] xl:h-[50vw]">
                <Image
                    className="object-cover"
                    src={colombia_limpia}
                    alt="Colombia Limpia"
                    fill
                    priority
                />
                <div className="absolute inset-0 z-10 bg-black/40"></div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center px-6 sm:px-12 lg:px-16">
                    <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4">
                        Transformando el futuro de Colombia con limpieza y sostenibilidad
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-6">
                        Conoce nuestro enfoque innovador y cómo estamos impactando positivamente el medio ambiente.
                    </p>
                    <a
                        href="#table-of-contents"
                        className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Descubre más
                    </a>
                </div>
            </div>
        </header>
    )
}
