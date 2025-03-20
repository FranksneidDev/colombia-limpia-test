import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import { SectionHeading } from '@/components/SectionHeading'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const contact = [
  {
    icon: <FaPhone className="text-white" />,
    phone: '+57 318 5865341\n' + '+57 302 3683926',
  },
  {
    icon: <FaEnvelope className="text-white" />,
    email: 'Colombialsoluciones@gmail.com',
  },
]

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
            size="lg"
            className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern
              className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:right-2 lg:left-auto lg:ml-0 xl:right-auto xl:left-2/3"/>
          {/*Primera columna*/}
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Contáctanos para recibir más información
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Déjanos tu correo y te enviaremos información detallada sobre
              nuestros servicios de limpieza y mantenimiento.
            </p>
          </div>
          {/*Segunda columna*/}
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Recibe información en tu correo electrónico{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                    type="email"
                    id="email-address"
                    required
                    aria-label="Email address"
                    placeholder="Correo electronico"
                    className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-hidden sm:py-3"
                />
                <div
                    className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl"/>
              </div>
              <Button
                  type="submit"
                  color="white"
                  className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Solicitar más detalles
              </Button>
            </div>
          </form>
          {/*tercera columna*/}
          <div className="space-y-4">
            {contact.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  {item.phone ? (
                      <div className="text-lg flex flex-col">
                        {item.phone.split("\n").map((num, i) => (
                            <span className="text-base tracking-tight text-blue-200" key={i}>{num}</span>
                        ))}
                      </div>
                  ) : (
                      <span className="text-base tracking-tight text-blue-200">{item.email}</span>
                  )}
                </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
