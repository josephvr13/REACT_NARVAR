import { useState } from "react"

export default function Navbar() {
  // Estado para abrir/cerrar el menú móvil
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold">Mi App</div>

      {/* Menú escritorio (visible en md en adelante) */}
      <ul className="hidden md:flex gap-x-6">
        <li className="hover:underline cursor-pointer">Inicio</li>
        <li className="hover:underline cursor-pointer">Servicios</li>
        <li className="hover:underline cursor-pointer">Contacto</li>
      </ul>

      {/* Botón menú móvil (solo visible en pantallas pequeñas) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Abrir o cerrar menú"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menú desplegable móvil */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-indigo-600 flex flex-col items-center gap-y-4 py-6 md:hidden">
          <li className="hover:underline cursor-pointer">Inicio</li>
          <li className="hover:underline cursor-pointer">Servicios</li>
          <li className="hover:underline cursor-pointer">Contacto</li>
        </ul>
      )}
    </nav>
  )
}