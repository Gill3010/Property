
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-md border-t border-white/10 text-white">
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-10 w-6 h-6 border border-purple-400/20 transform rotate-45" />
        <div className="absolute bottom-6 right-16 w-4 h-4 border border-blue-400/20 rounded-full" />
        <div className="absolute top-10 right-10 w-3 h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            RelaticProtect
          </h2>
          <p className="text-gray-300 text-sm">
            Protegemos tu creatividad. Especialistas en propiedad intelectual: marcas, patentes y derechos de autor.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wide">Contacto</h3>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <MapPin className="w-4 h-4 text-purple-300" />
            <span>Panamá, Ciudad de Panamá</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <Phone className="w-4 h-4 text-purple-300" />
            <span>+507 6645-7685 | +507 208-4689</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <Mail className="w-4 h-4 text-purple-300" />
            <span>administracion@relaticpanama.org</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wide">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 hover:scale-110 transition-all duration-300">
              <Facebook className="w-5 h-5 text-purple-300" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 hover:scale-110 transition-all duration-300">
              <Twitter className="w-5 h-5 text-purple-300" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-purple-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400 relative z-10">
        © {new Date().getFullYear()} RelaticProtect. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;