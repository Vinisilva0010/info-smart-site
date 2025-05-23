import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones para abrir/fechar menu
import Button from '../components/ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-white font-bold text-2xl">InfoSmart</div>

        {/* Ícone do menu para telas pequenas */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Menu de navegação (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="agents"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Agentes
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            Contato
          </Link>
          <Button className="bg-teal-500 px-6 py-2 text-lg rounded-full text-white hover:bg-teal-600">
            Fale Conosco
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-4 space-y-4 md:hidden">
            <Link
              to="agents"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              Agentes
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              Contato
            </Link>
            <Button onClick={closeMenu} className="bg-teal-500 px-6 py-2 text-lg rounded-full text-white hover:bg-teal-600">
              Fale Conosco
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
