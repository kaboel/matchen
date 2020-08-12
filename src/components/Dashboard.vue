<template>
  <div class="hero has-background">
    <div class="hero-body">
      <div class="container">
        <h1 class="app-title">
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
                       v-model="playerName"
                       placeholder="What's your name?">
                <span class="icon is-left">
              <fa-icon :icon="['far', 'smile-wink']"/>
            </span>
              </div>
            </div>
            <div class="container pt-5"
                 v-if="playerName!==''">
              <p class="subtitle is-5 is-marginless">
                Hello,
              </p>
              <p class="subtitle player-name is-1">
                {{ playerName+"!" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */
  import { mapActions } from 'vuex'

  const comp = {
    name: 'Dashboard',
    data: () => ({
      playerName: '',
      startButton: false,
    }),
    watch: {
      playerName: {
        deep: true,
        immediate: true,
        handler() {

        }
      }
    },
    methods: {
      ...mapActions({
        setPlayer: 'setPlayer',
      }),
    },
  }

  export default comp
</script>

<style scoped>
  .app-title {
    font-size: 5rem;
  }
  .app-title, .player-name {
    font-family: 'Ubuntu Condensed', sans-serif !important;
    font-weight: bolder;
  }
  .hero {
    margin: 20vh auto;
    text-align: center;
  }
</style>