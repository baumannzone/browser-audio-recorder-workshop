<template>
  <div class="audio-page mb-5">
    <MediaRecorderHeader />

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" class="mr-2">Grabar</b-button>
      <b-button variant="outline-primary" class="mr-2">Pausar</b-button>
      <b-button variant="outline-success" class="mr-2">Reanudar</b-button>
      <b-button variant="secondary" class="mr-2">Parar</b-button>

      <hr>

      <h6 class="text-dark">Tip:</h6>
      <p class="bg-light p-3 text-monospace text-muted">
        State:  inactive <br>
        State:  recording <br>
        State:  paused <br>
        State:  recording
      </p>

      <!-- Si hay audios -->
      <div>
        <ul class="list-unstyled audio-list">
          <!-- TODO -->
          <!-- Bucle de Audios -->
          <li></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import MediaRecorderHeader from '@/components/HeaderMediaRecorderAPI'

export default {
  name: 'Audio',
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
      // Pedir acceso al micrófono

    } else {
      console.log('-- No audio 😭')
    }
  }
}
</script>
