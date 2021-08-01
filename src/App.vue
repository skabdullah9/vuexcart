<template>
  <div>
    <app-header :updateCart="updateCart" />
    <div class="container mx-auto font-sans">    
        <router-view/>
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
 }
}
</script>
<style>


</style>
