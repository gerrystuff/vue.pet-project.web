<template>
  <div>
    <Tarjeta
      v-for="boardgame in boardgames"
      :key="boardgame.id"
      :id="boardgame.id"
      :name="boardgame.name"
      :publisher="boardgame.publisher"
      :year="boardgame.year"
    />
  </div>
</template>

<script>
import Tarjeta from '@/components/Tarjeta.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: "Visualize",
  components: {
    Tarjeta
  },
  computed: {
    ...mapState(['boardgames', 'loading'])
  },
  methods: {
    ...mapActions(['list'])
  },
  mounted() {
    this.list();
  }
}
</script>