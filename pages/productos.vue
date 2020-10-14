<template>
    <div>
        <Navbar />
        <Products />
        <Footer />
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';
import Products from '@/components/Products/Products';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
export default {
    name: 'productos',
    components:{
        Products,
        Navbar,
        Footer
    },
    computed:{
        ...mapState(['filtros','carrito','menu'])
    },
    methods:{
        ...mapMutations(['ocultarFiltros','mostrarFiltros']),
    }
}
</script>