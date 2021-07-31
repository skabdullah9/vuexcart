<template>
  <div>
     <header class="text-gray-400 bg-gray-900 body-font fixed w-full z-20 top-0">
  <div class="container mx-auto flex py-2 px-3 md:p-4 md:flex-row items-center">
    <div class="nav flex w-full flex-col md:flex-row justify-between items-start md:items-center">
       <router-link to='/' class="flex title-font font-medium items-center text-white mb-2 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">VuexCart</span>
    </router-link>
     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-start md:justify-center font-sans">
      <router-link to="/" class="mr-5 hover:text-white">Home</router-link>
      <router-link to="/about" class="mr-5 hover:text-white">About</router-link>
      <router-link to="/" class="mr-5 hover:text-white">Contact</router-link>
    </nav>
    </div>
   
   
    <button @click="showCart = !showCart" class="ml-auto relative inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>  Cart
      <svg v-if="!showCart" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>

  <div class="productCount bg-indigo-600 text-white absolute -top-3 -left-4 rounded-full px-2">
    {{cartItemCount}}
  </div>
    </button>
  </div>
</header>
  <cart :showCart="showCart" />
  </div>
</template>

<script>
import Cart from './Cart.vue'
export default {
  components: {
    Cart
  },
  
  data() {
    return {
      showCart: null
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount
    },
    
  },
  methods: {
    cartStatus() {
      return this.showCart = this.$store.getters.cartStatus
    }
  }
}
</script>

<style>

</style>