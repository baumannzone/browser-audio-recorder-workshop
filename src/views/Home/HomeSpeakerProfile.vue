<template>
  <div class="speaker-profile">
    <b-card class="bg-white">
      <div class="d-flex">
        <div class="avatar px-5" @mouseenter="changeImgSrc" @mouseleave="changeImgSrc">
          <img :src="require('../../assets/' + imgName + '.png')" alt="avatar" height="100px"
               class="rounded-circle border-white">
        </div>
        <div>
          <h2 class="border-bottom border-warning">{{ name }}</h2>
          <p class="lead">{{ bio }}</p>
        </div>
      </div>
      <div class="social text-center">
        <ul class="list-inline m-0">
          <li class="list-inline-item" :class="'ico-'+key" v-for="(val, key) in social" :key="key">
            <a :href="val">
              icon
            </a>
          </li>
        </ul>
      </div>
    </b-card>
  </div>
</template>

<script>
const imgNames = {
  baumannzone: 'baumannzone',
  rambito: 'rambito'
}

export default {
  name: 'SpeakerProfile',
  data () {
    return {
      name: 'Jorge Baumann',
      social: {
        twitter: 'https://twitter.com/baumannzone',
        dev: 'https://dev.to/baumannzone',
        github: 'https://github.com/baumannzone',
        youtube: 'https://www.youtube.com/channel/UCTTj5ztXnGeDRPFVsBp7VMA',
        linkedin: 'https://www.linkedin.com/in/baumannzone',
        medium: 'https://medium.com/@baumannsito'
      },
      bio: 'Desarrollador web Full-Stack. Apasionado de la tecnología en general y del desarrollo web en particular. Actualmente trabaja para el departamento de Liquid Squad (Accenture).',
      currentImg: imgNames.baumannzone
    }
  },
  computed: {
    imgName () {
      return this.currentImg
    }
  },
  methods: {
    changeImgSrc () {
      this.currentImg = this.currentImg === imgNames.baumannzone ? imgNames.rambito : imgNames.baumannzone
    }
  }
}
</script>

<style lang="stylus">
  .speaker-profile
    color #444

    .avatar
      img
        border 3px solid white

    .social
      ul
        li
          &.ico-twitter a
            color #059ff6

          &.ico-twitch a
            color #553d87

          &.ico-github a
            color #272e33

          &.ico-facebook a
            color #4b72bb

          &.ico-meetup a
            color #f63f60

          &.ico-linkedin a
            color #0282bd

          &.ico-instagram a
            color #cc3c9a

          &.ico-youtube a
            color #ff0400

          &.ico-dev a
            color #0a0a0a

          &.ico-medium a
            color #2f2f2f
</style>
