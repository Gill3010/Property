import { MapPin } from 'lucide-react';

const GeographicalIndicationCard = () => {
  return (
    <div className="relative w-full max-w-md bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8">
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-6 w-6 h-6 border border-purple-400/20 transform rotate-45" />
        <div className="absolute bottom-6 right-8 w-5 h-5 border border-blue-400/20 rounded-full" />
        <div className="absolute top-2 right-10 w-3 h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20 transform rotate-12" />
      </div>

      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Denominación de Origen
          </h2>
          <p className="text-sm text-gray-300 tracking-wide">
            Acompañamos asociaciones, cooperativas o autoridades regionales a proteger productos ligados a un origen geográfico.
          </p>
        </div>
      </div>

      {/* Contenido */}
      {/* <div className="space-y-6 text-white">
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Proceso de Registro</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
            <li>Evaluación técnica-cultural del vínculo producto–territorio.</li>
            <li>Preparación y presentación del expediente.</li>
            <li>Acompañamiento legal durante todo el proceso.</li>
          </ul>
        </div>
      </div> */}

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white rounded-full font-semibold hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
          <span>Solicita tu registro ahora</span>
        </a>
      </div>
    </div>
  );
};

export default GeographicalIndicationCard;