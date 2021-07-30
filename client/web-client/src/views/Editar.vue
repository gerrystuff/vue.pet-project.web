<template>
  <div>
    <h1>Edit {{boardgame.name}}</h1>
    <form @submit.prevent="editBoardgame()">
      <Input
        v-model="boardgame.id"
        titulo="ID"
        id="id"
        disabled
      />
      <Input
        v-model="boardgame.name"
        titulo="Name"
        id="name"
        disabled
      />
      <Input
        v-model="boardgame.publisher"
        titulo="Publisher"
        id="publisher"
        placeholder="Publisher's name goes here :)"
        :maxlength="60"
        errorMsg="pls fill this field :("
        :error="errors && !validatePublisher"
      />
      <Input
        v-model="boardgame.description"
        titulo="Description"
        id="description"
        placeholder="The description goes here :)"
        :maxlength="200"
      />
      <label for="category" class="my-2">Category</label>
      <b-form-select
        id="category"
        v-model="boardgame.category"
        :options="categories"
        class="my-2"
        :required="true"
      >
        <template #first>
          <b-form-select-option :value="null" disabled
            >-- Select a Category --</b-form-select-option
          >
        </template>
      </b-form-select>
      <Input
        v-model="boardgame.year"
        titulo="Year"
        id="year"
        placeholder="The year goes here :)"
        :maxlength="4"
      />
      <b-button type="submit" variant="primary" class="my-2">Submit</b-button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import Input from '../components/Input.vue';

export default {
  name: 'Editar',
  components: {
    Input
  },
  data() {
    return {
      boardgame: {},
      categories: [
        { value: "11", text: "Adventure" },
        { value: "12", text: "Puzzle" },
        { value: "13", text: "Strategy" },
        { value: "14", text: "Fantasy" },
        { value: "15", text: "Civilization" },
      ],
      errors: false
    }
  },
  computed: {
    validateName(){
      return (this.boardgame.name !== undefined && this.boardgame.name.trim() !== '')
    },
    validatePublisher(){
      return (this.boardgame.publisher !== undefined && this.boardgame.publisher.trim() !== '')
    }
  },
  methods: {
    ...mapActions(['editBoardgame', 'getBoardgame']),
    saveBoardGame() {
      if(this.validateName) {
        this.errors = false;
        this.editBoardgame({
          id: this.$route.params.id,
          params: this.boardgame,
          onComplete: (response) => {
            console.log(response);
            this.$notify({
              title: response.data.mensaje,
              type: "success"
            });
          },
          onError: (error) => {
            console.log(error.response.data.message);
            this.$notify({
              title: error.response.data.message,
              type: "error"
            })
          }
        })
      } else {
        this.errors = true;
      }
    }
  },
  mounted() {
    this.getBoardgame({
      id: this.$route.params.id,
      onComplete: (response) => {
        Vue.set(this, "boardgame", response.data.data[0]);
      }
    })
  }
};
</script>