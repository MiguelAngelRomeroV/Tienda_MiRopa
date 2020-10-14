<template>
    <div>
        <Navbar />
        <div class="py-8 xs:px-2 sm:px-4 lg:px-12 mx-2">
            <h1 class="uppercase text-azul text-3xl font-bold">CARRITO DE COMPRAS</h1>
            <div class="border-b-4 border-indigo-900 xs:w-1/3 md:w-1/6 lg:w-1/12"></div>
            <Vacio class="hidden"/>
            <Productos />
        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/Compra/Navbar';
import Footer from '@/components/Compra/Footer';
import Vacio from '@/components/Compra/Vacio';
import Productos from '@/components/Compra/Productos';
export default {
    name:'Compra',
    components:{
        Navbar,
        Footer,
        Vacio,
        Productos
    }
}
</script>