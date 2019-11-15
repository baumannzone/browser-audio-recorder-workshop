<template>
  <div class="audio-page mb-5">
    <div class="shadow-sm mb-5 p-5 bg-white rounded">
      <header class="text-center border-bottom border-warning mb-4">
        <h1 class="text-dark">MediaStream Recording API</h1>
        <h3>aka Media Recorder API</h3>
      </header>
      <p class="lead">
        La API de MediaStream Recording nos permite capturar datos (de audio y/o video) que son generados por un objeto de tipo MediaStream
        o HTMLMediaElement para analizarlos, procesarlos o guardarlos.
      </p>
    </div>

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" @click="start" class="mr-2">Grabar</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="pause">Pausar</b-button>
      <b-button variant="outline-success" class="mr-2" @click="resume">Reanudar</b-button>
      <b-button @click="stop">Parar</b-button>
      <hr>

      <div v-if="hasVideos">
        <ul class="list-unstyled video-list">
          <li v-for="(item, idx) in videoList" :key="idx" class="video-item mb-3">
            <div class="d-flex justify-content-between bg-light p-2">
              <video controls :src="item.src">
                <code>video</code> not supported
              </video>
              <div class="d-flex align-items-center">
                <b-button variant="danger" size="sm" @click="removeItem(idx)">Delete</b-button>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      mediaRecorder: undefined,
      chunks: [],
      videoList: []
    }
  },
  computed: {
    startDisabled () {
      return this.isRecording === true
    },
    stopDisabled () {
      return this.isRecording === false
    },
    hasVideos () {
      return this.videoList.length > 0
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
      this.videoList.splice(idx, 1)
    }
  },
  created () {
    // Comprobar si el navegador soporta esta 'feature'
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((stream) => {
          console.log(stream)

          this.mediaRecorder = new MediaRecorder(stream)

          this.mediaRecorder.ondataavailable = (e) => {
            this.chunks.push(e.data)
          }

          this.mediaRecorder.onstop = (e) => {
            // https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME
            // const blob = new Blob(this.chunks, { type: 'video/webm' })
            const blob = new Blob(this.chunks, { type: 'video/x-msvideo' })
            const videoURL = window.URL.createObjectURL(blob)
            this.chunks = []

            this.videoList.push({
              src: videoURL
            })

            // window.URL.revokeObjectURL(blob)
          }
        })
        .catch((err) => {
          console.log('Err: ' + err)
        })
    } else {
      console.log('VIDEO: NO SOPORTADO')
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
