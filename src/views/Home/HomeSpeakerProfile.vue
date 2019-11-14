<template>
  <div class="speaker-profile mb-5">
    <b-card class="bg-white">
      <div class="d-flex flex-column flex-md-row flex-lg-row">
        <div class="avatar px-5 d-flex justify-content-center" @mouseenter="changeImgSrc" @mouseleave="changeImgSrc">
          <img :src="require('../../assets/' + imgName + '.png')" alt="avatar" height="100px"
               class="rounded-circle">
        </div>
        <div>
          <h2 class="border-bottom border-warning text-center text-md-left pb-1 mb-3">{{ name }}</h2>
          <p class="lead text-center text-md-left">{{ bio }}</p>
        </div>
      </div>
      <div class="social text-center my-3">
        <ul class="list-inline m-0">
          <li class="list-inline-item mx-1" :class="'ico-'+key" v-for="(val, key) in social" :key="key">
            <a :href="val.url">
              <i :class="val.class" class="fa-2x"></i>
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
        twitter: {
          url: 'https://twitter.com/baumannzone',
          class: 'fab fa-twitter'
        },
        dev: {
          url: 'https://dev.to/baumannzone',
          class: 'fab fa-dev'
        },
        github: {
          url: 'https://github.com/baumannzone',
          class: 'fab fa-github'
        },
        youtube: {
          url: 'https://www.youtube.com/channel/UCTTj5ztXnGeDRPFVsBp7VMA',
          class: 'fab fa-youtube'
        },
        linkedin: {
          url: 'https://www.linkedin.com/in/baumannzone',
          class: 'fab fa-linkedin'
        },
        medium: {
          url: 'https://medium.com/@baumannsito',
          class: 'fab fa-medium'
        }
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
        border 3px solid #5ce2c2

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
