// import { Inicio } from "./page/Inicio"
// import { IniciarSesion } from "./page/IniciarSesion"
// import { AgregarProducto } from "./page/AgregarProducto"
import { Route, Routes } from "react-router-dom"
import { NoFound } from "./page/NoFound"
import { PageBalance } from "./page/PageBalance"
import { PageDeudas } from "./page/PageDeudas"
import { PageInicio } from "./page/PageInicio"
import { PageInventario } from "./page/PageInventario"
import { PagePedidos } from "./page/PagePedidos"
// import { PageBalance } from "./page/PageBalance"
// import { PageInventario } from "./page/PageInventario"
// import { PagePerfil } from "./page/PagePerfil"// import { PageDeudas } from "./page/PageDeudas"

export const App = () => {
  return (
    <>
      {/* <Inicio/> */}
      {/* <IniciarSesion/> */}
      {/* <AgregarProducto/> */}
      {/* <PageBalance/> */}
      {/* <PageDeudas/> */}
      {/* <PageInventario/> */}
      {/* <PagePerfil/> */}
      {/* <PageInicio/> */}
      
      <Routes>
        <Route path="/" element={<PageInicio/>}/>
        <Route path="balance" element={<PageBalance/>}/>
        <Route path="deudas" element={<PageDeudas/>}/>
        <Route path="inventario" element={<PageInventario/>}/>
        <Route path="pedidos" element={<PagePedidos/>}/>
        {/* <Route path="*" element={<NoFound/>}/> */}

      </Routes>
      
    </>
  )
}
