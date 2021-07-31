<template>  
      <router-link :to="{name: 'product', params: {id: product.id}}">
      <div class="p-2 md:p-4 w-full shadow-lg border rounded cursor-pointer h-full">
        <a class="block relative h-48 rounded overflow-hidden aspect-w-16 aspect-h-9">
          <img alt="ecommerce" class="object-cover w-full h-full block transform transition-transform duration-500 ease-in-out hover:scale-125 object-top" :src="product.image">
        </a>
        <div class="mt-4 text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 hover:underline">{{product.category}}</h3>
          <h2 class="title-font text-sm md:text-lg font-medium hover:underline">{{product.title.slice(0, 50)}}</h2>
          <p class="mt-1">${{product.price}}</p>
        </div>
      </div>
    </router-link>
</template>

<script>
export default { 
  props: [ 'product' ]
}
</script>

<style>

</style>