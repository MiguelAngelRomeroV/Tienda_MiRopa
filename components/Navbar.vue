<template>
   <div> 
        <Carrito class="animate__animated animate__slideInRight" v-click-outside="this.ocultarCarrito" :class="{'hidden': !this.carrito }"/>
        <Menu class="animate__animated animate__slideInLeft" v-click-outside="this.ocultarMenu" :class="{'hidden': !this.menu}"/> 
        <div class="bg-amarillo pb-2" :class="{'opacity-25': this.filtros || this.menu || this.carrito}">
            <h3 class="text-sm md:text-xl lg:text-2xl text-center text-azul font-bold leading-relaxed">Despacho gratis por compras sobre s/.150.00</h3>
            <h4 class="text-xs text-center text-gray-600">*Válido para Lima y Callao(*).</h4>
        </div>
        <div class="bg-azul" :class="{'opacity-25': this.filtros || this.menu || this.carrito}">
            <h4 class="leading-snug text-white uppercase text-center font-bold text-xs md:text-sm">¡Te faltan S/.150.00 para tu despacho gratis!</h4>
        </div>
        <div class="flex flex-wrap py-1 lg:px-10 md:px-6 px-4 lg:pb-4" @mouseover="view.estado = false,view.estado2 = false,view.estado3 = false,view.estado4 = false" :class="{'opacity-25': this.filtros || this.menu || this.carrito}">
            <div class="md:w-1/3 flex justify-start hidden md:block">
                <i class="fas fa-sync-alt py-3 text-azul text-xs pr-3"></i>
                <span class="py-2 uppercase tracking-tighter text-xs text-azul font-bold"> CAMBIOS EN TODAS NUESTRAS TIENDAS</span>
            </div>
            <div class="md:w-2/3 w-full flex justify-end">
                <a href="#" class="border-l border-r lg:border-0 border-black uppercase text-xs py-2 px-3 font-bold bg-plomo text-azul">¿SABES CÓMO COMPRAR?</a>
                <a href="#" class="uppercase border-r lg:border-0 border-black text-xs py-2 px-3 text-gray-600">NUESTRAS TIENDAS</a>
                <a href="#" class="uppercase text-xs py-2 px-3 text-gray-600">MIS PEDIDOS</a>
            </div>
        </div>
        <div class="flex flex-wrap justify-center lg:py-0 py-2 lg:px-10 md:px-6 px-4" style="z-index:1" :class="[{ 'shadow-xl fixed top-0 w-full pb-2 lg:pb-1 bg-white':!view.atTopOfPage },{'opacity-25': this.filtros || this.menu || this.carrito}]">
            <div class="w-1/3 flex items-center lg:hidden"><i @click="this.mostrarMenu" class="fas fa-bars text-azul mx-1 text-xl"></i></div>
            <div class="lg:w-1/5 flex items-center justify-center lg:justify-start w-1/3" @mouseover="view.estado = false,view.estado2 = false,view.estado3 = false,view.estado4 = false">
                <a href="/"><img class="h-10" src="img/logo.png" alt="Logo"></a>
            </div>
            <div class="lg:w-4/5 w-1/3 flex justify-end" @mouseover="view.estado = false,view.estado2 = false,view.estado3 = false,view.estado4 = false">
                <form class="mx-6 flex items-center" action="#" method="post">
                    <input class="pl-2 pr-48 text-azul border-b border-indigo-900 pb-3 placeholder-indigo-900 hidden lg:block" type="text" placeholder="¿Qué estas buscando?">
                    <input class="py-2 px-5 rounded-lg bg-azul text-white hidden lg:block" type="submit" value="Buscar">
                </form>
                <div class="border-r border-black hidden lg:block"></div>
                <div class="lg:mx-6 mx-1 flex justify-end items-center">
                    
                    <div class="relative pl-2 pt-1 lg:hidden"><i @click="carritoE" class="fas fa-shopping-cart text-azul text-2xl lg:pr-2"></i>
                    <a @click="carritoE" title="carrito" class="absolute left-0 top-0 bg-amarillo rounded-full text-azul text-xs text-center font-bold w-5 h-5">0</a>
                    </div>
                    <div class="relative pl-2 pt-1 xs:hidden lg:inline"><a href="/correo"><i class="fas fa-shopping-cart text-azul text-2xl lg:pr-2"></i></a>
                    <a href="/correo" title="carrito" class="absolute left-0 top-0 bg-amarillo rounded-full text-azul text-xs text-center font-bold w-5 h-5">0</a>
                    </div>
                    <span class="text-azul text-lg font-semibold hidden lg:block">S/. 0.00</span>
                </div>    
            </div>
            <div class="relative w-full">
                <input class="w-full text-azul border-2 md:pb-3 py-2 md:pt-2 px-4 placeholder-indigo-900 rounded lg:hidden hover:shadow-inner" type="text" placeholder="¿Qué estas buscando?">
                <button class="absolute bottom-0 right-0 py-2 pr-2 md:pb-3 md:pr-2 lg:hidden"><i class="fas fa-search text-xl"></i></button>
            </div>
        </div>
        <div class="hidden lg:block" :class="[{ 'fixed top-0 z-50 w-full shadow-2xl': !view.atTopOfPage }, {'opacity-25': this.filtros || this.menu || this.carrito}]">
                <div class="flex py-4 bg-white px-8">
                    <a class="uppercase text-azul text-sm font-semibold px-4" @mouseover="view.estado = true, view.estado2 = false, view.estado3 = false, view.estado4 = false" href="#">ropa</a>
                    <a class="uppercase text-azul text-sm font-semibold px-4" @mouseover="view.estado2 = true, view.estado = false, view.estado3 = false, view.estado4 = false" href="#">zapatos</a>
                    <a class="uppercase text-azul text-sm font-semibold px-4" @mouseover="view.estado3 = true, view.estado = false, view.estado2 = false, view.estado4 = false" href="#">accesorios</a>
                    <a class="uppercase text-azul text-sm font-semibold px-4" @mouseover="view.estado4 = true, view.estado = false, view.estado3 = false, view.estado2 = false" href="#">cuidados del bebé</a>
                </div>
                <div class="flex px-2 fixed w-full z-50 bg-white shadow-2xl border-t py-6" @mouseleave="view.estado = false" :class="{ 'hidden': !view.estado }">
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">GIRL</li>
                        <li class="pl-4 font-semibold">newborn (0-9 meses)</li>
                        <li class="pl-4 font-semibold">infant(3-36 meses)</li>
                        <li class="pl-4 font-semibold">kid (2-12 años)</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">boy</li>
                        <li class="pl-4 font-semibold text-xs">newborn (0-9 meses)</li>
                        <li class="pl-4 font-semibold">infant(3-36 meses)</li>
                        <li class="pl-4 font-semibold">kid (2-12 años)</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">categorías</li>
                        <li class="pl-4 font-semibold text-xs">POLOS</li>
                        <li class="pl-4 font-semibold">BLUSAS</li>
                        <li class="pl-4 font-semibold">POLERONES</li>
                        <li class="pl-4 font-semibold">PANTALONES</li>
                        <li class="pl-4 font-semibold">VESTIDOS</li>
                        <li class="pl-4 font-semibold">SWEATERS</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">ocasión</li>
                        <li class="pl-4 font-semibold text-xs">VESTIR</li>
                        <li class="pl-4 font-semibold">EVERYDAY</li>
                        <li class="pl-4 font-semibold">JEANS & CO</li>
                        <li class="pl-4 font-semibold">PLAYA</li>
                        <li class="pl-4 font-semibold">FIESTA</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>    
                </div> 
                <div class="flex px-2 fixed w-full z-50 bg-white shadow-2xl border-t py-6" @mouseleave="view.estado2 = false" :class="{ 'hidden': !view.estado2 }">
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">GIRL</li>
                        <li class="pl-4 font-semibold text-xs">BEBE (TALLA 14-18)</li>
                        <li class="pl-4 font-semibold">GATEADOR (TALLA 17-20)</li>
                        <li class="pl-4 font-semibold">PRIMEROS PASOS (TALLA 18-21)</li>
                        <li class="pl-4 font-semibold">CAMINANTE (TALLA 20-27)</li>
                        <li class="pl-4 font-semibold">KID (TALLA 28-38)</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">boy</li>
                        <li class="pl-4 font-semibold text-xs">BEBE (TALLA 14-18)</li>
                        <li class="pl-4 font-semibold">GATEADOR (TALLA 17-20)</li>
                        <li class="pl-4 font-semibold">PRIMEROS PASOS (TALLA 18-21)</li>
                        <li class="pl-4 font-semibold">CAMINANTE (TALLA 20-27)</li>
                        <li class="pl-4 font-semibold">KID (TALLA 28-38)</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">categorías</li>
                        <li class="pl-4 font-semibold text-xs">ZAPATILLAS</li>
                        <li class="pl-4 font-semibold">BOTINES</li>
                        <li class="pl-4 font-semibold">ZAPATOS</li>
                        <li class="pl-4 font-semibold">BOTAS</li>
                        <li class="pl-4 font-semibold">SANDALIAS</li>
                        <li class="pl-4 font-semibold">HAWAIANAS Y AQUAS</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">ocasión</li>
                        <li class="pl-4 font-semibold text-xs">VESTIR</li>
                        <li class="pl-4 font-semibold">URBANO</li>
                        <li class="pl-4 font-semibold">OUTDOOR</li>
                        <li class="pl-4 font-semibold">PLAYA</li>
                        <li class="pl-4 font-semibold">DEPORTIVO</li>
                        <li class="pl-4 font-semibold">LUCES & RUEDAS</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul> 
                </div> 
                <div class="flex px-2 fixed w-full z-50 bg-white shadow-2xl border-t py-6" @mouseleave="view.estado3 = false" :class="{ 'hidden': !view.estado3 }">
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">GIRL</li>
                        <li class="pl-4 font-semibold text-xs">NEWBORN (0-9 MESES)</li>
                        <li class="pl-4 font-semibold">INFANT (3-36 MESES)</li>
                        <li class="pl-4 font-semibold">KID (2-12 AÑOS)</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">boy</li>
                        <li class="pl-4 font-semibold text-xs">NEWBORN (0-9 MESES)</li>
                        <li class="pl-4 font-semibold">INFANT (3-36 MESES)</li>
                        <li class="pl-4 font-semibold">KID (2-12 AÑOS)</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">categorías</li>
                        <li class="pl-4 font-semibold text-xs">ROPA INTERIOR BABY</li>
                        <li class="pl-4 font-semibold">ROPA INTERIOR KID</li>
                        <li class="pl-4 font-semibold">PIJAMAS Y PANTUFLAS</li>
                        <li class="pl-4 font-semibold">BOLSAS Y MOCHILAS</li>
                        <li class="pl-4 font-semibold">VERANO</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">ocasión</li>
                        <li class="pl-4 font-semibold text-xs">OCASIÓN</li>
                        <li class="pl-4 font-semibold">DEPORTIVO</li>
                        <li class="pl-4 font-semibold">PLAYA</li>
                        <li class="pl-4 font-semibold">EVERY DAY</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul> 
                </div> 
                <div class="flex px-2 fixed w-full z-50 pb-24 bg-white shadow-2xl border-t py-6" @mouseleave="view.estado4 = false" :class="{ 'hidden': !view.estado4 }">
                    <ul class="text-xs text-azul px-10 uppercase leading-9">
                        <li class="text-azul font-semibold text-xl border-b-2 border-indigo-900 pr-48">CUIDADO DEL BEBÉ</li>
                        <li class="pl-4 font-semibold text-xs">PAÑALES</li>
                        <li class="pl-4 font-semibold">TOALLITAS HÚMEDAS</li>
                        <li class="font-bold pl-4">ver todo</li>
                    </ul>
                </div> 
        </div>
    </div> 
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import Carrito from '@/components/Home/Carrito';
import Menu from '@/components/Home/Menu';
export default {
    name:'Navbar',
    components:{
        Carrito,
        Menu,
    },
    data () {
    return {
        view: {
            atTopOfPage: true,
            estado: false,
            estado2: false,
            estado3: false,
            estado4: false,
            }
        }
    },
    computed: {
        ...mapState(['carrito','menu','filtros'])
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        ...mapMutations(['mostrarCarrito','ocultarCarrito','mostrarMenu','ocultarMenu']),
        carritoE(){
            this.mostrarCarrito()    
        },
        handleScroll(){
            // cambiaremos el valor de atTopOfPage cuando se mueva la pagina
            if(window.pageYOffset>0){
                // se mueve
                if(this.view.atTopOfPage) this.view.atTopOfPage = false
            }else{
                // no se mueve
                if(!this.view.atTopOfPage) this.view.atTopOfPage = true
                }
        },

    }
}
</script>