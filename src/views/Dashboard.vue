<template>
  <div>
    <div class="hero has-background">
      <div class="hero-body">
        <div class="container">
          <h1 class="app-title">
            Matchen!
          </h1>
          <h2 class="subtitle">
            A Matching Game.
          </h2>
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
              Hi,
            </p>
            <p class="subtitle player-name is-1">
              {{ playerName+"!" }}
            </p>
            <button class="button is-link is-large is-fullwidth"
                    @click="start"
                    :disabled="!startButton">
              <span v-if="!startButton">
                <fa-icon :icon="['fas', 'spinner']" spin/>
              </span>
              <span v-else>
                Let's play!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */
  import { mapActions } from 'vuex'
  import Footer from '../components/Footer'

  const comp = {
    name: 'Dashboard',
    components: { Footer },
    data: () => ({
      playerName: '',
      startButton: false,
    }),
    watch: {
      playerName: {
        deep: true,
        immediate: true,
        handler() {
          this.startButton = false
          setTimeout(() => {
            this.startButton = true
          }, 1000)
        }
      }
    },
    methods: {
      ...mapActions({
        setPlayer: 'setPlayer',
      }),
      start() {
        this.setPlayer(this.playerName)
      }
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
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>