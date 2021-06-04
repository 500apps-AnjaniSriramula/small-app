import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'Vue-router'
import Routes from './routes'

// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);

const router=new VueRouter({
  routes:Routes,
  mode:'history'
});
//custom directives
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString().slice(2,8);
  }
});
//Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet',function(value){
  return value.slice(0,100)+ '...';
});
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})