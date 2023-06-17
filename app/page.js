import Abaut from "@/components/Abaut";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Testimonials />
      <Abaut />
      <Contact />
    </>
  );
}
