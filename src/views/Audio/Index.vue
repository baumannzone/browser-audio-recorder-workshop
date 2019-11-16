<template>
  <div class="audio-page mb-5">
    <MediaRecorderHeader />

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" class="mr-2" @click="start">Grabar</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="pause">Pausar</b-button>
      <b-button variant="outline-success" class="mr-2" @click="resume">Reanudar</b-button>
      <b-button variant="secondary" class="mr-2" @click="stop">Parar</b-button>

      <hr>

      <h6 class="text-dark">Tip:</h6>
      <p class="bg-light p-3 text-monospace text-muted">
        State:  inactive <br>
        State:  recording <br>
        State:  paused <br>
        State:  recording
      </p>

      <!-- Si hay audios -->
      <div v-if="hasAudios">
        <ul class="list-unstyled audio-list">
          <!-- TODO -->
          <!-- Bucle de Audios -->
          <li v-for="(a, index) in audioList" :key="a.src">
            <div class="d-flex justify-content-between mb-2">
              <audio :src="a.src" controls class="w-100 mr-2"></audio>
              <div class="d-flex align-content-center">
                <b-button variant="danger" @click="deleteAudio(index)">Borrar</b-button>
              </div>
            </div>
          </li>
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
      mediaRecorder: undefined,
      chunks: [],
      audioList: []
    }
  },
  computed: {
    // TODO
    // Expresiones
    hasAudios () {
      return this.audioList.length > 0
    }
  },
  methods: {
    start () {
      console.log('start')
      this.mediaRecorder.start()
    },
    stop () {
      console.log('stop')
      this.mediaRecorder.stop()
    },
    pause () {
      console.log('pause')
      this.mediaRecorder.pause()
    },
    resume () {
      console.log('resume')
      this.mediaRecorder.resume()
    },
    deleteAudio (idx) {
      this.audioList.splice(idx, 1)
    }
  },
  created () {
    // Comprobar si el navegador soporta esta 'feature'
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // TODO
      // Pedir acceso al micrófono
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          // MediaStream
          console.log(stream)

          // MediaRecorder
          this.mediaRecorder = new MediaRecorder(stream)

          // Cuando haya datos disponibles
          this.mediaRecorder.ondataavailable = (e) => {
            this.chunks.push(e.data)
          }

          // --
          this.mediaRecorder.onstop = (e) => {
            const blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' })

            // Vaciamos los trozos
            this.chunks = []
            const audioURL = window.URL.createObjectURL(blob)

            // Audios
            this.audioList.push({ src: audioURL })

            // Revocar
            window.URL.revokeObjectURL(blob)
          }
        })
        .catch((err) => {
          console.log('Audio:')
          console.log(err)
        })
    } else {
      console.log('-- No audio 😭')
    }
  }
}
</script>
