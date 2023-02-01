import { Navegacion } from "../components/Navegacion"

export const PagePerfil = () => {
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
                <div className="h-full rounded-t-3xl bg-fondo2 container mx-auto px-4 flex flex-col items-center pb-3">
                    {/* perfil */}
                    
                    <div className="bg-blanco rounded-2xl py-4 px-2 grid grid-cols-5  w-full border-4 mt-5">
                        {/* foto */}
                        <div className="row-span-3 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                        </div>
                        {/* informacion */}
                        <p className="text-sm text-gris col-span-2">Nombre usuario</p>                        
                        <p className="font-bold text-sm col-span-2 justify-self-end">Editar perfil <span> {'>'} </span></p>
                        <p className="text-sm font-bold col-span-4 ">numero celular</p>
                        <p className="text-gris text-xs col-span-4">Ultima sincronización </p>
                    </div>


                    <button className="bg-blanco rounded-2xl py-4 px-2 flex items-center w-full border-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span className="text-start ml-5">Agregar otro negocio</span>
                    </button>

                    <button className="bg-blanco rounded-2xl py-4 px-2 flex   items-center w-full border-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <span className="text-start  ml-5 ">Asociarse a un negocio existente</span>
                    </button>
                    
                    <button className="bg-blanco rounded-2xl py-4 px-2 flex items-center w-full border-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <span className="ml-5">Tarjeta de contacto</span>
                    </button>

                    
                    <button className="bg-blanco rounded-2xl py-4 px-2 flex items-center w-full border-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>


                        <span className="ml-5">Configura tu catálogo virtual</span>
                    </button>
                    <div>

                    </div>


                                        
                </div>
  
                <Navegacion/>
          </div>
      
          {/* menu de navegacion */}
      </>
    )
  }
  