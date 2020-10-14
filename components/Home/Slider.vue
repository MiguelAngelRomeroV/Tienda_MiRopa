<template>
    <div class="lg:py-4 py-2 lg:px-10 px-4">
      <vue-glide :perView="1" :bound="true" :peek="0" :autoplay="8000" :animationDuration="1000" :bullet="true">
         <vue-glide-slide>
            <img class="w-full xs:hidden sm:block" src="https://collokype.vteximg.com.br/arquivos/CyPe_CONTINGENCIA_CierreTotal_1920x500_06-0605.jpg?v=637244017382530000" alt="Imagen1">
            <img class="w-full sm:hidden xs:block" src="https://collokype.vteximg.com.br/arquivos/CyPe_Disculpas_590x590_02.jpg?v=637263812352970000" alt="Imagen1">
         </vue-glide-slide>
         <vue-glide-slide>
            <img class="w-full xs:hidden sm:block" src="https://collokype.vteximg.com.br/arquivos/CyPe_PanalesBambo_1920x500_02.png?v=637251563468430000" alt="Imagen2">
            <img class="w-full sm:hidden xs:block" src="https://collokype.vteximg.com.br/arquivos/Cy_Otono3_MidSeason_590x590-2603.jpg?v=637227409251570000" alt="Imagen2">
         </vue-glide-slide>
         <vue-glide-slide>
            <img class="w-full xs:hidden sm:block" src="https://collokype.vteximg.com.br/arquivos/CyPe_WinterSpecial_Ppal_1920x500-2505.jpg?v=637260272452670000" alt="Imagen3">
            <img class="w-full sm:hidden xs:block" src="https://collokype.vteximg.com.br/arquivos/CyPe_WinterSpecial_Ppal_590x590-2505.jpg?v=637260272439700000" alt="Imagen3">
         </vue-glide-slide>
         <vue-glide-slide>
            <img class="w-full xs:hidden sm:block" src="https://collokype.vteximg.com.br/arquivos/Cy_Otono3_MidSeason_1920x500-2603.jpg?v=637227409266570000" alt="Imagen4">
            <img class="w-full sm:hidden xs:block" src="https://collokype.vteximg.com.br/arquivos/CyPe_Disculpas_590x590_02.jpg?v=637263812352970000" alt="Imagen1">
         </vue-glide-slide>
        <template slot="control">
            <button data-glide-dir="<"><i class="fas fa-angle-left"></i></button>
            <button data-glide-dir=">"><i class="fas fa-angle-right"></i></button>
        </template>
        <template slot="control-nav">
            <button data-glide-dir="<"><i class="fas fa-angle-left"></i></button>
            <button data-glide-dir=">"><i class="fas fa-angle-right"></i></button>
        </template>
      </vue-glide>
    </div>
</template>
<script>
export default {
    name:'slider'
}
</script>