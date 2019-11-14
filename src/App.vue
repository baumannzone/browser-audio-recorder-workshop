<template>
  <div id="app">
    <BaseNavigationBar/>
    <router-view/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseNavigationBar from './components/BaseNavigationBar'
import BaseFooter from './components/BaseFooter'

export default {
  components: { BaseFooter, BaseNavigationBar }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
