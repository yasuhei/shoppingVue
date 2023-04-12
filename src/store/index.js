import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    productInBag: []
  },
  mutations: {
    loadProducts(state,products) {
      state.products = products
    },
    loadBag(state,products) {
      state.productInBag = products
    },
    addToBag(state, product) {
      state.productInBag.push(product)
      localStorage.setItem('productInBag',JSON.stringify(state.productInBag))
    },
    removeFromBag(state, productId) {
      var updateBag = state.productInBag.filter(item => productId != item.id);
      state.productInBag = updateBag
      localStorage.setItem('productInBag',JSON.stringify(state.productInBag))

    }

  },
  actions: {
    loadProducts({commit}) {
      axios.get('https://fakestoreapi.com/products').then(response => {
        commit('loadProducts',response.data)
      })
    },
    loadBag({commit}) {
      if(localStorage.getItem('productInBag')){
        commit('loadBag', JSON.parse(localStorage.getItem('productInBag')))

      }
    },
    addToBag({commit}, product) {
      commit('addToBag', product)
    },


    removeFromBag({commit}, productId) {
      if(confirm('Você deseja remover esse item do carrinho?')){
        commit('removeFromBag', productId)
      }
    }
  },
  modules: {
  }
})
