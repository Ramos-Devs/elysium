export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/** Example Logo */}
      <div className="mb-6 flex flex-col items-center">
        <svg
          width="200"
          height="100"
          viewBox="0 0 180 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="45%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-black text-4xl font-bold"
          >
            DEV
          </text>

          <path
            d="M45 55 C75 70, 100 45, 130 55"
            className="stroke-yellow"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="w-full px-4">
        <div className="max-w-sm mx-auto bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.15)] overflow-hidden">
          {/** Encabezado */}
          <div className="bg-gray-100/60 text-black text-2xl font-semibold px-4 py-3 border-b border-gray-200">
            Iniciar sesión
          </div>

          {/* Contenido */}
          <div className="p-4">
            <div className="mb-3">
              <label
                htmlFor="user"
                className="block text-base font-medium text-black mb-1 tracking-tight"
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
                className="block text-base font-medium text-black mb-1 tracking-tight"
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
              className="w-full bg-yellow text-black font-semibold py-0.5 mt-3 text-md
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
