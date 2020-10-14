(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,l){"use strict";var r={name:"Footer"},o=l(28),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"bg-plomo lg:py-6 py-4 lg:px-12 xs:px-2 sm:px-4 flex-col"},[e("img",{staticClass:"h-10",attrs:{src:"img/logo.png",alt:"Logo"}}),this._v(" "),e("p",{staticClass:"text-xs text-gray-600 xs:pb-2 lg:pb-0"},[this._v("©Mi Ropa Perú 2020. Todos los derechos reservados.")])]),this._v(" "),e("div",{staticClass:"bg-azul flex lg:py-3 py-5 xs:px-4 sm:px-6 lg:px-12 items-center"},[e("div",{staticClass:"text-xs text-white flex items-center"},[e("p",[this._v("Ecommerce desarrollado por PauloCJ")])])])])}],!1,null,null,null);e.a=component.exports},195:function(t,e,l){"use strict";var r={name:"Navbar"},o=l(28),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-5 w-full flex bg-white text-azul xs:px-2 sm:px-4 lg:px-12 border-b-4 border-indigo-900"},[e("div",{staticClass:"w-1/2 flex justify-start items-center"},[e("img",{staticClass:"h-10",attrs:{src:"img/logo.png",alt:"Logo"}})]),this._v(" "),e("div",{staticClass:"w-1/2 flex justify-end items-center"},[e("p",{staticClass:"uppercase text-sm font-bold"},[e("i",{staticClass:"fas fa-shopping-cart mr-2 text-xl"}),this._v("compra segura")])])])}],!1,null,null,null);e.a=component.exports},211:function(t,e,l){"use strict";l.r(e);var r=l(195),o=l(194),d={name:"Finaliza",components:{Navbar:r.a,Footer:o.a},data:function(){return{cupon:!1}},methods:{mostrarCupon:function(){this.cupon=!this.cupon}}},c=l(28),n={name:"finalizar",components:{Finaliza:Object(c.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Navbar"),t._v(" "),l("div",{staticClass:"py-8 xs:px-2 sm:px-4 lg:px-12 mx-2 lg:mx-2"},[l("h1",{staticClass:"uppercase text-azul text-3xl font-bold"},[t._v("finalizar la compra")]),t._v(" "),l("div",{staticClass:"border-b-4 border-indigo-900 xs:w-1/3 md:w-1/6 lg:w-1/12"}),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"w-full md:px-2"},[t._m(1),t._v(" "),l("div",{staticClass:"md:w-1/2 lg:w-1/3 pt-4",class:{hidden:!t.cupon}},[l("p",{staticClass:"text-azul font-semibold hover:underline text-sm"},[t._v("Utilizar un cupón de regalo")]),t._v(" "),t._m(2)]),t._v(" "),l("div",{staticClass:"flex flex-wrap"},[l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/5 flex flex-col text-azul text-sm font-semibold pt-4"},[l("a",{staticClass:"py-6 px-3 hover:bg-plomo border rounded",class:{hidden:t.cupon},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.mostrarCupon(e)}}},[t._v("Utilizar un cupón de regalo")]),t._v(" "),l("a",{staticClass:"py-6 px-3 hover:bg-plomo border rounded",attrs:{href:""}},[t._v("Depósitos y Transferencias")]),t._v(" "),l("a",{staticClass:"py-6 px-3 hover:bg-plomo border rounded",attrs:{href:""}},[t._v("Tarjeta de crédito")])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])]),t._v(" "),l("Footer")],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"md:flex pt-8"},[l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/3 md:px-2 no-registrado hidden"},[l("h1",{staticClass:"text-azul text-2xl pb-2 border-b"},[l("i",{staticClass:"fas fa-user pr-2"}),t._v("Identificación")]),t._v(" "),l("p",{staticClass:"text-sm pt-2 text-gray-600 leading-4"},[t._v("Solicitamos únicamente la información esencial para la finalización de la compra.")]),t._v(" "),l("form",{staticClass:"text-sm pt-2 text-gray-600",attrs:{action:"#"}},[l("label",{staticClass:"block",attrs:{for:"correo"}},[t._v("Correo")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"correo",type:"email"}}),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("div",{staticClass:"w-1/2 pr-2"},[l("label",{staticClass:"block",attrs:{for:"nombre"}},[t._v("Nombre")]),t._v(" "),l("input",{staticClass:"px-2 w-full py-2 shadow-inner border rounded",attrs:{id:"nombre",type:"text"}})]),t._v(" "),l("div",{staticClass:"w-1/2 pl-2"},[l("label",{staticClass:"block",attrs:{for:"apellido"}},[t._v("Apellido")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"apellido",type:"text"}})])]),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("div",{staticClass:"w-1/2 pr-2"},[l("label",{staticClass:"block",attrs:{for:"dni"}},[t._v("Documento de identidad")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"dni",type:"text"}})]),t._v(" "),l("div",{staticClass:"w-1/2 pl-2"},[l("label",{staticClass:"block",attrs:{for:"telefono"}},[t._v("Teléfono / Móvil")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"telefono",type:"text"}})])]),t._v(" "),l("div",{staticClass:"flex items-center pt-2 w-full"},[l("input",{attrs:{type:"checkbox"}}),t._v(" "),l("p",{staticClass:"pl-2"},[t._v("Quiero recibir el newsletter con promociones.")])]),t._v(" "),l("div",{staticClass:"flex w-full justify-end pt-2"},[l("button",{staticClass:"hover:bg-gray-600 py-2 px-4 bg-azul text-white text-base"},[t._v("Ir para la Entrega")])])])]),t._v(" "),l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/3 md:px-2 registrado"},[l("div",{staticClass:"border-2 text-gray-600 rounded"},[l("div",{staticClass:"relative border-b pb-2 py-1 px-2 flex items-center"},[l("i",{staticClass:"fas fa-user pr-2"}),l("p",[t._v("Identificación")]),t._v(" "),l("button",{staticClass:"bg-plomo absolute right-0 top-0"},[l("i",{staticClass:"fas fa-edit text-azul text-xs opacity-75 p-2"})])]),t._v(" "),l("p",{staticClass:"text-sm px-2 py-2"},[t._v("probandocolloky@hotmail.com")]),t._v(" "),l("p",{staticClass:"text-sm px-2"},[t._v("administrador collocky")]),t._v(" "),l("p",{staticClass:"text-sm px-2"},[t._v("951 215 484")])])]),t._v(" "),l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/3 md:px-2 lg:mx-6 xs:mt-4 md:mt-0 hidden sin-datos-envio-ni-pago"},[l("div",{staticClass:"border-2 text-gray-600 rounded"},[l("p",{staticClass:"border-b pb-2 py-1 px-2"},[l("i",{staticClass:"fas fa-home pr-2"}),t._v("Dirección de envío")]),t._v(" "),l("p",{staticClass:"text-sm px-2 py-1"},[t._v("Aún falta llenar con los datos")])]),t._v(" "),l("div",{staticClass:"border-2 text-gray-600 rounded my-4"},[l("div",{staticClass:"relative border-b pb-2 py-1 px-2 flex items-center"},[l("i",{staticClass:"far fa-credit-card pr-2"}),l("p",[t._v("Pago")]),t._v(" "),l("button",{staticClass:"bg-plomo absolute right-0 top-0"},[l("i",{staticClass:"fas fa-edit text-azul text-xs opacity-75 p-2"})])]),t._v(" "),l("p",{staticClass:"text-sm px-2 py-4"},[t._v("Aún falta llenar con los datos")])])]),t._v(" "),l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/3 md:px-2 formulario-direccion hidden"},[l("h1",{staticClass:"text-azul text-2xl pb-2 border-b"},[l("i",{staticClass:"fas fa-home pr-2"}),t._v("Dirección de envío")]),t._v(" "),l("form",{staticClass:"text-sm pt-2 text-gray-600",attrs:{action:"#"}},[l("label",{staticClass:"block",attrs:{for:"direccion"}},[t._v("Direccion *")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"direccion",type:"text"}}),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("div",{staticClass:"w-1/2 pr-2"},[l("label",{staticClass:"block",attrs:{for:"numeroCasa"}},[t._v("Número *")]),t._v(" "),l("input",{staticClass:"px-2 w-full py-2 shadow-inner border rounded",attrs:{id:"numeroCasa",type:"text"}})]),t._v(" "),l("div",{staticClass:"w-1/2 pl-2"},[l("label",{staticClass:"block",attrs:{for:"piso"}},[t._v("Piso o Departamento (ej: 2A)")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"piso",type:"text"}})])]),t._v(" "),l("label",{staticClass:"block",attrs:{for:"direccion"}},[t._v("Referencia")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"direccion",type:"text"}}),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("div",{staticClass:"w-1/2 pr-2"},[l("label",{staticClass:"block",attrs:{for:"departamento"}},[t._v("Departamento *")]),t._v(" "),l("select",{staticClass:"border shadow-inner rounded w-full py-2",attrs:{id:"departamento"}},[l("option",{attrs:{value:""}},[t._v("Lima")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Callao")])])]),t._v(" "),l("div",{staticClass:"w-1/2 pl-2"},[l("label",{staticClass:"block",attrs:{for:"provincia"}},[t._v("Provincia *")]),t._v(" "),l("select",{staticClass:"border shadow-inner rounded w-full py-2",attrs:{id:"provincia"}},[l("option",{attrs:{value:""}},[t._v("Lima")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Callao")])])])]),t._v(" "),l("label",{staticClass:"block",attrs:{for:"distrito"}},[t._v("Distrito *")]),t._v(" "),l("select",{staticClass:"border shadow-inner rounded w-full py-2",attrs:{id:"distrito"}},[l("option",{attrs:{value:""}},[t._v("Lima")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Ancon")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Ate")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Barranco")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Breña")]),t._v(" "),l("option",{attrs:{value:""}},[t._v("Carabayllo")])]),t._v(" "),l("label",{staticClass:"block",attrs:{for:"persona"}},[t._v("Nombre de la persona que va a recibir *")]),t._v(" "),l("input",{staticClass:"w-full px-2 py-2 shadow-inner border rounded",attrs:{id:"persona",type:"text"}}),t._v(" "),l("div",{staticClass:"pt-4"},[l("label",{staticClass:"block text-xs font-bold",attrs:{for:"tipoEnvio"}},[t._v("Elija el tipo de envío")]),t._v(" "),l("select",{staticClass:"py-1 mt-1 bg-gray-200 rounded text-azul w-full shadow-inner",attrs:{id:"tipoEnvio"}},[l("option",{attrs:{value:""}},[t._v("Despacho a Domicilio Regular - S/. 8.90 -")])])]),t._v(" "),l("div",{staticClass:"flex w-full justify-end pt-4"},[l("button",{staticClass:"hover:bg-gray-600 py-2 px-4 bg-azul text-white text-base"},[t._v("Ir al Pago")])])]),t._v(" "),l("div",{staticClass:"border-2 text-gray-600 rounded mt-6"},[l("div",{staticClass:"relative border-b pb-2 py-1 px-2 flex items-center"},[l("i",{staticClass:"far fa-credit-card pr-2"}),l("p",[t._v("Pago")]),t._v(" "),l("button",{staticClass:"bg-plomo absolute right-0 top-0"},[l("i",{staticClass:"fas fa-edit text-azul text-xs opacity-75 p-2"})])]),t._v(" "),l("p",{staticClass:"text-sm px-2 py-4"},[t._v("Aún falta llenar con los datos")])])]),t._v(" "),l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/3 md:px-2 xs:my-4 md:my-0 dirección-completa"},[l("div",{staticClass:"border-2 text-gray-600 rounded"},[l("div",{staticClass:"relative border-b pb-2 py-1 px-2 flex items-center"},[l("i",{staticClass:"fas fa-home pr-2"}),l("p",[t._v("Dirección de envío")]),t._v(" "),l("button",{staticClass:"bg-plomo absolute right-0 top-0"},[l("i",{staticClass:"fas fa-edit text-azul text-xs opacity-75 p-2"})])]),t._v(" "),l("ul",{staticClass:"border-b pb-2"},[l("li",{staticClass:"text-sm px-2"},[t._v("sdasdas, adsd, sdsd - Lurigancho")]),t._v(" "),l("li",{staticClass:"text-sm px-2"},[t._v("Lima - Lima - Perú")])]),t._v(" "),l("p",{staticClass:"text-sm px-2 font-semibold"},[t._v("Envio: Despacho a Domicilio Regular - - S/. 8.90")]),t._v(" "),l("div",{staticClass:"px-2 py-2"},[l("button",{staticClass:"font-semibold text-sm w-full mb-2 text-azul rounded border border-dashed border-indigo-300 hover:border-indigo-900"},[t._v("Elegir un nuevo tipo de envio")])])])]),t._v(" "),l("div",{staticClass:"xs:w-full md:w-1/2 lg:w-1/3 md:px-2 lg:px-12 xs:mt-4 md:mt-0 hidden"},[l("div",{staticClass:"bg-plomo rounded"},[l("h2",{staticClass:"text-gray-600 font-bold border-b pb-2 px-2"},[t._v("Resumen de la compra")]),t._v(" "),l("div",{staticClass:"bg-white flex pt-4 relative"},[l("img",{staticClass:"w-10",attrs:{src:"https://colgrampe.vteximg.com.br/arquivos/ids/429210-200-200/27010250I20_1.jpg",alt:""}}),t._v(" "),l("div",{staticClass:"rounded-full mt-3 h-4 w-4 border border-green-600 bg-green-300 absolute top-0 left-0"},[l("p",{staticClass:"text-center text-xs text-green-900"},[t._v("1")])]),t._v(" "),l("p",{staticClass:"font-semibold text-gray-800 px-2"},[t._v("Zapatilla azul talla 17")]),t._v(" "),l("p",{staticClass:"text-gray-600 font-bold text-sm absolute bottom-0 right-0 mr-2"},[t._v("S/. 69.93")])]),t._v(" "),l("a",{staticClass:"text-sm text-azul font-semibold flex justify-end items-center pt-4 px-4",attrs:{href:"#"}},[l("i",{staticClass:"fas fa-shopping-cart mr-2"}),t._v("Volver a carrito")]),t._v(" "),l("div",{staticClass:"px-4 py-2"},[l("div",{staticClass:"flex text-gray-600 text-sm font-semibold"},[l("div",{staticClass:"flex w-2/3 justify-end"},[t._v("\n                            Subtotal\n                        ")]),t._v(" "),l("div",{staticClass:"flex w-1/3 justify-end"},[t._v("\n                        S/. 99.90\n                        ")])]),t._v(" "),l("div",{staticClass:"flex text-gray-600 text-sm font-semibold"},[l("div",{staticClass:"flex w-2/3 justify-end"},[t._v("\n                            Descuentos\n                        ")]),t._v(" "),l("div",{staticClass:"flex w-1/3 justify-end"},[t._v("\n                        \tS/. -29.97\n                        ")])]),t._v(" "),l("div",{staticClass:"flex text-green-600 text-sm font-semibold border-t"},[l("div",{staticClass:"flex w-2/3 justify-end"},[t._v("\n                            Total\t\n                        ")]),t._v(" "),l("div",{staticClass:"flex w-1/3 justify-end"},[t._v("\n                        \tS/. 69.93\n                        ")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"text-azul text-2xl pb-2 border-b"},[e("i",{staticClass:"far fa-credit-card pr-2"}),this._v("Pago")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-plomo px-2"},[e("div",{staticClass:"flex py-2 items-center"},[e("label",{attrs:{for:"codigo"}},[e("p",{staticClass:"text-xs text-gray-800 pr-2"},[this._v("Código del cupón de regalo")])]),this._v(" "),e("input",{staticClass:"rounded border py-1 px-2 text-gray-600",attrs:{id:"codigo",type:"text"}})]),this._v(" "),e("div",{staticClass:"pb-2"},[e("button",{staticClass:"py-2 bg-gray-400 hover:bg-gray-600 shadow-inner rounded text-xs hover:text-white border px-2 text-gray-800"},[this._v("Sumar")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"xs:w-full md:w-1/2 md:px-4 xs:my-4 md:mt-4"},[l("div",{staticClass:"bg-plomo p-4 relative"},[l("div",{staticClass:"text-xs mx-2 flex items-center text-gray-800 bg-gray-400 py-4 px-2 rounded border absolute right-0"},[l("p",{staticClass:"px-2 xs:hidden md:block"},[t._v("Ambiente Seguro")]),t._v(" "),l("i",{staticClass:"fas fa-lock text-2xl"})]),t._v(" "),l("form",{staticClass:"text-sm font-semibold text-gray-600",attrs:{action:""}},[l("label",{attrs:{for:"numeroT"}},[t._v("Número")]),t._v(" "),l("input",{staticClass:"xs:w-3/4 md:w-1/2 block px-2 py-2 border rounded",attrs:{type:"text",id:"numeroT"}}),t._v(" "),l("div",{staticClass:"flex mt-2"},[l("div",{staticClass:"flex flex-col justify-center px-1 pt-1"},[l("button",{staticClass:"bg-white border px-2 rounded text-2xl text-azul"},[l("i",{staticClass:"fab fa-cc-visa"})]),t._v(" "),l("input",{staticClass:"mx-4 mt-1",attrs:{type:"radio",name:"tipoT"}})]),t._v(" "),l("div",{staticClass:"flex flex-col justify-center px-1 pt-1"},[l("button",{staticClass:"bg-white border px-2 rounded text-2xl text-blue-500"},[l("i",{staticClass:"fab fa-cc-amex"})]),t._v(" "),l("input",{staticClass:"mx-4 mt-1",attrs:{type:"radio",name:"tipoT"}})]),t._v(" "),l("div",{staticClass:"flex flex-col justify-center px-1 pt-1"},[l("button",{staticClass:"bg-white border px-2 rounded text-2xl text-purple-900"},[l("i",{staticClass:"fab fa-cc-diners-club"})]),t._v(" "),l("input",{staticClass:"mx-4 mt-1",attrs:{type:"radio",name:"tipoT"}})]),t._v(" "),l("div",{staticClass:"flex flex-col justify-center px-1 pt-1"},[l("button",{staticClass:"bg-white border px-2 rounded text-2xl text-red-600"},[l("i",{staticClass:"fab fa-cc-mastercard"})]),t._v(" "),l("input",{staticClass:"mx-4 mt-1",attrs:{type:"radio",name:"tipoT"}})])]),t._v(" "),l("div",{staticClass:"py-4"},[l("select",{staticClass:"xs:w-3/4 md:w-1/2 rounded border py-2 px-2",attrs:{id:"pagar"}},[l("option",{attrs:{value:""}},[t._v("Total - S/. 56.84")])])]),t._v(" "),l("label",{attrs:{for:"nombreT"}},[t._v("Nombre y Apellido como figura en la tarjeta")]),t._v(" "),l("input",{staticClass:"xs:w-full md:w-1/2 mt-2 block border py-2 px-2 rounded",attrs:{type:"text"}}),t._v(" "),l("div",{staticClass:"flex py-4"},[l("label",{attrs:{for:"nombreT"}},[t._v("Fecha de Vencimiento")]),t._v(" "),l("select",{staticClass:"mx-2 block border py-2 px-2 rounded",attrs:{type:"text"}},[l("option",{attrs:{value:""}},[t._v("MM")])]),t._v("\n                                    /\n                                    "),l("select",{staticClass:"mx-2 block border py-2 px-2 rounded",attrs:{type:"text"}},[l("option",{attrs:{value:""}},[t._v("AA")])])]),t._v(" "),l("div",[l("label",{attrs:{for:"codigoS"}},[t._v("Código de Seguridad")]),t._v(" "),l("input",{staticClass:"py-2 px-3 rounded border w-24",attrs:{type:"text",id:"codigoS"}})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"xs:w-full md:w-2/3 md:my-6 md:mx-auto lg:w-1/4 lg:mx-4 lg:mt-4 bg-plomo rounded"},[l("h2",{staticClass:"flex justify-end  mt-2 text-gray-600 font-bold border-b pb-2 px-2"},[t._v("Resumen de la compra")]),t._v(" "),l("div",{staticClass:"bg-white flex px-4 pt-4 relative"},[l("img",{staticClass:"w-10",attrs:{src:"https://colgrampe.vteximg.com.br/arquivos/ids/429210-200-200/27010250I20_1.jpg",alt:""}}),t._v(" "),l("div",{staticClass:"rounded-full mt-3 h-4 w-4 border border-green-600 bg-green-300 absolute top-0 left-0"},[l("p",{staticClass:"text-center text-xs text-green-900"},[t._v("1")])]),t._v(" "),l("p",{staticClass:"font-semibold text-gray-800 px-2"},[t._v("Zapatilla azul talla 17")]),t._v(" "),l("p",{staticClass:"text-gray-600 font-bold text-sm absolute bottom-0 right-0 mr-2"},[t._v("S/. 69.93")])]),t._v(" "),l("a",{staticClass:"text-sm text-azul font-semibold flex justify-end items-center pt-4 px-4",attrs:{href:"#"}},[l("i",{staticClass:"fas fa-shopping-cart mr-2"}),t._v("Volver a carrito")]),t._v(" "),l("div",{staticClass:"px-4 py-2"},[l("div",{staticClass:"flex text-gray-600 text-sm font-semibold"},[l("div",{staticClass:"flex w-2/3 justify-end"},[t._v("\n                                        Subtotal\n                                    ")]),t._v(" "),l("div",{staticClass:"flex w-1/3 justify-end"},[t._v("\n                                        S/. 99.90\n                                    ")])]),t._v(" "),l("div",{staticClass:"flex text-gray-600 text-sm font-semibold"},[l("div",{staticClass:"flex w-2/3 justify-end"},[t._v("\n                                        Descuentos\n                                    ")]),t._v(" "),l("div",{staticClass:"flex w-1/3 justify-end"},[t._v("\n                                        S/. -29.97\n                                    ")])]),t._v(" "),l("div",{staticClass:"flex text-green-600 text-sm font-semibold border-t"},[l("div",{staticClass:"flex w-2/3 justify-end"},[t._v("\n                                        Total\t\n                                    ")]),t._v(" "),l("div",{staticClass:"flex w-1/3 justify-end"},[t._v("\n                                        S/. 69.93\n                                    ")])]),t._v(" "),l("button",{staticClass:"text-base text-white hover:bg-gray-600 font-semibold bg-azul py-2 px-3 w-full my-4"},[l("i",{staticClass:"fas fa-lock pr-2"}),l("a",{attrs:{href:"/"}},[t._v("Comprar Ahora")])])])])}],!1,null,null,null).exports}},v=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Finaliza")],1)}),[],!1,null,null,null);e.default=v.exports}}]);