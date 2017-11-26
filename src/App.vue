<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import '~font-awesome/css/font-awesome.min.css';
  @import '~bulma/bulma.sass';
  body {
    background-color: black;
  }
  .has-padding-bottom-10 {
    padding-bottom: 10%;
  }
</style>
