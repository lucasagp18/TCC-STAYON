import React from 'react'
import { Home } from "../pages/Home"
import { Routes, Route } from "react-router"
import { Cadastro } from '../pages/Cadastro'
import { Detalhes } from '../pages/Detalhes'
import { Layout } from '../components/Layout'
import { ErrorPage } from '../pages/ErrorPage'

export function AppRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Route>
            <Route path="/detalhes" element={<Detalhes />} />

            <Route path='*' element={<ErrorPage/>} />
        </Routes>

    )
}