
function SignInForm() {
    return (
        <section class=" bg-transparent">
        <div class="container flex mt-24 justify-center min-h-[90vh] px-6 mx-auto ">
            <form class="w-full max-w-md">
                <div class="flex justify-center mx-auto">
                <svg width="64px" height="64px" viewBox="0 -117.5 1259 1259" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M393.644285 971.514095l472.373142 0 0 52.485905-472.373142 0 0-52.485905Z" fill="#17202A"></path><path d="M524.859047 652.399795h209.943618v345.357253h-209.943618z" fill="#AEB6BF"></path><path d="M708.559713 678.642747V970.989236h-157.457714V678.642747h157.457714m52.485905-52.485904H498.616094V1023.475141h262.429524V626.156843z" fill="#17202A"></path><path d="M26.242952 26.242952l1207.175808 0 0 734.802666-1207.175808 0 0-734.802666Z" fill="#212F3C"></path><path d="M1207.175807 52.485905v682.31676H52.485905V52.485905h1154.689902m0-52.485905H52.485905a52.485905 52.485905 0 0 0-52.485905 52.485905v682.31676a52.485905 52.485905 0 0 0 52.485905 52.485905h1154.689902a52.485905 52.485905 0 0 0 52.485905-52.485905V52.485905a52.485905 52.485905 0 0 0-52.485905-52.485905z" fill="#17202A"></path><path d="M52.485905 763.669913a26.242952 26.242952 0 0 1-26.242953-26.242952v-100.510508h1207.175808v100.248078a26.242952 26.242952 0 0 1-26.242953 26.242952z" fill="#AEB6BF"></path><path d="M1207.175807 663.159405v74.267556H52.485905v-74.267556h1154.689902m52.485905-52.485904H0v126.49103a52.485905 52.485905 0 0 0 52.485905 52.485905h1154.689902a52.485905 52.485905 0 0 0 52.485905-52.485905v-126.49103z" fill="#17202A"></path></g></svg>
                </div>
    
                
    
                <div class="relative flex items-center mt-8">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
    
                    <input type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Correo electronico" required />
                </div>
    
                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
    
                    <input type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Contraseña" required />
                </div>
    
               
    
                <div class="mt-6">
                    <button class="w-full px-6 py-3 text-1x2 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Ingresar
                    </button>
    
                </div>
            </form>
        </div>
    </section>
    );
  }

export default SignInForm;