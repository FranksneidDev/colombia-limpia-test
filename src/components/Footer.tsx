import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pt-14 sm:pb-24">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-lg text-slate-600">
          <p>Copyright &copy; {new Date().getFullYear()} Desarrollado por{' '}
              <a href="https://knot.com.co" target="_blank" rel="noopener noreferrer"
                 className="text-blue-500 hover:underline">
                  Knot
              </a>
          </p>
          <p>Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
