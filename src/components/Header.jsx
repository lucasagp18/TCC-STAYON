import { Link } from "react-router";
import React from "react";

export function Header() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
            <div className="text-xl font-bold text-indigo-700">StayOn</div>

            {/* Nav com UL e LI usando Link */}
            <nav>
            <ul className="flex space-x-6 text-gray-600 font-semibold text-sm">
                <li>
                <Link to="/" className="hover:text-indigo-700">Início</Link>
                </li>
                <li>
                <Link to="/produto" className="hover:text-indigo-700">Produto</Link>
                </li>
                <li>
                <Link to="/jogo" className="hover:text-indigo-700">Jogo</Link>
                </li>
                <li>
                <Link to="/quem-somos" className="hover:text-indigo-700">Quem somos</Link>
                </li>
                <li>
                <Link to="/cadastro" className="hover:text-indigo-700">Cadastrar</Link>
                </li>
            </ul>
            </nav>
        </header>
        </div>
  );
}
