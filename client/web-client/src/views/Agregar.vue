<template>
  <div>
    <h1>Add boardgames</h1>
    <form @submit.prevent="saveBoardgame">
      <Input
        v-model="boardgame.name"
        titulo="Name"
        id="name"
        placeholder="The name goes here :)"
        :maxlength="80"
        errorMsg="pls fill this field :("
        :error="errors && !validateName"
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
      :required=true
      >
        <template #first>
          <b-form-select-option :value="null" disabled>-- Select a Category --</b-form-select-option>
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
import { mapActions } from 'vuex'
import Input from '../components/Input.vue'

export default {
  name: 'Agregar',
  components: {
    Input
  },
  data() {
    return {
      boardgame: {
        name: '',
        publisher: '',
        description: '',
        category: null,
        year: ''
      },
      categories: [
        {value: '11', text: 'Adventure'},
        {value: '12', text: 'Puzzle'},
        {value: '13', text: 'Strategy'},
        {value: '14', text: 'Fantasy'},
        {value: '15', text: 'Civilization'}
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
    ...mapActions(['addBoardgame']),
    saveBoardgame() {
      this.boardgame.name = this.boardgame.name.trim();
      this.boardgame.publisher = this.boardgame.publisher.trim();
      this.boardgame.description = this.boardgame.description.trim();
      this.boardgame.year = this.boardgame.year.trim();
      if(this.validateName && this.validatePublisher) {
        this.errors = false;
        console.log("succesfully saved");
        this.addBoardgame({
          params: this.boardgame,
          onComplete: (response) => {
            this.$notify({
              title: response.data.message,
              type: 'success'
            })
          },
          onError: (error) => {
            this.$notify({
              title: response.data.message,
              type: 'error'
            })
          }
        });
        this.clean();
      } else {
        this.errors = true;
      }
    },
    clean() {
      this.boardgame = {
        name: '',
        publisher: '',
        description: '',
        category: null,
        year: ''
      }
    }
  }
}
</script>