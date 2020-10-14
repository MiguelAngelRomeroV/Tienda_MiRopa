<template>
    <div>
        <div class="uppercase py-4 w-full bg-plomo text-azul font-semibold text-xs px-12" :class="{'opacity-25': this.filtros || this.menu || this.carrito}">
            <a href="#">Mi Ropa Peru</a> /
            <a href="#">Zapatos</a> /
            <a href="#" class="font-bold">Zapatos</a>
        </div>
        <div class="lg:flex xs:px-1 sm:px-2 md:px-10 py-4">
            <Filtros v-click-outside="this.ocultarFiltros" class="lg:block" :class="{'xs:hidden lg:block': !this.filtros, 'sombra animate__animated animate__slideInLeft w-3/4 bg-white fixed top-0 left-0': this.filtros }" />
            <button :class="{'opacity-25': this.filtros || this.menu || this.carrito}" @click="this.mostrarFiltros" class="xs:block lg:hidden uppercase text-white font-semibold text-base p-2 w-full bg-azul mb-4">Filtros</button>
            <div class="lg:w-4/5 lg:px-10" :class="{'opacity-25': this.filtros || this.menu || this.carrito}">
                <Mostrar />
                <AllProducts />
                <Mostrar />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';
import Filtros from '@/components/Products/Filtros';
import AllProducts from '@/components/Products/AllProducts';
import Mostrar from '@/components/Products/Mostrar';
export default {
    name: 'Products',
    components:{
        Filtros,
        AllProducts,
        Mostrar
    },
    computed:{
        ...mapState(['filtros','carrito','menu'])
    },
    methods:{
        ...mapMutations(['ocultarFiltros','mostrarFiltros']),
    }
}
</script>
<style>
   .sombra{
      box-shadow: 0px 10px 10px 1px black;
    }
   .producto > img
   {
       transition: all .4s ease;
       width:100%; 
   }

   .product:hover .producto > img {
    transform:scale(1.2);
    }
</style>