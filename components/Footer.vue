<template>
    <div class="border-t lg:pt-12 pt-4">
       <div class="flex flex-wrap-reverse justify-center">
             <ul class="w-full md:w-auto text-base md:text-xs text-gray-700 md:text-gray-600 leading-loose pt-2 px-8 lg:px-6 md:px-12">
                <li class="uppercase text-azul font-semibold text-base border-b md:border-0 border-indigo-900 md:text-sm"><a href="#" @click.prevent="ocultar1"><i class="fas fa-plus-circle mr-2 md:hidden"></i>MI ROPA</a></li>
                <li :class="view.mostrar1 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Guía de tallas Zapatos</a></li>
                <li :class="view.mostrar1 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Guía de tallas Ropa</a></li>
                <li :class="view.mostrar1 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Guía de tallas Accesorios</a></li>
                <li :class="view.mostrar1 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Nosotros</a></li>
                <li :class="view.mostrar1 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Nuestras Tiendas</a></li>
                <li :class="view.mostrar1 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Trabaja con Nosotros</a></li>
            </ul>
            <ul class="w-full md:w-auto text-base md:text-xs text-gray-700 md:text-gray-600 leading-loose pt-2 px-8 lg:px-6 md:px-12">
                <li class="uppercase text-azul font-semibold text-base border-b md:border-0 border-indigo-900 md:text-sm"><a href="#" @click.prevent="ocultar2"><i class="fas fa-plus-circle mr-2 md:hidden"></i>SERVICIO</a></li>
                <li :class="view.mostrar2 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Formas de Pago</a></li>
                <li :class="view.mostrar2 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Política de Despacho</a></li>
                <li :class="view.mostrar2 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Cambios y Devoluciones</a></li>
                <li :class="view.mostrar2 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Libro de reclamaciones</a></li>
                <li :class="view.mostrar2 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Legales Cyber 2020</a></li>
            </ul>
            <ul class="w-full md:w-auto text-base md:text-xs text-gray-700 md:text-gray-600 leading-loose pt-2 px-8 lg:px-6 md:px-12">
                <li class="uppercase text-azul font-semibold text-base border-b md:border-0 border-indigo-900 md:text-sm"><a href="#" @click.prevent="ocultar3"><i class="fas fa-plus-circle mr-2 md:hidden"></i>GIRL</a></li>
                <li :class="view.mostrar3 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Accesorios</a></li>
                <li :class="view.mostrar3 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Ropa</a></li>
                <li :class="view.mostrar3 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Zapatos</a></li>
            </ul>
            <ul class="w-full md:w-auto text-base md:text-xs text-gray-700 md:text-gray-600 leading-loose pt-2 px-8 lg:px-6 md:px-12">
                <li class="uppercase text-azul font-semibold text-base border-b md:border-0 border-indigo-900 md:text-sm"><a href="#" @click.prevent="ocultar4"><i class="fas fa-plus-circle mr-2 md:hidden"></i>BOY</a></li>
                <li :class="view.mostrar4 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Accesorios</a></li>
                <li :class="view.mostrar4 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Ropa</a></li>
                <li :class="view.mostrar4 ? 'block': 'md:block hidden'" class="hover:text-yellow-500 animate__animated animate__fadeInDown"><a href="#">Zapatos</a></li>
            </ul>
            <ul class="w-full lg:w-1/3 flex-col justify-end text-base text-center text-gray-600 leading-loose md:mx-6 mx-4 lg:mx-10 bg-plomo">
                <li class="uppercase text-azul font-semibold text-2xl">SOPORTE WEB</li>
                <ul class="flex justify-center">
                    <li class="hover:text-azul"><a href="#"><i class="fas fa-phone-alt px-2"></i>951860328</a></li>
                    <li class="hover:text-azul"><a href="#"><i class="fas fa-phone-alt px-2"></i>982154212</a></li>
                </ul>
                <ul class="flex justify-center">
                    <li class="hover:text-azul"><a href="#"><i class="fas fa-phone-alt px-2"></i>951860328</a></li>
                    <li class="hover:text-azul"><a href="#"><i class="fas fa-phone-alt px-2"></i>982154212</a></li>
                </ul>
                <li class="hover:text-azul"><a href="#"><i class="fas fa-phone-alt px-2"></i>(01) 387 7834</a></li>
                <li class="pb-4 hover:text-azul"><a href="#">ventasweb@ropa.com.pe</a></li>
                <li class="border-b px-2 mx-2 text-gray-800">Horario de atención: Lunes a Viernes de 09:00 a 18:00 hrs.</li>
                <li class="uppercase text-azul font-semibold text-2xl">SÍGUENOS</li>
                <ul class="flex text-3xl justify-center">
                <li><a href="#"><i class="fab fa-facebook-f px-4 hover:text-azul"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram px-4 hover:text-azul"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube px-4 hover:text-azul"></i></a></li>
                </ul>
            </ul>
       </div>
        <div class="border-b py-4"></div>
      <div class="lg:flex justify-center items-center py-6 mx-6 md:mx-6 lg:mx-0">
        <div class="lg:flex w-full lg:divide-x lg:divide-gray-300">
          <div class="w-full flex xs:justify-center lg:justify-end lg:mr-4 items-center">
            <p class="text-xs text-gray-600 text-center"><a href="#">Ecommerce desarrollado por PauloCJ</a></p>
          </div>
            <div class="w-full flex xs:justify-center lg:justify-start xs:pl-6 items-center">
                <a class="text-xs text-gray-600">Copyright 2020,</a>
                <img class="mx-2 h-10" src="img/logo.png" alt="Logo">
            </div>
        </div>  
      </div>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return {
            view:{
                mostrar1: false,
                mostrar2: false,
                mostrar3: false,
                mostrar4: false,
            }
        }
    },
    methods:{
        ocultar1(){
            this.view.mostrar1 = !this.view.mostrar1
        },
        ocultar2(){
            this.view.mostrar2 = !this.view.mostrar2
        },
        ocultar3(){
            this.view.mostrar3 = !this.view.mostrar3
        },
        ocultar4(){
            this.view.mostrar4 = !this.view.mostrar4
        }
    }
}
</script>