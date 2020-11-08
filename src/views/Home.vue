<template>
  <div class="has-background-light">
    <section class="hero is-medium is-light ">
      <div class="hero-body" style="padding-bottom: 75px; padding-top:75px">
        <div class="container">
          <h1 class="title is-size-1 has-text-centered">
            Welcome to Seattle Sketches
          </h1>
          <p class="is-size-4 has-text-centered">
            Check out my Porfolio for examples of my work. Message me for a quote on a custom piece.
          </p>
        </div>
      </div>
    </section>

    <div class="tile">
      <div class="tile">
        <figure class="image">
          <img class="" :src="img1" style="height: 600px; object-fit: cover" />
        </figure>
      </div>
      <div class="tile">
        <figure class="image">
          <img class="" :src="img2" style="height: 600px; object-fit: cover" />
        </figure>
      </div>
      <div class="tile">
        <figure class="image">
          <img class="" :src="img3" style="height: 600px; object-fit: cover" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      img1: `/images/${
        this.$root.$data.images[
          Math.floor(Math.random() * this.$root.$data.images.length)
        ].image
      }`,
      img2: `/images/${
        this.$root.$data.images[
          Math.floor(Math.random() * this.$root.$data.images.length)
        ].image
      }`,
      img3: `/images/${
        this.$root.$data.images[
          Math.floor(Math.random() * this.$root.$data.images.length)
        ].image
      }`,
    };
  },
  computed: {},
};
</script>
