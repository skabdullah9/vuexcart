<template>
  <div class="bg-indigo-200 mb-2 max-w-xs mx-auto text-indigo-800 py-2 px-4 rounded border-t-4 border-indigo-600">
      <div class="text-xl md:text-2xl text-center flex items-center justify-center">
        Item added to the cart!  <button @click="closeAlert" class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeAlert() {
      this.$emit('closed', false)
    }
  }
}
</script>

<style>

</style>