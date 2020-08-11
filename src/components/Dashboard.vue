<template>
  <section class="hero has-background">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          Matchen!
        </h1>
        <h2 class="subtitle">
          A Matching Game.
        </h2>
        <div class="columns">
          <div class="column is-one-fifth is-offset-two-fifths">
            <div class="field">
              <div class="control has-icons-left">
                <input class="input is-medium"
                       placeholder="What's your name?">
                <span class="icon is-left">
              <fa-icon :icon="['far', 'smile-wink']"/>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  /* eslint-disable no-unused-vars */
  import { mapGetters, mapActions } from 'vuex'

  const comp = {
    name: 'Dashboard',
    data: () => ({
      /* eslint-disable no-unused-labels */

    })
  }

  export default comp
</script>

<style>
  .title {
    font-family: 'Ubuntu Condensed', sans-serif !important;
    font-weight: bold;
  }
  .hero {
    margin: 20vh;
    text-align: center;
  }
</style>