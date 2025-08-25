import { Link } from "react-router";
import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import {MoonStarsIcon, SunIcon} from "@phosphor-icons/react";

export function Header() {
  const { theme, toggle } = useContext(ThemeContext)


  return (

    <div className="pb-15">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-white shadow-sm z-50 ">

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
                <button className="hover:text-indigo-700 cursor-pointer" onClick={toggle} >
                  {theme === "dark"? (
                    <SunIcon size={24} weight="fill"/>
                  ) : (
                    <MoonStarsIcon size={24} weight="fill" />
                  )}
                  </button>
            </ul>
            </nav>
        </header>
    </div>
  );
}
