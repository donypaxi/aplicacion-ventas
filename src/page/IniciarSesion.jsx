import imagen2 from '../assets/img/imagen2.jpg'
export const IniciarSesion = () => {
  return (
    <>
        {/* boton de regresar */}
        <div className='mt-6 m-6 h-12'>
            <svg className="h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

        </div>
        {/* tarjeta de saludo */}
        <div className="mt-12 flex flex-col justify-center items-center">
            <h2 className="font-bold">¡Hola de nuevo!</h2>
            <img className='h-36 my-5' src={imagen2} alt="" />
            <div className='flex flex-col justify-center items-center text-white'>
                <button type='button' className=' flex justify-center items-center text-sm h-8 mt-6 w-72 rounded-full bg-verde text-blanco font-semibold '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <span className='mx-4'> Con Correo de Gmail</span>     
                </button>

                <button type='button' className='flex justify-center items-center text-sm h-8 mt-5 w-72 border-2 border-verde rounded-full bg-blanco  font-semibold'>
                    <svg className='h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className='mx-4'> Con Número de Celular</span>     
                </button>
            </div>
            <h3 className='mt-6 text-sm'>¿No tienes una cuenta creada? <span className='text-enlace font-bold border-b-2'> Regístrate</span>
            </h3>

            {/* parte abajo */}
            <div className='mt-40 flex flex-col justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <p className='font-bold'>100% seguro y gratuito</p>
            </div>

        </div>

    </>
  )
}
