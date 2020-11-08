<template>
  <div class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <p>
          Type your message below or send me an email at
          seattlesketches@fakeemail.com
        </p>
        <br>
        <br>
      </div>
      <div class="container">
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Contact Me!"
                v-model="message"
              ></textarea>
            </div>
          </div>
          <button class="button is-primary is-radiusless">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.message);
      this.message = "";
    },
  },
};
</script>

<style>
</style>