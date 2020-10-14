<template>
    <div>
        <Navbar />
        <div class="py-8 xs:px-2 sm:px-4 lg:px-12 mx-2 lg:mx-2">
            <h1 class="uppercase text-azul text-3xl font-bold">finalizar la compra</h1>
            <div class="border-b-4 border-indigo-900 xs:w-1/3 md:w-1/6 lg:w-1/12"></div>
            <div class="md:flex pt-8">
                <div class="xs:w-full md:w-1/2 lg:w-1/3 md:px-2 no-registrado hidden">
                    <h1 class="text-azul text-2xl pb-2 border-b"><i class="fas fa-user pr-2"></i>Identificación</h1>
                    <p class="text-sm pt-2 text-gray-600 leading-4">Solicitamos únicamente la información esencial para la finalización de la compra.</p>
                    <form action="#" class="text-sm pt-2 text-gray-600">
                        <label for="correo" class="block">Correo</label>
                        <input id="correo" type="email" class="w-full px-2 py-2 shadow-inner border rounded">
                        <div class="flex pt-2">
                            <div class="w-1/2 pr-2">
                                <label for="nombre" class="block">Nombre</label>
                                <input id="nombre" type="text" class="px-2 w-full py-2 shadow-inner border rounded">
                            </div>
                            <div class="w-1/2 pl-2">
                                <label for="apellido" class="block">Apellido</label>
                                <input id="apellido" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                            </div>
                        </div>
                        <div class="flex pt-2">
                            <div class="w-1/2 pr-2">
                                <label for="dni" class="block">Documento de identidad</label>
                                <input id="dni" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                            </div>
                            <div class="w-1/2 pl-2">
                                <label for="telefono" class="block">Teléfono / Móvil</label>
                                <input id="telefono" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                            </div>
                        </div>
                        <div class="flex items-center pt-2 w-full">
                            <input type="checkbox">
                            <p class="pl-2">Quiero recibir el newsletter con promociones.</p>
                        </div>
                        <div class="flex w-full justify-end pt-2">
                            <button class="hover:bg-gray-600 py-2 px-4 bg-azul text-white text-base">Ir para la Entrega</button>
                        </div>
                    </form>
                </div>
                <div class="xs:w-full md:w-1/2 lg:w-1/3 md:px-2 registrado">
                    <div class="border-2 text-gray-600 rounded">
                         <div class="relative border-b pb-2 py-1 px-2 flex items-center">
                            <i class="fas fa-user pr-2"></i><p>Identificación</p>
                            <button class="bg-plomo absolute right-0 top-0"><i class="fas fa-edit text-azul text-xs opacity-75 p-2"></i></button>
                         </div>
                         <p class="text-sm px-2 py-2">probandocolloky@hotmail.com</p>
                         <p class="text-sm px-2">administrador collocky</p>
                         <p class="text-sm px-2">951 215 484</p>
                    </div>
                </div>
                <div class="xs:w-full md:w-1/2 lg:w-1/3 md:px-2 lg:mx-6 xs:mt-4 md:mt-0 hidden sin-datos-envio-ni-pago">
                    <div class="border-2 text-gray-600 rounded">
                         <p class="border-b pb-2 py-1 px-2"><i class="fas fa-home pr-2"></i>Dirección de envío</p>
                         <p class="text-sm px-2 py-1">Aún falta llenar con los datos</p>
                    </div>
                    <div class="border-2 text-gray-600 rounded my-4">
                         <div class="relative border-b pb-2 py-1 px-2 flex items-center">
                            <i class="far fa-credit-card pr-2"></i><p>Pago</p>
                            <button class="bg-plomo absolute right-0 top-0"><i class="fas fa-edit text-azul text-xs opacity-75 p-2"></i></button>
                         </div>
                         <p class="text-sm px-2 py-4">Aún falta llenar con los datos</p>
                    </div>
                </div>
                <div class="xs:w-full md:w-1/2 lg:w-1/3 md:px-2 formulario-direccion hidden">
                    <h1 class="text-azul text-2xl pb-2 border-b"><i class="fas fa-home pr-2"></i>Dirección de envío</h1>
                    <form action="#" class="text-sm pt-2 text-gray-600">
                        <label for="direccion" class="block">Direccion *</label>
                        <input id="direccion" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                        <div class="flex pt-2">
                            <div class="w-1/2 pr-2">
                                <label for="numeroCasa" class="block">Número *</label>
                                <input id="numeroCasa" type="text" class="px-2 w-full py-2 shadow-inner border rounded">
                            </div>
                            <div class="w-1/2 pl-2">
                                <label for="piso" class="block">Piso o Departamento (ej: 2A)</label>
                                <input id="piso" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                            </div>
                        </div>
                        <label for="direccion" class="block">Referencia</label>
                        <input id="direccion" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                        <div class="flex pt-2">
                            <div class="w-1/2 pr-2">
                                <label for="departamento" class="block">Departamento *</label>
                                <select class="border shadow-inner rounded w-full py-2" id="departamento">
                                    <option value="">Lima</option>
                                    <option value="">Callao</option>
                                </select>
                            </div>
                            <div class="w-1/2 pl-2">
                                <label for="provincia" class="block">Provincia *</label>
                                <select class="border shadow-inner rounded w-full py-2" id="provincia">
                                    <option value="">Lima</option>
                                    <option value="">Callao</option>
                                </select>
                            </div>
                        </div>
                        <label for="distrito" class="block">Distrito *</label>
                        <select class="border shadow-inner rounded w-full py-2" id="distrito">
                            <option value="">Lima</option>
                            <option value="">Ancon</option>
                            <option value="">Ate</option>
                            <option value="">Barranco</option>
                            <option value="">Breña</option>
                            <option value="">Carabayllo</option>
                        </select>

                        <label for="persona" class="block">Nombre de la persona que va a recibir *</label>
                        <input id="persona" type="text" class="w-full px-2 py-2 shadow-inner border rounded">
                        
                        <div class="pt-4">
                            <label for="tipoEnvio" class="block text-xs font-bold">Elija el tipo de envío</label>
                            <select id="tipoEnvio" class="py-1 mt-1 bg-gray-200 rounded text-azul w-full shadow-inner">
                                <option value="">Despacho a Domicilio Regular - S/. 8.90 -</option>
                            </select>
                        </div>
                        
                        <div class="flex w-full justify-end pt-4">
                            <button class="hover:bg-gray-600 py-2 px-4 bg-azul text-white text-base">Ir al Pago</button>
                        </div>
                    </form>
                     <div class="border-2 text-gray-600 rounded mt-6">
                         <div class="relative border-b pb-2 py-1 px-2 flex items-center">
                            <i class="far fa-credit-card pr-2"></i><p>Pago</p>
                            <button class="bg-plomo absolute right-0 top-0"><i class="fas fa-edit text-azul text-xs opacity-75 p-2"></i></button>
                         </div>
                         <p class="text-sm px-2 py-4">Aún falta llenar con los datos</p>
                    </div>
                </div>
                <div class="xs:w-full md:w-1/2 lg:w-1/3 md:px-2 xs:my-4 md:my-0 dirección-completa">
                    <div class="border-2 text-gray-600 rounded">
                         <div class="relative border-b pb-2 py-1 px-2 flex items-center">
                            <i class="fas fa-home pr-2"></i><p>Dirección de envío</p>
                            <button class="bg-plomo absolute right-0 top-0"><i class="fas fa-edit text-azul text-xs opacity-75 p-2"></i></button>
                         </div>
                         <ul class="border-b pb-2">
                            <li class="text-sm px-2">sdasdas, adsd, sdsd - Lurigancho</li>
                            <li class="text-sm px-2">Lima - Lima - Perú</li>
                         </ul>
                         <p class="text-sm px-2 font-semibold">Envio: Despacho a Domicilio Regular - - S/. 8.90</p>
                         <div class="px-2 py-2">
                            <button class="font-semibold text-sm w-full mb-2 text-azul rounded border border-dashed border-indigo-300 hover:border-indigo-900">Elegir un nuevo tipo de envio</button>
                         </div>
                    </div>
                </div>
                <div class="xs:w-full md:w-1/2 lg:w-1/3 md:px-2 lg:px-12 xs:mt-4 md:mt-0 hidden">
                    <div class="bg-plomo rounded">
                        <h2 class="text-gray-600 font-bold border-b pb-2 px-2">Resumen de la compra</h2>
                        <div class="bg-white flex pt-4 relative">
                            <img class="w-10" src="https://colgrampe.vteximg.com.br/arquivos/ids/429210-200-200/27010250I20_1.jpg" alt="">
                            <div class="rounded-full mt-3 h-4 w-4 border border-green-600 bg-green-300 absolute top-0 left-0"><p class="text-center text-xs text-green-900">1</p></div>
                            <p class="font-semibold text-gray-800 px-2">Zapatilla azul talla 17</p>
                            <p class="text-gray-600 font-bold text-sm absolute bottom-0 right-0 mr-2">S/. 69.93</p>
                        </div>
                        <a href="#" class="text-sm text-azul font-semibold flex justify-end items-center pt-4 px-4"><i class="fas fa-shopping-cart mr-2"></i>Volver a carrito</a>
                        <div class="px-4 py-2">
                            <div class="flex text-gray-600 text-sm font-semibold">
                            <div class="flex w-2/3 justify-end">
                                Subtotal
                            </div>
                            <div class="flex w-1/3 justify-end">
                            S/. 99.90
                            </div>
                        </div>
                        <div class="flex text-gray-600 text-sm font-semibold">
                            <div class="flex w-2/3 justify-end">
                                Descuentos
                            </div>
                            <div class="flex w-1/3 justify-end">
                            	S/. -29.97
                            </div>
                        </div>
                        <div class="flex text-green-600 text-sm font-semibold border-t">
                            <div class="flex w-2/3 justify-end">
                                Total	
                            </div>
                            <div class="flex w-1/3 justify-end">
                            	S/. 69.93
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:px-2">
                <h2 class="text-azul text-2xl pb-2 border-b"><i class="far fa-credit-card pr-2"></i>Pago</h2>
                    <div class="md:w-1/2 lg:w-1/3 pt-4" :class="{'hidden':!cupon}">
                        <p class="text-azul font-semibold hover:underline text-sm">Utilizar un cupón de regalo</p>
                        <div class="bg-plomo px-2">
                            <div class="flex py-2 items-center">
                                <label for="codigo"><p class="text-xs text-gray-800 pr-2">Código del cupón de regalo</p></label>
                                <input id="codigo" type="text" class="rounded border py-1 px-2 text-gray-600">
                            </div>
                            <div class="pb-2">
                                <button class="py-2 bg-gray-400 hover:bg-gray-600 shadow-inner rounded text-xs hover:text-white border px-2 text-gray-800">Sumar</button>
                            </div>
                        </div>
                    </div>
                   <div class="flex flex-wrap">
                        <div class="xs:w-full md:w-1/2 lg:w-1/5 flex flex-col text-azul text-sm font-semibold pt-4">
                            <a href="" @click.prevent="mostrarCupon" :class="{'hidden':cupon}" class="py-6 px-3 hover:bg-plomo border rounded">Utilizar un cupón de regalo</a>
                            <a href="" class="py-6 px-3 hover:bg-plomo border rounded">Depósitos y Transferencias</a>
                            <a href="" class="py-6 px-3 hover:bg-plomo border rounded">Tarjeta de crédito</a>
                        </div>
                        <div class="xs:w-full md:w-1/2 md:px-4 xs:my-4 md:mt-4">
                            <div class="bg-plomo p-4 relative">
                                <div class="text-xs mx-2 flex items-center text-gray-800 bg-gray-400 py-4 px-2 rounded border absolute right-0">
                                    <p class="px-2 xs:hidden md:block">Ambiente Seguro</p>
                                    <i class="fas fa-lock text-2xl"></i>
                                </div>
                                <form class="text-sm font-semibold text-gray-600" action="">
                                    <label for="numeroT">Número</label>
                                    <input class="xs:w-3/4 md:w-1/2 block px-2 py-2 border rounded" type="text" id="numeroT">
                                    <div class="flex mt-2">
                                        <div class="flex flex-col justify-center px-1 pt-1">
                                            <button class="bg-white border px-2 rounded text-2xl text-azul"><i class="fab fa-cc-visa"></i></button>
                                            <input class="mx-4 mt-1" type="radio" name="tipoT">
                                        </div>
                                        <div class="flex flex-col justify-center px-1 pt-1">
                                            <button class="bg-white border px-2 rounded text-2xl text-blue-500"><i class="fab fa-cc-amex"></i></button>
                                            <input class="mx-4 mt-1" type="radio" name="tipoT">
                                        </div>
                                        <div class="flex flex-col justify-center px-1 pt-1">
                                            <button class="bg-white border px-2 rounded text-2xl text-purple-900"><i class="fab fa-cc-diners-club"></i></button>
                                            <input class="mx-4 mt-1" type="radio" name="tipoT">
                                        </div>
                                        <div class="flex flex-col justify-center px-1 pt-1">
                                            <button class="bg-white border px-2 rounded text-2xl text-red-600"><i class="fab fa-cc-mastercard"></i></button>
                                            <input class="mx-4 mt-1" type="radio" name="tipoT">
                                        </div>
                                    </div>
                                    <div class="py-4">
                                        <select class="xs:w-3/4 md:w-1/2 rounded border py-2 px-2" id="pagar">
                                            <option value="">Total - S/. 56.84</option>
                                        </select>
                                    </div>

                                    <label for="nombreT">Nombre y Apellido como figura en la tarjeta</label>
                                    <input type="text" class="xs:w-full md:w-1/2 mt-2 block border py-2 px-2 rounded">

                                    <div class="flex py-4">
                                        <label for="nombreT">Fecha de Vencimiento</label>
                                        <select type="text" class="mx-2 block border py-2 px-2 rounded">
                                            <option value="">MM</option>
                                        </select>
                                        /
                                        <select type="text" class="mx-2 block border py-2 px-2 rounded">
                                            <option value="">AA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="codigoS">Código de Seguridad</label>
                                        <input  class="py-2 px-3 rounded border w-24" type="text" id="codigoS">
                                    </div>
                                </form>
                            </div> 
                        </div> 
                        <div class="xs:w-full md:w-2/3 md:my-6 md:mx-auto lg:w-1/4 lg:mx-4 lg:mt-4 bg-plomo rounded">
                            <h2 class="flex justify-end  mt-2 text-gray-600 font-bold border-b pb-2 px-2">Resumen de la compra</h2>
                            <div class="bg-white flex px-4 pt-4 relative">
                                <img class="w-10" src="https://colgrampe.vteximg.com.br/arquivos/ids/429210-200-200/27010250I20_1.jpg" alt="">
                                <div class="rounded-full mt-3 h-4 w-4 border border-green-600 bg-green-300 absolute top-0 left-0"><p class="text-center text-xs text-green-900">1</p></div>
                                    <p class="font-semibold text-gray-800 px-2">Zapatilla azul talla 17</p>
                                    <p class="text-gray-600 font-bold text-sm absolute bottom-0 right-0 mr-2">S/. 69.93</p>
                                </div>
                                <a href="#" class="text-sm text-azul font-semibold flex justify-end items-center pt-4 px-4"><i class="fas fa-shopping-cart mr-2"></i>Volver a carrito</a>
                                <div class="px-4 py-2">
                                    <div class="flex text-gray-600 text-sm font-semibold">
                                        <div class="flex w-2/3 justify-end">
                                            Subtotal
                                        </div>
                                        <div class="flex w-1/3 justify-end">
                                            S/. 99.90
                                        </div>
                                    </div>
                                    <div class="flex text-gray-600 text-sm font-semibold">
                                        <div class="flex w-2/3 justify-end">
                                            Descuentos
                                        </div>
                                        <div class="flex w-1/3 justify-end">
                                            S/. -29.97
                                        </div>
                                    </div>
                                    <div class="flex text-green-600 text-sm font-semibold border-t">
                                        <div class="flex w-2/3 justify-end">
                                            Total	
                                        </div>
                                        <div class="flex w-1/3 justify-end">
                                            S/. 69.93
                                        </div>
                                    </div>
                                       <button class="text-base text-white hover:bg-gray-600 font-semibold bg-azul py-2 px-3 w-full my-4"><i class="fas fa-lock pr-2"></i><a href="/">Comprar Ahora</a></button>
                                </div>
                            </div>
                          </div>
                    </div>
            </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/Compra/Navbar';
import Footer from '@/components/Compra/Footer';
export default {
    name:'Finaliza',
    components:{
        Navbar,
        Footer,
    },
    data(){
        return{
            cupon:false
        }
    },
    methods:{
        mostrarCupon(){
            this.cupon = !this.cupon;
        }
    }
}
</script>