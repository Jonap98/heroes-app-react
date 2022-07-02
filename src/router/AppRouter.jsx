import { Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            {/* Rutas públicas */}
            <Route path="login" element={
              <PublicRoute >
                <LoginPage />
              </PublicRoute>
            } />
            
            {/* Rutas privadas */}
            <Route path="/*" element={
              <PrivateRoute >
                <HeroesRoutes />
              </PrivateRoute>
            } />

            {/* Si no se requiere protección de rutas, esto funciona bien */}
            {/* <Route path="login" element={ <LoginPage /> } /> */}
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
    </>
  )
}
