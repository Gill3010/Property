import { Scale } from 'lucide-react';

const PatentCard = () => {
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
          <Scale className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Registro de Patente de Invención y Modelo de Utilidad
          </h2>
          <p className="text-sm text-gray-300 tracking-wide">Protegemos tus soluciones técnicas o productos innovadores.</p>
        </div>
      </div>

      {/* Modalidades */}
      <div className="space-y-6 text-white">
        {/* Modalidad Completa */}
        {/* <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Modalidad Completa</h3>
          <p className="text-sm text-gray-300 mb-2">Acompañamiento integral desde la idea hasta la obtención de la resolución:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
            <li>Creatividad de la propuesta inventiva.</li>
            <li>Redacción del documento técnico completo.</li>
            <li>Elaboración de imágenes.</li>
            <li>Preparación de expediente legal.</li>
            <li>Presentación virtual del expediente.</li>
            <li>Seguimiento y gestión hasta la resolución.</li>
          </ul>
        </div> */}

        {/* Modalidad Parcial */}
        {/* <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Modalidad Parcial</h3>
          <p className="text-sm text-gray-300 mb-2">Para inventores que ya cuentan con información preliminar:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
            <li>Evaluación de la ficha técnica de la propuesta.</li>
            <li>Elaboración del documento técnico completo.</li>
            <li>Preparación y presentación del expediente.</li>
            <li>Acompañamiento hasta la resolución.</li>
          </ul>
        </div> */}

        {/* Modalidad Trámite */}
        {/* <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Modalidad Trámite</h3>
          <p className="text-sm text-gray-300 mb-2">Ideal para quienes ya tienen el documento técnico listo:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
            <li>Evaluación del documento técnico.</li>
            <li>Recomendaciones de mejora.</li>
            <li>Presentación virtual del expediente.</li>
            <li>Acompañamiento administrativo hasta resolución.</li>
          </ul>
        </div> */}
      </div>

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

export default PatentCard;