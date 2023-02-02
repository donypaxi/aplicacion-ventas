import { Encabezado } from "../components/Encabezado"
import { Navegacion } from "../components/Navegacion"

export const PageDeudas = () => {
    return (
      <>
         <div className="relative h-screen bg-amarillo flex flex-col justify-center items-center">
              {/* titulo */}
              
                <Encabezado/>

                <div className=" grid grid-cols-2 gap-2 my-5 text-sm font-bold ">
                    <div className="border-b-green-600 border-b-8 bg-blanco px-10 py-2 flex flex-col justify-center items-center rounded-xl ">
                        <p><span className="rounded-full bg-verde text-blanco px-1">0</span> Por cobrar</p>
                        <p>S/ 0</p>
                        <p>0 clientes</p>
                    </div>
                    <div className="border-b-red-500 border-b-8 bg-blanco px-10 py-2 flex flex-col justify-center items-center rounded-xl ">
                        <p><span className="rounded-full bg-red-500 text-blanco px-1">0</span> Por cobrar</p>
                        <p>S/ 0</p>
                        <p>0 clientes</p>
                    </div>
                </div>

                 {/* area de información */}
                <div className="h-full rounded-t-3xl bg-fondo2 container flex flex-col justify-between items-center pb-3">
                    <p className="text-center text-gris">Aún no tienes deudas creadas empieza añadiendo una AQUÍ</p>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gris mb-24 w-12 h-12 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-verde text-white font-bold rounded-2xl py-2 px-4 ">NUEVA VENTA</button>
                        <button className="bg-red-500 text-white font-bold rounded-2xl py-2 px-4 ">NUEVA GASTO</button>
                    </div>                    
                </div>
  
                <Navegacion/>
          </div>
      
          {/* menu de navegacion */}
      </>
    )
  }
  