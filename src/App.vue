<template>
  <div >
    <app-header :updateCart="updateCart" />
    <div @click="closeCart" class="container mx-auto font-sans">    
        <router-view  />
    </div>
  </div>
  
</template>
<script>
import AppHeader from './components/AppHeader.vue'
export default {
 components: {
   AppHeader
 },
 data() {
   return {
     updateCart: false
   }
 },
 methods: {
   closeCart() {
            return this.$store.dispatch('closeCart', false)
        }
 }
}
</script>
<style>


</style>
