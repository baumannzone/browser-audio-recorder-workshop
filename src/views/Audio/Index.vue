<template>
  <div class="audio-page mb-5">
    <MediaRecorderHeader />

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" class="mr-2" @click="start" :disabled="startDisabled">Grabar</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="pause" :disabled="stopDisabled">Pausar</b-button>
      <b-button variant="outline-success" class="mr-2" @click="resume" :disabled="startDisabled">Reanudar</b-button>
      <b-button variant="secondary" @click="stop" :disabled="stopDisabled">Parar</b-button>

      <hr>

      <h6 class="text-dark">Tip:</h6>
      <pre class="bg-light p-3">
State:  inactive
State:  recording
State:  paused
State:  recording</pre>

      <div v-if="hasAudios">
        <ul class="list-unstyled audio-list">
          <li v-for="(item, idx) in audioList" :key="idx" class="audio-item mb-3">
            <div class="d-flex justify-content-between">
              <audio :controls="true" :loop="false" :src="item.src" class="mr-2 w-100"></audio>
              <div class="d-flex align-items-center">
                <b-button variant="danger" size="sm" @click="removeItem(idx)"> Eliminar </b-button>
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
      supported: undefined,
      mediaRecorder: undefined,
      chunks: [],
      audioList: [],
      isRecording: false
    }
  },
  computed: {
    startDisabled () {
      return this.isRecording === true
    },
    stopDisabled () {
      return this.isRecording === false
    },
    hasAudios () {
      return this.audioList.length > 0
    }
  },
  methods: {
    start () {
      console.log('State: ', this.mediaRecorder.state)
      this.mediaRecorder.start()
      this.isRecording = true
    },
    stop () {
      console.log('State: ', this.mediaRecorder.state)
      this.mediaRecorder.stop()
      this.isRecording = false
    },
    pause () {
      console.log('State: ', this.mediaRecorder.state)
      this.mediaRecorder.pause()
      this.isRecording = false
    },
    resume () {
      console.log('State: ', this.mediaRecorder.state)
      this.mediaRecorder.resume()
      this.isRecording = true
    },
    removeItem (idx) {
      this.audioList.splice(idx, 1)
    }
  },
  created () {
    // Comprobar si el navegador soporta esta 'feature'
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.supported = true

      // Request permission for audio only
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          // La interfaz MediaStream representa una secuencia de contenido multimedia.
          // Una transmisión consta de varias pistas, como pistas de video o audio.
          console.log(stream)

          // Crea un objeto MediaRecorder dado un objeto MediaStream
          this.mediaRecorder = new MediaRecorder(stream)

          // Manejar los datos disponibles. Los guardamos en un array para usarlos luego
          this.mediaRecorder.ondataavailable = (e) => {
            this.chunks.push(e.data)
          }

          // Evento onStop
          this.mediaRecorder.onstop = (e) => {
            console.log(stream)
            console.log('recorder stopped')

            // Un objeto Blob representa un objeto tipo fichero de datos planos inmutables
            // Los Blobs representan datos que no necesariamente se encuentran en un formato nativo de JavaScript
            var blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' })

            // Vaciamos los 'trozos'
            this.chunks = []
            const audioURL = window.URL.createObjectURL(blob)

            this.audioList.push({
              src: audioURL
            })

            window.URL.revokeObjectURL(blob)
          }
        })
        .catch((err) => {
          console.log('Err: ' + err)
        })
    } else {
      this.supported = false
    }
  }
}
</script>
