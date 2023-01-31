
export const AgregarProducto = () => {
  return (
    <>

        <div className="relative bg-amarillo flex flex-col justify-center items-center">
            {/* titulo */}
            <h2 className="h-12 mt-5 font-bold">Agregar Producto</h2>
            <div className='absolute left-0 top-0 ml-5 mt-5 h-12  '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-blanco rounded-full border-solid border-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>

            </div>

            {/* foto, codigo de barra y formulario */}
            <div className="h-full rounded-t-3xl bg-fondo1">
                <div className="w-full grid grid-cols-2 gap-8">
                    {/* foto */}
                    <button className="flex justify-center items-center mt-6 mx-6 w-full h-full bg-camara rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-blanco">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>

                    </button>
                    {/* codigo de barra */}
                    <div className="mt-6 w-full h-full">
                        <label className="text-sm" htmlFor="">Código</label>
                        <div className=" border-2 border-slate-400 flex justify-between items-center mr-6 rounded-2xl h-16">
                            <input className=" w-4/5 ml-1 h-5/6 bg-inherit border-black focus:outline-none border-r-2 text-sm md:text-2xl"  type="number" placeholder="código de barra"/>
                        
                                <svg xmlns="http://www.w3.org/2000/svg" className=" bg-white h-8 w-8 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                        </div>

                        <label className="text-sm">Cantidad disponible</label>
                        <div className="text-xl border-2 border-slate-400 rounded-2xl flex justify-evenly items-center px-2 mr-6 bg-white h-10">
                            <button className="">+</button>
                            <div className="px-5 border-x-2 border-slate-400" >0</div>
                            <button className="">-</button>
                        </div>
                    </div>
                    {/* formulario */}                    
                        <form className="col-span-2 mx-6" action="">
                            <div className="mb-5 flex flex-col bg-fondo2 h-auto rounded-xl p-2">
                                <label className="text-sm">Nombre <span className="text-red-400">*</span></label>
                                <input className="w-full bg-inherit" type="text" placeholder="Producto (Obligatorio)" />
                            </div>

                            <div className="mb-5 flex flex-col bg-fondo2 h-auto rounded-xl p-2">
                                <label className="text-sm">Precio Unitario <span className="text-red-400">*</span></label>
                                <input className="w-full bg-inherit" type="text" placeholder="Valor de venta" />
                            </div>

                            <div className="mb-5 flex flex-col bg-fondo2 h-auto rounded-xl p-2">
                                <label className="text-sm">Costo Unitario <span className="text-red-400">*</span></label>
                                <input className="w-full bg-inherit" type="text" placeholder="Valor de compra" />
                            </div>

                            <div className="mb-5 flex flex-col bg-fondo2 h-auto rounded-xl p-2">
                                <label className="text-sm">Costo Unitario <span className="text-red-400">*</span></label>
                                <input className="w-full bg-inherit" type="text" placeholder="Valor de compra" />
                            </div>

                            <div className="mb-2 flex flex-col bg-fondo2 h-auto rounded-xl p-2">
                                <label className="text-sm">Descripción <span className="text-red-400">*</span></label>
                                <input className="w-full bg-inherit" type="text" placeholder="Descripción (Opcional)" />
                            </div>
                            <p className="mb-2 text-center text-xs text-gris">Completar los campos obligatorios para continuar</p>

                            <button className="mb-5 w-full bg-fondo2 rounded-2xl p-4 text-gris" type="submit" >CREAR PRODUCTO</button>
                        </form>

                </div>
            </div>

        </div>
    </>    
  )
}
