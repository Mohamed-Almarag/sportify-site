import Vue from 'vue'

Vue.filter('short_text', function(v, wordLength, dots){
  return v.substring(0, wordLength) + dots
})
