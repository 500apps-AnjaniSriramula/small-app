<template>
  <div>
    <b-button v-b-toggle.sidebar-right>AddList</b-button>
    <b-sidebar id="sidebar-right" label="AddList" label-for="input-2" title="Add List" right shadow>
      <b-form-group id="input-group-2" label="List Name" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" placeholder="Enter List" required v-model.lazy="input"></b-form-input>
        <br />
        <!-- <p>{{ list }}</p> -->
        <b-button @click="add_List">save</b-button>
      </b-form-group>
    </b-sidebar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        input: "",
      };
    },
    methods: {
      add_List() {
        this.list.push(this.input);
        // this.input = "";
        this.$emit("eventing", this.input);
      },
    },
  };
</script>
