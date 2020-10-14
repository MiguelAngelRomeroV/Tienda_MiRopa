<template>
  <div>
     <Navbar/>
     <Slider :class="{'opacity-25': this.menu || this.carrito }"/>
     <Promo  :class="{'opacity-25': this.menu || this.carrito}"/>
     <Footer  :class="{'opacity-25': this.menu || this.carrito}"/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Navbar from '~/components/Navbar.vue'
import Slider from '~/components/Home/Slider.vue'
import Promo from '~/components/Home/Promo.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Slider,
    Promo,
    Footer
  },
  methods: {
    ...mapMutations(['ocultarCarrito']),
  },
  computed:{
    ...mapState(['carrito','menu'])
  }
  
}
</script>
