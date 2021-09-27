<template>
  <header>
    <h1 class="text-primary-500">{{siteName}}</h1>
  </header>
</template>

<script>
export default {
  name: 'mainHeader',
  data () {
    return {
      siteName: 'Students.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
