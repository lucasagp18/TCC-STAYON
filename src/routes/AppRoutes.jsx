import React from 'react'
import { Home } from "../pages/Home"
import { Routes, Route } from "react-router"
import { QuemSomos } from '../pages/QuemSomos'
import { Pecas } from '../pages/Pecas'
import { Layout } from '../components/Layout'
import { ErrorPage } from '../pages/ErrorPage'
import { Produto } from '../pages/Produto'
import { Referencias } from '../pages/Referencias'
import { Jogo } from '../pages/Jogo'

export function AppRoutes() {
    return (

        <Routes>
                <Route path='/' element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/pecas" element={<Pecas />} />
                <Route path="/jogo" element={<Jogo />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/referencias" element={<Referencias />} />
            </Route>

            <Route path='*' element={<ErrorPage/>} />
        </Routes>

    )
}