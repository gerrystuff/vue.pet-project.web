<template>
  <div class="home">
    <h1>Favorites</h1>
    <div class="container">
      <div class="container__buttons">
        <b-button to="/add" variant="info" class="my-1">Add</b-button>
        <b-button to="/visualize" variant="info" class="my-1">View All</b-button>
      </div>
      <b-form-select
        v-model="category"
        :options="categories"
        class="mb-3"
        :required="true"
      >
        <template #first>
          <b-form-select-option :value="null"
            >-- ALL --</b-form-select-option
          >
        </template>
      </b-form-select>
    </div>
    <Tabla :items="favorites" :busy="loading" :fields="fields"/>
      <!-- <template slot="actions" slot-scope="{ item }">
        <b-button :to="`/edit/${item.id}`" class="mx-1">Edit</b-button>
      </template>
    </Tabla> -->
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Tabla,
  },
  data() {
    return {
      fields: ["name", "publisher", "category", "year"],
      category: null,
      categories: [
        { value: "11", text: "Adventure" },
        { value: "12", text: "Puzzle" },
        { value: "13", text: "Strategy" },
        { value: "14", text: "Fantasy" },
        { value: "15", text: "Civilization" },
      ],
    };
  },
  computed: {
    ...mapState(["favorites", "loading"]),
  },
  methods: {
    ...mapActions(["listFav"]),
  },
  mounted() {
    this.listFav();
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>