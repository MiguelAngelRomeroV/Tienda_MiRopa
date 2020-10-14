export default {
    ocultarCarrito(state) {
      state.carrito = false
    },
    mostrarCarrito (state) {
      state.carrito = ! state.carrito
    },
    ocultarMenu(state) {
      state.menu = false
    },
    mostrarMenu (state) {
      state.menu = ! state.menu
    },
    ocultarFiltros(state) {
      state.filtros = false
    },
    mostrarFiltros (state) {
      state.filtros = ! state.filtros
    }
    
  }
   