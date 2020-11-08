<template>
  <div class="" style="">
    <ul class="" style="width: 80%; margin: 0 auto">
      <li
        class="card m-5"
        v-for="image in images"
        :key="image.id"
        style="width: 30%; height: 600px; display: inline-block;"
      >
        <div
          class="card-header-title has-background-light"
          style="height: 75px"
        >
          <h1>{{ image.description }}</h1>
        </div>
        <figure class="image" style="height: 475px">
          <img
            :src="'/images/' + image.image"
            style="height: 475px; object-fit: cover"
          />
        </figure>
        <div class="card-footer">
          <router-link class="button is-light is-radiusless is-fullwidth" to="/contact" style="height:50px">Contact me</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ImageList",
  props: {
    images: Array,
  },
  methods: {
    addToCart(image) {
      this.$root.$data.cart.push(image);
    },
  },
};
</script>