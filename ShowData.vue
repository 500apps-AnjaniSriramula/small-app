<template>
  <div>
    <b-table striped hover :items="items"></b-table>
    <Lists @eventing="show_list($event)"
      >
    </Lists>
    <p>{{ items }}</p>
  </div>
</template>

<script>
  import Lists from "./Lists.vue";
  export default {
    components: { Lists },
    data() {
      return {
        items: [],
      };
    },
    methods: {
      show_list(value) {
        this.items.push(value);
      },
    },
  };
</script>
