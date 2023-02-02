
import { Route, Routes } from "react-router-dom"
import { NoFound } from "./page/NoFound"
import { PageBalance } from "./page/PageBalance"
import { PageDeudas } from "./page/PageDeudas"
import { PageInicio } from "./page/PageInicio"
import { PageInventario } from "./page/PageInventario"
import { PagePedidos } from "./page/PagePedidos"
import { PagePerfil } from "./page/PagePerfil"

export const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<PageInicio/>}/>
        <Route path="balance" element={<PageBalance/>}/>
        <Route path="deudas" element={<PageDeudas/>}/>
        <Route path="inventario" element={<PageInventario/>}/>
        <Route path="pedidos" element={<PagePedidos/>}/>
        <Route path="perfil" element={<PagePerfil/>}/>

        {/* <Route path="*" element={<NoFound/>}/> */}

      </Routes>
      
    </>
  )
}
