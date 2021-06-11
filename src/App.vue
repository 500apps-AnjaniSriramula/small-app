<template>
  <div >
     <b-card class="text-center">
      <div class="bg-secondary text-light">
        <ul>
          <li v-for="items in officers" :key="items">{{officers}}</li>
        </ul>
      </div>
     </b-card>
  </div>
</template>
<script>

import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      data:officers = [{ "name" :" Agile CRM" , "description" :" A company of excellence"}, 
      {"name":"mantra technologies", "description":"500apps" },
      {"name":"500apps Python", "description":"Backend built using python" },
      {"name":"500apps infinity", "description":"Built using vue JS" }]
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  body {
    background: #EEF1F4 !important;
    font-family: 'Lato', sans-serif !important;
  }
  .nav-background {
    background: #353535;
  }
</style>
