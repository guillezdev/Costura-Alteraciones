import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-stone-950 text-stone-50 py-12">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Contacto</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center mb-4 md:mb-0 md:mr-4">
            <FaPhoneAlt className="text-gray-50 mr-2" />
            <span>{`+1 (786) 823-9937`}</span>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="text-gray-50 mr-2" />
            <span>Tamiami/Westchester, Miami, EE.UU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;