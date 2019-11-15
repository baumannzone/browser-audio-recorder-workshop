<template>
  <div class="audio-page mb-5">

    <MediaRecorderHeader />

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" class="mr-2">Grabar</b-button>
      <b-button variant="outline-primary" class="mr-2">Pausar</b-button>
      <b-button variant="outline-success" class="mr-2">Reanudar</b-button>
      <b-button>Parar</b-button>
      <hr>

      <!-- TODO -->
      <!-- Si hay videos... -->
      <div>
        <ul class="list-unstyled video-list">
          <!-- TODO -->
          <!-- Bucle videos -->
          <li></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import MediaRecorderHeader from '@/components/HeaderMediaRecorderAPI'

export default {
  name: 'Video',
  components: { MediaRecorderHeader },
  data () {
    return {
      // TODO
      // variables
    }
  },
  computed: {
    // TODO
    // Expresiones
  },
  methods: {
    // TODO
    // Funciones / Métodos
  },
  created () {
    // Comprobar si el navegador soporta esta 'feature'
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      // TODO
      // Pedir acceso al video
    } else {
      console.log(' -- No video 😭')
    }
  }
}
</script>

<style lang="stylus">
  .video-list
    .video-item
      video
        width 400px
</style>
