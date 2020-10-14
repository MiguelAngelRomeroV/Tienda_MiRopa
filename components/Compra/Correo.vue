<template>
    <div>
        <Navbar />
        <div class="py-8 xs:px-2 sm:px-4 lg:px-12 mx-2">
            <h1 class="uppercase text-azul text-3xl font-bold">FINALIZAR LA COMPRA</h1>
            <div class="border-b-4 border-indigo-900 xs:w-1/3 md:w-1/6 lg:w-1/12"></div>
            <div class="py-10">
                <div class="flex items-center justify-center md:pt-10">
                    <h2 class="xs:text-lg md:text-2xl lg:text-3xl text-gray-600 font-semibold">Ingresa tu correo para continuar la compra.</h2>
                    <h3 class="xs:text-sm md:text-xl lg:text-2xl text-gray-600 px-2 mt-1">Rápido. Fácil. Seguro.</h3>
                </div>
                <div class="mx-auto flex xs:w-full sm:w-2/3 xl:w-1/2 items-center justify-center py-2 relative">
                    <input class="w-full border text-gray-700 border-indigo-900 py-2 rounded px-2 xs:text-xl md:text-2xl placeholder-gray-700" type="email" placeholder="tu@correo.com">
                    <button class="absolute text-white hover:bg-gray-600 px-3 py-2 bg-azul text-lg right-0 mr-1"><a href="/compra">Continuar</a></button>
                </div>
                <div class="border md:w-2/3 xl:w-1/3 mx-auto rounded mt-10 py-2 px-4 relative">
                    <i class="fas fa-lock absolute text-3xl text-gray-400 right-0 bottom-0 mr-2 mb-2 z-10" style="font-size:100px"></i>
                    <h4 class="text-green-500 text-sm font-bold z-50 relative">Guardamos su correo electrónico de manera 100% segura para:</h4>
                    <ul class="text-gray-600 text-sm font-semibold z-50 relative">
                        <li><i class="fas fa-check text-green-500 pr-2"></i>Identificar su perfil</li>
                        <li><i class="fas fa-check text-green-500 pr-2"></i>Notificar sobre los estados de su compra</li>
                        <li><i class="fas fa-check text-green-500 pr-2"></i>Guardar el historial de compras</li>
                        <li><i class="fas fa-check text-green-500 pr-2"></i>Facilitar el proceso de compras</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/Compra/Navbar';
import Footer from '@/components/Compra/Footer';
export default {
    name:'Compra',
    components:{
        Navbar,
        Footer,
    }
}
</script>