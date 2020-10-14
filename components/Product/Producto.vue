<template>
    <div>
        <div class="md:flex justify-center xs:px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32 pt-10">
            <h2 class="text-azul text-2xl font-semibold xs:block md:hidden">Zapato Clásico beige</h2>
               <div class="uppercase text-sm text-gray-500 w-100 border-b border-gray-600 pt-2 xs:block md:hidden">
                <span class="pr-2">Cod:</span><span>5511120023305</span>
               </div>
            <div class="xl:flex flex-row-reverse xs:pt-4 md:pt-0 md:w-full xl:w-1/2">
                <div class="md:w-4/5" :class="{'hidden':!this.imagen1}">
                    <zoom-on-hover class="border border-gray-400" img-normal='https://colgrampe.vteximg.com.br/arquivos/ids/419297-1000-1000/11010266I20_1.jpg' :scale = "2"></zoom-on-hover>
                </div>
                <div class="md:w-4/5" :class="{'hidden':!this.imagen2}">
                    <zoom-on-hover class="border border-gray-400" img-normal='https://colgrampe.vteximg.com.br/arquivos/ids/419298-1000-1000/11010266I20_2.jpg' :scale = "2"></zoom-on-hover>
                </div>
                <div class="md:w-4/5" :class="{'hidden':!this.imagen3}">
                    <zoom-on-hover class="border border-gray-400" img-normal='https://colgrampe.vteximg.com.br/arquivos/ids/419299-1000-1000/11010266I20_3.jpg' :scale = "2"></zoom-on-hover>
                </div>
                <div class="md:w-4/5" :class="{'hidden':!this.imagen4}">
                    <zoom-on-hover class="border border-gray-400" img-normal='' :scale = "2"></zoom-on-hover>
                </div>
                <div class="xs:flex xl:flex-col md:w-1/2 xl:w-1/5">
                    <div @click="mostrarImagen1">
                        <img class="border border-gray-400" src="https://colgrampe.vteximg.com.br/arquivos/ids/419297-1000-1000/11010266I20_1.jpg" alt="">
                    </div>
                    <div @click="mostrarImagen2">
                        <img class="border border-gray-400" src="https://colgrampe.vteximg.com.br/arquivos/ids/419298-1000-1000/11010266I20_2.jpg" alt="">
                    </div>
                    <div @click="mostrarImagen3">
                        <img class="border border-gray-400" src="https://colgrampe.vteximg.com.br/arquivos/ids/419299-1000-1000/11010266I20_3.jpg" alt="">
                    </div>
                    <div @click="mostrarImagen4">
                        <img class="border border-gray-400" src="" alt="">
                    </div>
                </div>
            </div>  
            <div class="md:w-full xl:w-1/2 xl:pl-10 xs:pt-4 md:pt-0">
               <h2 class="text-azul text-2xl font-semibold md:block xs:hidden">Zapato Clásico beige</h2>
               <div class="uppercase text-sm text-gray-500 w-100 border-b border-gray-600 pt-2 md:block xs:hidden">
                <span class="pr-2">Cod:</span><span>5511120023305</span>
               </div>
               <p class="text-gray-500 md:py-10 xs:py-4 xl:py-4">Zapato Clásico con cordones bebe beige boy</p>
               <button class="border border-indigo-900 rounded-lg pt-1 pb-2 px-3 text-sm text-azul hover:bg-azul hover:text-white">Guía de tallas</button>
               <p class="text-gray-500 md:py-6 xs:py-4 xl:py-4 font-semibold">Selecciona tu talla:</p>
               <div class="flex text-gray-500 absolute">
                    <div class="border-2 hover:border-indigo-900 hover:text-azul w-8 h-8 rounded-full font-bold"><a href="#" class="p-1 text-center text-xs">14</a></div>
                    <div class="border-2 hover:border-indigo-900 hover:text-azul w-8 h-8 rounded-full font-bold mx-1"><a href="#" class="p-1 text-center text-xs">15</a></div>
                    <div class="border-2 hover:border-indigo-900 hover:text-azul w-8 h-8 rounded-full font-bold mx-1"><a href="#" class="p-1 text-center text-xs">16</a></div>
                    <div class="border-2 hover:border-indigo-900 hover:text-azul w-8 h-8 rounded-full font-bold mx-1"><a href="#" class="p-1 text-center text-xs">17</a></div>
                    <div class="border-2 hover:border-indigo-900 hover:text-azul w-8 h-8 rounded-full font-bold mx-1"><a href="#" class="p-1 text-center text-xs">18</a><i class="fas fa-times-circle absolute right-0 top-0"></i></div>
               </div>
               <div class="text-azul xs:text-2xl md:text-2xl xl:text-3xl font-semibold flex xs:pt-12 xs:pb-8 md:pt-16 md:pb-8 xl:pb-6"><p class="pr-2">Ahora:</p><p class="font-bold">S/. 49.90</p></div>
               <button class="bg-azul text-white w-full pt-2 pb-3 px-3 rounded-lg"><a href="/correo">COMPRAR</a></button>
               <div class="w-100 border-b border-gray-400 pt-5">
               </div>
            </div>
        </div>
        <div class="md:flex pb-10">
            <div class="w-1/2"></div>
            <div class="xs:px-4 md:w-5/12 xl:w-1/3 xl:px-10 xl:flex">
                <div class="divide-x divide-gray-500 bg-plomo text-gray-600 flex">
                    <div class="p-4 text-center">
                        <i class="fas fa-truck text-2xl"></i>
                        <p>Despacho Gratis sobre S/.150(*)</p>
                    </div>
                    <div class="p-4 text-center">
                        <i class="fas fa-sync-alt text-2xl"></i>
                        <p>Cambios y devoluciones</p>
                    </div>
                </div>
                <div class="">
                    <div class="mx-4 text-gray-600">
                        <p class="font-semibold xs:pt-4 ">Comparte:</p>
                        <div class="flex py-4">
                            <a href="#" class="hover:text-azul"><i class="fab fa-facebook-f xs:text-3xl md:text-2xl xs:px-4 xl:pl-2 xl:pr-4"></i></a>
                            <a href="#" class="hover:text-azul"><i class="fab fa-twitter xs:text-3xl md:text-2xl xs:px-4"></i></a>
                            <a href="#" class="hover:text-azul xl:hidden xs:block"><i class="fab fa-whatsapp xs:text-3xl md:text-2xl xs:px-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-col md:px-10 xs:px-4 lg:px-24 xl:px-32">
            <p class="text-xs text-gray-600"><i class="fas fa-exclamation-triangle"></i> Imágenes Referenciales. Los precios pueden variar según su talla.</p>
            <img src="https://collokype.vteximg.com.br/arquivos/topbanner-medias.png?v=637185008990100000" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Producto',
        data(){
        return{
            imagen1: true,
            imagen2: false,
            imagen3: false,
            imagen4: false,
        }
    },
    methods:{
        mostrarImagen1(){
            this.imagen1 = true;
            this.imagen2 = false;
            this.imagen3 = false;
            this.imagen4 = false;
        },
        mostrarImagen2(){
            this.imagen2 = true;
            this.imagen1 = false;
            this.imagen3 = false;
            this.imagen4 = false;
        },
        mostrarImagen3(){
            this.imagen3 = true;
            this.imagen2 = false;
            this.imagen1 = false;
            this.imagen4 = false;
        },
        mostrarImagen4(){
            this.imagen4 = true;
            this.imagen2 = false;
            this.imagen3 = false;
            this.imagen1 = false;
        }
    }
}
</script>