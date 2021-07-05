<template>
  <div>
    <!-- Intro -->

    <!-- End of Intro -->
    <b-container class="mt-3">
      <div>
        <b-tabs content-class="mt-4">
          <b-tab title="Add Projects" active> </b-tab>
          <b-tab title="Lists">
            <!-- <Lists @eventing="show_list($event)"></Lists> -->
            <ShowData></ShowData>
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
</template>
<script>
  import ShowData from "./ShowData.vue";

  export default {
    components: { ShowData },
    data() {
      return {
        list: [],
      };
    },
    // methods: {
    //   show_list(value) {
    //     this.list.push(value);
    //   },
    // },
  };
</script>
