import './globals.css'
import NavBar from '../components/NavBar.jsx'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Aleteration L&R',
  description: 'Somos un servicio profesional de alteraciones de ropa con años de experiencia en el sector. Ofrecemos una amplia variedad de servicios de costura, desde pequeñas reparaciones hasta ajustes complejos en todo tipo de prendas. Nos especializamos en arreglos de ropa para hombres, mujeres y niños. Además, ofrecemos servicios de personalización, como bordados y apliques. Contáctanos para obtener una cotización personalizada y confía en nosotros para que tus prendas queden perfectas.',
  keywords: 'arreglos de ropa, costura, alteraciones, reparaciones, ajustes, personalización, bordados, apliques, servicios, hombres, mujeres, niños, confianza.'
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
