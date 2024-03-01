
import TecladoImage from '../assets/tecladoimage.png'

function SignUp() {


    return (


        <section className="relative min-h-[100vh] overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full">
                {/* <video autoPlay muted loop className="object-cover w-full h-full" style={{ filter: 'blur(6px)' }}>
                    <source src={Video} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video> */}
                <img src={TecladoImage} alt={TecladoImage} className="min-h-screen min-w-full"/>
            </div>
        <div className="container relative flex items-center justify-center min-h-[100vh] px-6 md:left-1/3 pb-20 ">
            <form class=" w-90 max-w-md p-12 border-slate-900 ">

                <h2 className=" text-gray-100  text-center text-2xl font-extrabold mb-12 border-b-gray-600 border-b-4 mx-12">REGISTRATE</h2>

                
    
                <div class="relative flex items-center mt-8">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
    
                    <input type="text" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" fill placeholder="Nombre completo" required />
                </div>
    
                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
    
                    <input type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Correo electronico" required />
                </div>
    
                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
    
                    <input type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Contraseña"  required/>
                </div>
    
                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
    
                    <input type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Repetir contraseña"  required/>
                </div>
    
                <div class="mt-6">
                    <button class="w-full px-6 py-3 text-1x2 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Registrarse
                    </button>
    
                </div>
            </form>
        </div>
    </section>
    );
  }

export default SignUp;