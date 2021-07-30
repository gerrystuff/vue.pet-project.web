<template>
  <b-card :title="name">
    <b-card-text> Publisher: {{ publisher }} </b-card-text>
    <template #footer>
      <small class="text-muted">Year: {{ year }}</small>
      <div class="mt-3">
        <b-button-group>
          <b-button :to="`/detail/${id}`" variant="success">Detail</b-button>
          <b-button :to="`/edit/${id}`" variant="warning">Edit</b-button>
          <b-button  variant="danger">Delete</b-button>
        </b-button-group>
      </div>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "Tarjeta",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>