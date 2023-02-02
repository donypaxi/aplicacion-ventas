import { Encabezado } from "../components/Encabezado"
import { Navegacion } from "../components/Navegacion"

export const PageBalance = () => {
    return (
      <>
        <div className="relative h-screen bg-amarillo flex flex-col justify-center items-center">
              {/* titulo */}
              
                <Encabezado/>
                 {/* area de información */}
                <div className="h-full rounded-t-3xl bg-fondo2 container flex flex-col justify-between items-center">
                    <p className="text-center text-gris">Aún no tienes registros creados. Empieza añadiendo uno AQUÍ</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gris w-12 h-12 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-verde text-white font-bold rounded-2xl py-2 px-4 ">NUEVA VENTA</button>
                        <button className="bg-red-500 text-white font-bold rounded-2xl py-2 px-4 ">NUEVA GASTO</button>
                    </div>                    
                    <Navegacion/>
                </div>
        </div>
      
          {/* menu de navegacion */}
      </>
    )
  }
  