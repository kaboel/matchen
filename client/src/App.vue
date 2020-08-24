<template>
  <div>
    <RouterView/>
  </div>
</template>

<script>
  const comp = {
    name: 'App',
    components: {},
    watch: {
      '$route': {
        deep: true,
        immediate: true,
        handler(to, from) {
          document.title = to.meta.title || 'Matchen!'
        }
      }
    }
  }

  export default comp
</script>