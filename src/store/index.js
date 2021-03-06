import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    product: null,
    cart: [],
    showCart: false
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_TO_CART(state, {product, quantity}) {
      let productExist = state.cart.find(item => item.product.id === product.id)
      if (productExist) {
        productExist.quantity++
        return localStorage.cart = JSON.stringify(state.cart)
      }
      state.cart.push({
        product,
        quantity
      })
      localStorage.cart = JSON.stringify(state.cart)
    },
    DELETE_CART_ITEM(state, id) {
      state.cart.splice(id, 1)
      return localStorage.cart = JSON.stringify(state.cart)
    },
    CLEAR_CART_ITEMS(state) {
      state.cart = []
      return localStorage.cart = JSON.stringify(state.cart)
    },
    GET_CART(state) {
      if (localStorage.cart) {
        state.cart = JSON.parse(localStorage.cart)
      } else {
        return 
      }
    },
    CLOSE_CART(state, action) {
      state.showCart = action
    }
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get('https://fakestoreapi.com/products') 
      return await commit('SET_PRODUCTS', response.data)
    },
    async getProduct({ commit }, id) {
      const response = await axios.get('https://fakestoreapi.com/products/' + id)
      return await commit('SET_PRODUCT', response.data)
    },
    addToCart({ commit }, {product, quantity}) {
      commit('ADD_TO_CART', { product, quantity })
    },
    deleteCartItem({ commit }, id) {
      commit('DELETE_CART_ITEM', id)
    },
    clearCartItems({ commit }) {
      commit('CLEAR_CART_ITEMS')
    },
    getCartItems({commit}) {
      commit('GET_CART')
    },
    closeCart({commit}, action) {
      commit('CLOSE_CART', action)
    }
  },
  getters: {
    cartItemCount(state) {
      return state.cart.length
    },
    cartTotalPrice(state) {
      let total = 0
      state.cart.forEach(item=>{
        total += item.product.price * item.quantity;
      })
      return total
    },
    cartStatus(state) {
      return state.showCart
    }
  },
  modules: {
  }
})
