import { Navegacion } from "../components/Navegacion"

export const PageBalance = () => {
    return (
      <>
         <div className="relative h-screen bg-amarillo flex flex-col justify-center items-center">
              {/* titulo */}
              
                <div className='absolute left-0 top-0 ml-5 mt-5 p-2 bg-blanco rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="mt-5">
                    <h2 className="font-bold text-center">Computadoras</h2>
                    <p className="text-ms text-center">Propiedades</p>
                </div>
                 {/* area de información */}
                <div className="h-full rounded-t-3xl bg-fondo2 container flex flex-col justify-between items-center pb-3">
                    <p className="mt-40 text-center text-gris">Aún no tienes registros creados. Empieza añadiendo uno AQUÍ</p>
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
  