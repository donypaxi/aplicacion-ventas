import { Encabezado } from "../components/Encabezado"
import { Navegacion } from "../components/Navegacion"

export const PagePedidos = () => {
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
                    <div className="mt-36 text-2xl">
                        trabajando en este campos
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
  