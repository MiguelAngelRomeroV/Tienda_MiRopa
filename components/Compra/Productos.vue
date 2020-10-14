<template>
    <div class="py-10 xs:px-1 sm:px-4 md:px-10">
        <table class="w-full text-gray-500">
            <thead class="border-b uppercase">
                <th class="flex justify-start lg:w-1/4">Producto</th>
                <th class="text-center lg:w-1/4">Precio</th>
                <th class="lg:w-1/4">Cantidad</th>
                <th class="lg:w-1/4">Total</th>
            </thead>
            <tbody>
                <tr class="text-black font-semibold tex-xs border-b">
                    <td class="flex items-center">
                    <img class="w-10" src="https://colgrampe.vteximg.com.br/arquivos/ids/429210-200-200/27010250I20_1.jpg" alt="">
                    <p class="xs:text-sm lg:text-base">Zapatilla azul talla 17</p></td>
                    <td class="xs:text-sm lg:text-base text-center text-gray-500"><p class="text-sm">De <a class="line-through">S/. 99.90</a></p><p>Por <a class="text-azul font-bold">S/. 69.93</a></p><i class="fas fa-question-circle text-blue-500 text-xs"></i></td>
                    <td class="xs:text-sm lg:text-base text-center"><i class="fas fa-plus-circle pr-2 text-gray-500"></i><input class="xs:w-5 md:w-10 text-gray-600 text-center border rounded" type="text" value="1"><i class="pl-2 fas fa-minus-circle text-gray-500"></i></td>
                    <td class="xs:text-sm lg:text-base text-azul font-bold text-center">S/. 69.93<i class="fas fa-times text-gray-500 float-right hover:text-red-800"></i></td>
                </tr>
            </tbody>
        </table>
        <div class="sm:flex w-full justify-end py-4">
            <div class="xs:w-full lg:w-1/3 justify-end">
                <button @click="ingresoCupon" :class="{'hidden':cupon}" class="hover:bg-blue-500 bg-azul text-sm text-white rounded-full py-2 px-3"><i class="transform rotate-45 fas fa-ticket-alt pr-2"></i>Sumar cupón de descuento</button>
                <div class="text-gray-600 text-xs py-2" :class="{'hidden':!cupon}">
                    <p class="py-2">Cupón de descuento</p>
                    <input type="text" placeholder="Código" class="shadow-lg border border-gray-500 py-2 pl-2">
                    <button class="shadow-lg border border-gray-500 absolute py-2 px-3 hover:border-indigo-900 text-black hover:bg-azul hover:text-white bg-gray-300 text-xs">Sumar</button>
                </div>
            </div>
            <div class="border xs:w-full lg:w-1/2 xl:w-1/3 xs:my-4 md:ml-10 text-gray-800 text-sm font-bold">
                <div class="flex border-b py-2 justify-end">
                <p class="text-right w-2/3">Subtotal</p>
                <p class="text-right w-1/3 xs:px-2 md:px-4">S/. 99.90</p>
                </div> 		
                <div class="flex border-b py-2 justify-end">
                <p class="text-right w-2/3">Descuentos</p>
                <p class="text-right w-1/3 xs:px-2 md:px-4">S/. -29.97</p>
                </div> 		
                <div class="flex border-b py-2 text-azul font-bold text-lg justify-end">
                <p class="text-right w-2/3">TOTAL</p>
                <p class="text-right w-1/3 xs:px-2 md:px-4">S/. 69.93</p>
                </div>
            </div>
        </div>
        <div class="flex justify-end items-center pt-2">
            <a href="#" class="uppercase hover:text-azul text-gray-600 px-2"><i class="fas fa-plus-circle pr-2"></i>Elegir más productos</a>	
            <button class="bg-azul text-white py-2 xs:px-2 md:px-3 hover:bg-gray-500"><a href="/finalizar">Finalizar compra</a></button>
        </div>
    </div>
</template>
<script>
export default {
    name:'Productos',
    data(){
        return{
            cupon:false
        }
    },
    methods:{
        ingresoCupon(){
            this.cupon = !this.cupon;
        }
    }
}
</script>