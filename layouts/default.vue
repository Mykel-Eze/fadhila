<template>
  <div id="app-wrapper">
    <Navbar />
    <div id="main-contents-wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
div#nav {
  float: left;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

div#main-contents-wrapper {
  padding-top: 90px;
}
</style>
