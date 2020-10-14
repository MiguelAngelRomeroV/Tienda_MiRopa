<template>
    <div class="flex md:px-10 lg:px-24 xs:px-4 xl:px-32 pb-10">
            <div class="md:w-1/2 lg:w-1/3">
                <h3 class="text-azul text-2xl font-semibold pb-4">Los clientes también miraron</h3>
                <div href="#">
                    <div class="flex-col sm:w-2/3 mx-2 my-4 border border-gray-400 hover:border-indigo-900 border-3 product">
                        <div class="relative flex-col flex-wrap">
                            <div class="producto overflow-hidden">
                                <img class="" src="https://colgrampe.vteximg.com.br/arquivos/ids/419327-400-400/21010250I20_1.jpg" alt="">
                            </div>
                            <div class="rounded-full bg-azul text-amarillo w-16 h-16 absolute top-0 right-0 mx-2 my-2">
                                <div class="text-center flex-col py-2 leading-6">
                                    <p class="font-bold text-2xl uppercase">20%</p>
                                    <p class="text-base font-semibold uppercase">dcto</p>
                                </div>
                            </div>
                        </div>
                        <a href="#"><p class="text-center text-gray-800 font-semibold py-4">Zapato Navi</p></a>
                        <p class="uppercase text-center pt-4 line-through text-gray-500">S/. 99.90</p>
                        <p class="uppercase text-center text-2xl font-semibold text-azul">S/. 79.90</p>
                        <div class="p-4">
                            <button class="uppercase bg-azul text-sm text-white p-3 w-full"><a href="/producto">ver producto</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'Similares'
}
</script>