<template>
    <div>
        <div class="uppercase py-4 w-full bg-plomo text-azul font-semibold text-xs px-12">
            <a href="#">Mi Ropa Peru</a> /
            <a href="#">Zapatos</a> /
            <a href="#" class="font-bold">Zapatos</a>
        </div>
        <Producto />
        <Slider />
        <Descripcion />
        <Similares />
    </div>
</template>
<script>
import 'assets/css/glide-product.css';
import Slider from '@/components/Product/Slider';
import Producto from '@/components/Product/Producto';
import Descripcion from '@/components/Product/Descripcion';
import Similares from '@/components/Product/Similares';
export default {
    name: 'single',
    components:{
        Slider,
        Producto,
        Descripcion,
        Similares
        }
    }
</script>
<style>
   .producto > img
   {
       transition: all .4s ease;
       width:100%; 
   }

   .product:hover .producto > img {
    transform:scale(1.2);
    }
</style>