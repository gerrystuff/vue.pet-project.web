<template>
  <div>
    <h1>{{this.boardgame.name}}</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Detail',
  data() {
    return {
      // boardgame: {}
    }
  },
  computed: {
    ...mapState(['boardgame'])
  },
  methods: {
    ...mapActions(['getBoardgame'])
  },
  created() {
    this.getBoardgame(this.$route.params.id);
  }
}
</script>