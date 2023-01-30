import imagen1 from '../../src/assets/img/imagen1.jpg'
export const Inicio = () => {
  return (
    <>
      {/* tarjeta  */}
      <div className='flex flex-col justify-center items-center'>
        <img className='' src={imagen1} alt="" />
        <h2 className='my-5 font-bold text-blue-600'>Lleva el control en tu inventario</h2>
        <h3 className='text-center w-72'>identifica tus productos mas vendidos y accede a beneficion para surtir tu negocio</h3>
      </div>
      <div className='flex justify-center'>
        <div className='mt-3 w-3 h-3 mx-2 border-none bg-gris border-2 rounded-full'></div>
        <div className='mt-3 w-3 h-3 mx-2 border-none bg-gris border-2 rounded-full'></div>
        <div className='mt-3 w-3 h-3 mx-2 border-none bg-verde border-2 rounded-full'></div>
      </div>
      {/* botones */}
      <div className='flex flex-col justify-center items-center text-white'>
        <button type='button' className='text-sm h-8 mt-6 w-72 rounded-full bg-verde text-blanco font-semibold '>Crear Cuenta</button>
        <button type='button' className='text-sm h-8 mt-2 w-72 border-2 border-verde rounded-full bg-blanco  font-semibold'>Iniciar Sesión</button>
      </div>

      {/* informes */}
      <div className='flex flex-col justify-center items-center '>

      <p className='mt-4'>¿Necesitas ayuda? <strong className='text-enlace font-bold border-b-2'>Contactanos</strong></p>
      <p className='mt-4'>100% segura y gratuita</p>
      <footer className='mt-4 text-sm'>version 1.9.6.20</footer>
      </div>
    
    </>
  )
}
