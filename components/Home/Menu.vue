<template>
    <div class="w-3/4 h-full z-50 bg-white fixed top-0 overflow-y-auto opacity-100" style="box-shadow: 0px 10px 10px 1px black;">
    <div class="flex flex-col py-4 bg-white ">
        <a class="uppercase text-azul text-md font-semibold p-4" href="#" @click.prevent="mostrar_1">ropa<i class="fas fa-angle-right absolute right-0 pr-4"></i></a>
        <a class="uppercase text-azul text-md font-semibold p-4" href="#" @click.prevent="mostrar_2">zapatos<i class="fas fa-angle-right absolute right-0 pr-4"></i></a>
        <a class="uppercase text-azul text-md font-semibold p-4" href="#" @click.prevent="mostrar_3">accesorios<i class="fas fa-angle-right absolute right-0 pr-4"></i></a>
        <a class="uppercase text-azul text-md font-semibold p-4" href="#" @click.prevent="mostrar_4">cuidados del bebé<i class="fas fa-angle-right absolute right-0 pr-4"></i></a>
        <a class="uppercase text-azul text-md font-semibold p-4 bg-plomo" >usuario</a>
        <a class="capitalize text-azul text-md font-semibold p-4" ><i class="fas fa-truck pr-2"></i>mis pedidos</a>
        <a class="uppercase text-azul text-md font-semibold p-4 bg-plomo" >SÍGUENOS EN</a>
        <ul class="flex items-center justify-start pt-4 border-b pb-4">
            <li><a href="#"><i class="fab fa-facebook-f px-6 text-gray-500 text-lg hover:text-azul"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram px-6 text-gray-500 text-lg hover:text-azul"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube px-6 text-gray-500 text-lg hover:text-azul"></i></a></li>
        </ul>
    </div>
    <div>
        <div class="fixed top-0 w-full h-screen z-50 bg-white shadow-lg border-t overflow-y-auto animate__animated animate__slideInLeft" :class="[{'hidden': !view.mostrar1}]">
            <div @click="mostrar_1" class="pl-4 text-white font-semibold text-md bg-azul py-2"><i class="fas fa-arrow-left pr-2"></i>Volver</div>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">GIRL</li>
                <li class="pl-4 font-semibold">newborn (0-9 meses)</li>
                <li class="pl-4 font-semibold">infant(3-36 meses)</li>
                <li class="pl-4 font-semibold">kid (2-12 años)</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">boy</li>
                <li class="pl-4 font-semibold">newborn (0-9 meses)</li>
                <li class="pl-4 font-semibold">infant(3-36 meses)</li>
                <li class="pl-4 font-semibold">kid (2-12 años)</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">categorías</li>
                <li class="pl-4 font-semibold">POLOS</li>
                <li class="pl-4 font-semibold">BLUSAS</li>
                <li class="pl-4 font-semibold">POLERONES</li>
                <li class="pl-4 font-semibold">PANTALONES</li>
                <li class="pl-4 font-semibold">VESTIDOS</li>
                <li class="pl-4 font-semibold">SWEATERS</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">ocasión</li>
                <li class="pl-4 font-semibold">VESTIR</li>
                <li class="pl-4 font-semibold">EVERYDAY</li>
                <li class="pl-4 font-semibold">JEANS & CO</li>
                <li class="pl-4 font-semibold">PLAYA</li>
                <li class="pl-4 font-semibold">FIESTA</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>    
        </div> 
        <div class="fixed top-0 w-full h-screen z-50 bg-white shadow-lg border-t overflow-y-auto animate__animated animate__slideInLeft" :class="[{'hidden': !view.mostrar2}]">
            <div @click="mostrar_2" class="pl-4 text-white font-semibold text-md bg-azul py-2"><i class="fas fa-arrow-left pr-2"></i>Volver</div>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">GIRL</li>
                <li class="pl-4 font-semibold">BEBE (TALLA 14-18)</li>
                <li class="pl-4 font-semibold">GATEADOR (TALLA 17-20)</li>
                <li class="pl-4 font-semibold">PRIMEROS PASOS (TALLA 18-21)</li>
                <li class="pl-4 font-semibold">CAMINANTE (TALLA 20-27)</li>
                <li class="pl-4 font-semibold">KID (TALLA 28-38)</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">boy</li>
                <li class="pl-4 font-semibold">BEBE (TALLA 14-18)</li>
                <li class="pl-4 font-semibold">GATEADOR (TALLA 17-20)</li>
                <li class="pl-4 font-semibold">PRIMEROS PASOS (TALLA 18-21)</li>
                <li class="pl-4 font-semibold">CAMINANTE (TALLA 20-27)</li>
                <li class="pl-4 font-semibold">KID (TALLA 28-38)</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">categorías</li>
                <li class="pl-4 font-semibold">ZAPATILLAS</li>
                <li class="pl-4 font-semibold">BOTINES</li>
                <li class="pl-4 font-semibold">ZAPATOS</li>
                <li class="pl-4 font-semibold">BOTAS</li>
                <li class="pl-4 font-semibold">SANDALIAS</li>
                <li class="pl-4 font-semibold">HAWAIANAS Y AQUAS</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">ocasión</li>
                <li class="pl-4 font-semibold">VESTIR</li>
                <li class="pl-4 font-semibold">URBANO</li>
                <li class="pl-4 font-semibold">OUTDOOR</li>
                <li class="pl-4 font-semibold">PLAYA</li>
                <li class="pl-4 font-semibold">DEPORTIVO</li>
                <li class="pl-4 font-semibold">LUCES & RUEDAS</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul> 
        </div> 
        <div class="fixed top-0 w-full h-screen z-50 bg-white shadow-lg border-t overflow-y-auto animate__animated animate__slideInLeft" :class="[{'hidden': !view.mostrar3}]">
            <div @click="mostrar_3" class="pl-4 text-white font-semibold text-md bg-azul py-2"><i class="fas fa-arrow-left pr-2"></i>Volver</div>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">GIRL</li>
                <li class="pl-4 font-semibold">NEWBORN (0-9 MESES)</li>
                <li class="pl-4 font-semibold">INFANT (3-36 MESES)</li>
                <li class="pl-4 font-semibold">KID (2-12 AÑOS)</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">boy</li>
                <li class="pl-4 font-semibold">NEWBORN (0-9 MESES)</li>
                <li class="pl-4 font-semibold">INFANT (3-36 MESES)</li>
                <li class="pl-4 font-semibold">KID (2-12 AÑOS)</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">categorías</li>
                <li class="pl-4 font-semibold">ROPA INTERIOR BABY</li>
                <li class="pl-4 font-semibold">ROPA INTERIOR KID</li>
                <li class="pl-4 font-semibold">PIJAMAS Y PANTUFLAS</li>
                <li class="pl-4 font-semibold">BOLSAS Y MOCHILAS</li>
                <li class="pl-4 font-semibold">VERANO</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
            <ul class="text-md text-azul uppercase leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">ocasión</li>
                <li class="pl-4 font-semibold">OCASIÓN</li>
                <li class="pl-4 font-semibold">DEPORTIVO</li>
                <li class="pl-4 font-semibold">PLAYA</li>
                <li class="pl-4 font-semibold">EVERY DAY</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul> 
        </div> 
        <div class="fixed top-0 w-full h-screen z-50 bg-white shadow-lg border-t overflow-y-auto animate__animated animate__slideInLeft" :class="[{'hidden': !view.mostrar4}]">
            <div @click="mostrar_4" class="pl-4 text-white font-semibold text-md bg-azul py-2"><i class="fas fa-arrow-left pr-2"></i>Volver</div>
            <ul class="text-md text-azul uppercase h-screen leading-9">
                <li class="pl-4 text-azul font-semibold text-md bg-plomo">CUIDADO DEL BEBÉ</li>
                <li class="pl-4 font-semibold">PAÑALES</li>
                <li class="pl-4 font-semibold">TOALLITAS HÚMEDAS</li>
                <li class="pl-4 font-semibold">ver todo</li>
            </ul>
        </div> 
    </div>
  </div>
</template>
<script>
import { mapMutations} from 'vuex'
export default {
    name:'Menu',
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
        ...mapMutations(['mostrarMenu','ocultarMenu']),
        mostrar_1(){
            this.view.mostrar1 = ! this.view.mostrar1
        },
        mostrar_2(){
            this.view.mostrar2 = ! this.view.mostrar2
        },
        mostrar_3(){
            this.view.mostrar3 = ! this.view.mostrar3
        },
        mostrar_4(){
            this.view.mostrar4 = ! this.view.mostrar4
        },
    }
}
</script>