<template>
  <div class="bg-gray-800 text-gray-200 fixed w-80 top-0 right-0 h-screen z-10 transform pt-24 transition-transform duration-500 ease-out flex flex-col px-5 overflow-y-auto" :class="[showCart ? 'translate-x-0' : 'translate-x-full']">
    <h3 class="text-center mb-5">Your Cart ({{cartItemCount}})</h3>
      <div class="cartItem py-2 " v-for="(item, index) in cartItems" :key="item.product.id">
        <div class="cartItemHeader flex items-start">
          <img :src="item.product.image" class="h-12 w-12 object-cover object-top block mr-2" alt="">
          <h4 class="text-left text-sm">{{item.product.title.slice(0, 50)}}</h4>
        </div>
        <div class="cartItemBody flex items-start mt-3 pb-3 justify-between border-b border-gray-600">
          <div class="productPrice">
            <p class="text-lg">{{item.quantity}}  x  ${{item.product.price}}</p>
          </div>
          <button @click="deleteItem(index)" class="removeItem hover:bg-gray-600 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
          </button>
        </div>
        
      </div>
      <div class="totalPrice mt-auto mb-5 flex justify-between pb-12 md:pb-0 items-center">
        <h1 class="text-xl">Total: ${{cartTotalPrice.toFixed(2)}}</h1>
        <button @click="clearCartItems" class="text-indigo-400 border border-indigo-400 rounded px-2 py-1 hover:bg-indigo-500 hover:text-white">Clear Cart</button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['showCart'],
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice
    }
  },
  methods: {
    deleteItem(id) {
      // console.log(id);
      return this.$store.dispatch('deleteCartItem', id)
    },
    clearCartItems() {
      return this.$store.dispatch('clearCartItems')
    }
  }
}
</script>

<style>

</style>