<template>
  <div>
     <Navbar/>
     <Single :class="{'opacity-25': this.menu || this.carrito}"/>
     <Footer  :class="{'opacity-25': this.menu || this.carrito}"/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Navbar from '~/components/Navbar.vue'
import Single from '~/components/Product/Single.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Single,
    Footer
  },
  computed:{
    ...mapState(['carrito','menu'])
  }
  
}
</script>
