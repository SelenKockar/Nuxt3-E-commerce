import { defineStore } from "pinia";

import { ref, computed } from 'vue';

export const productStore = defineStore("productStore", () => {

  const products = ref([]);
  const searchTerm = ref("");
  const cartState = ref(0)
  
  

  const productList = computed(() => {
    if (searchTerm.value.length === 0) return products.value;
    return products.value.filter((p) => p.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
  });

  const updateSearchTerm = (value) => {
    searchTerm.value = value;
  };

 

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const cartStates = computed  (() => {
     return cartState.value
  });
  function incrementCartState () {
    cartState.value++
  }
  
  return {
    products,
    searchTerm,
    cartState,
    cartStates,
    productList, 
    updateSearchTerm,
    fetchProducts,
    incrementCartState,
  
  };
});
