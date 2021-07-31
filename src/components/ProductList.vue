<template>
  <div class="grid grid-cols-2 md:grid-cols-4 pt-20 my-14 gap-2 md:gap-4 items-stretch px-3 md:px-1">
      <Product v-for="product in Products" :key="product.id" :product="product" />
     
  </div>
</template>

<script>
import Product from './ProductItem.vue'
export default {
    components: {
        Product
    },
    mounted() {
        return this.$store.dispatch('getProducts')
    },
    computed: {
        Products() {
            return this.$store.state.products
        }
    }
}
</script>

<style>

</style>