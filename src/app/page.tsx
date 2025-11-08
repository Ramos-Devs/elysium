import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Logo />

      <div className="w-full px-4">
        <div className="max-w-sm mx-auto bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.15)] overflow-hidden">
          {/** Encabezado */}
          <div className="bg-gray-100/60 text-black text-xl font-semibold px-4 py-3 border-b border-gray-200">
            Iniciar sesión
          </div>

          {/* Contenido */}
          <div className="p-4">
            <div className="mb-3">
              <label
                htmlFor="user"
                className="block text-base text-sm font-medium text-black mb-1 tracking-tight"
              >
                Usuario
              </label>
              <input
                id="user"
                name="user"
                type="text"
                placeholder="Nombre de usuario o email"
                className="w-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-black 
                           text-xs focus:outline-none focus:ring-1"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-base text-sm font-medium text-black mb-1 tracking-tight"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-black 
                           text-xs focus:outline-none focus:ring-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow text-black font-medium py-0.5 mt-3 text-base
                         border border-yellowDark shadow-sm hover:bg-yellowDark transition-all tracking-tight"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Pie */}
      <p className="text-xs text-gray-400 mt-5 text-center font-medium tracking-wide">
        Al continuar, aceptas los{' '}
        <span className="text-blue-500 hover:underline cursor-pointer font-semibold">
          términos y condiciones
        </span>
        .
      </p>
    </div>
  );
}
