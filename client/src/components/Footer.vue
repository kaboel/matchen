<template>
  <footer class="footer pt-5 pb-6">
    <div class="content has-text-centered">
      <p>
        <strong>Matchen!</strong> by <a href="https://kaboel.space" target="_blank">Faiq Allam</a>.
        <br/>The <a href="https://github.com/kaboel/matchen" target="_blank">source code</a> is licensed <a href="https://opensource.org/licenses/GPL-3.0" target="_blank">GPLv3</a>.
        <br/>Built with <a href="https://vuejs.org" target="_blank">Vue</a> and <a href="https://bulma.io" target="_blank">Bulma</a>.
      </p>
    </div>
  </footer>
</template>

<script>
  const comp = {
    name: 'Footer',
  }

  export default comp
</script>

<style scoped>
  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
</style>