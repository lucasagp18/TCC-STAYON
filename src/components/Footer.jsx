import { Link } from "react-router";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-white font-semibold mb-3">StayOn</h3>
          <p>© 2023 StayOn. Todos os direitos reservados.</p>
        </div>
        <nav className="flex space-x-6 mt-4 md:mt-0 text-gray-400 font-semibold">
          <a href="/" className="hover:text-white">Início</a>
          <a href="produto" className="hover:text-white">Produto</a>
          <a href="jogo" className="hover:text-white">Jogo</a>
          <a href="quem-somos" className="hover:text-white">Quem somos</a>
        </nav>
      </div>
    </footer>
  )
}
