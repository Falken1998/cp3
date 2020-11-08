<template>
  <div>
    <h1 class="title has-text-centered mt-5">My Work</h1>
    <div class="section">
      <div class="container">
        <div class="field is-horizontal has-addons has-addons-centered">
          <a
            @click="select('Simple Detail')"
            href="#"
            class="button is-light is-radiusless"
            >Simple Detail</a
          >
          <a
            @click="select('Medium Detail')"
            href="#"
            class="button is-light is-radiusless"
            >Medium Detail</a
          >
          <a
            @click="select('Max Detail')"
            href="#"
            class="button is-light is-radiusless"
            >Max Detail</a
          >
          <a
            @click="select('Original')"
            href="#"
            class="button is-light is-radiusless"
            >Original</a
          >
        </div>
      </div>
    </div>
    <ImageList :images="images" />
  </div>
</template>
<script>
import ImageList from "../components/ImageList.vue";
export default {
  name: "Shop",
  components: {
    ImageList,
  },
  data() {
    return {
      style: "Simple Detail",
    };
  },
  computed: {
    images() {
      console.log(this.$root.$data.images);
      console.log(this.style);
      let filtered = this.$root.$data.images.filter(
        (image) => image.style === this.style
      );
      console.log(filtered);
      return filtered;
    },
  },
  methods: {
    select(style) {
      this.style = style;
    },
  },
};
</script>