import { Encabezado } from "../components/Encabezado"
import { Navegacion } from "../components/Navegacion"

export const PageInventario = () => {
    return (
      <>
         <div className="relative h-screen bg-amarillo flex flex-col justify-center items-center">
              {/* titulo */}
              
                <Encabezado/>
                {/* Bloques */}
                <div className="grid grid-cols-2 gap-2 my-5 mx-5 text-sm font-bold ">
                    <div className=" bg-blanco px-4 py-3 flex flex-col justify-center items-center rounded-xl ">
                        <p className="text-center">Total de referencias</p>
                        <p>0</p>
                    </div>
                    <div className="bg-blanco px-4 py-3 flex flex-col justify-center items-center rounded-xl ">
                        <p>Costo total</p>
                        <p>S/ 0</p>
                    </div>
                </div>

                 {/* area de información */}
                <div className="h-full rounded-t-3xl bg-fondo2 container flex flex-col justify-between items-center pb-3">
                    <div className="container mx-auto px-4 ">
                        <div className="mt-5 flex justify-between items-center">

                            {/* buscador */}
                            <div className="bg-blanco rounded-2xl flex  items-center container mx-auto ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gris mx-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                                <input className="h-10 rounded-2xl" type="text" placeholder="Buscar..."/>
                            </div>
                            <div className="mx-2 border border-black rounded-full p-1 bg-blanco font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>

                            </div>
                        </div>
                        {/* boron crear categoria */}
                        <div>
                            <button className=" flex justify-between items-center bg-amarillo rounded-lg my-2 text-blanco ">
                                <span className="mx-2  text-3xl ">+
                                </span>
                                <span className="mr-2">Crear Categoría</span>
                            </button>
                        </div>
                        <p className="text-center text-gris text-sm">No tienes productos en tu inventario</p>

                    </div>

                    {/* boton */}
                    <div className="container mx-auto px-4">
                        <button className="w-full bg-verde text-white  rounded-2xl py-2 px-4 ">CREAR NUEVO PRODUCTO</button>
                        
                    </div>                    
                </div>
  
                <Navegacion/>
          </div>
      
          {/* menu de navegacion */}
      </>
    )
  }
  