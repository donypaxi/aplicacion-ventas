import { Link, NavLink } from "react-router-dom"

export const Encabezado = () => {
  return (
    <>

        <NavLink  
        to="/perfil">
            <div className='absolute left-0 top-0 ml-5 mt-5 p-2 bg-blanco rounded-full '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

        </NavLink>
        <div className="mt-5">
            <h2 className="font-bold text-center">Computadoras</h2>
            <p className="text-ms text-center">Propiedades</p>
        </div>    


    </>
    
  )
}
