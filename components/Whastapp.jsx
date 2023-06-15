
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/NUMERODETELEFONO" // Reemplaza con tu número de teléfono
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg z-10"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={50} />
    </a>
  );
};

export default WhatsAppButton;