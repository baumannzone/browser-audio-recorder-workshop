<template>
  <div class="audio-page mb-5">

    <FaceDetectionHeader/>

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" @click="faces" class="mr-2">Detectar</b-button>
      <hr>

      <div id="wrap" class="wrap" ref="wrap">
        <figure>
          <img src="../../assets/faces.png" alt="img" ref="image">
          <figcaption class="mt-2">
            Source: <a href="https://unsplash.com/photos/T6zu4jFhVwg">https://unsplash.com/photos/T6zu4jFhVwg</a>
          </figcaption>
        </figure>
      </div>

    </div>
  </div>
</template>

<script>
import FaceDetectionHeader from './FaceDetectionHeader'

export default {
  name: 'FaceDetection',
  components: { FaceDetectionHeader },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    faces () {
      // if (typeof window.FaceDetector === 'undefined') {
      //   console.log('No face detection!')
      //   return
      // }

      // Clear face box
      // const arrFaces = [...document.getElementsByClassName('face')]
      // arrFaces.forEach((face) => {
      //   face.parentNode.removeChild(face)
      // })

      const faceDetector = new window.FaceDetector()

      faceDetector.detect(this.$refs.image)
        .then(faces => {
          console.log(faces)

          faces.forEach((face) => {
            // Face box
            const { width, height, top, left } = face.boundingBox
            const faceBox = document.createElement('div')
            faceBox.classList.add('face')
            faceBox.style.cssText = `
              width: ${width}px;
              height: ${height}px;
              top: ${top}px;
              left: ${left}px;
            `
            this.$refs.wrap.appendChild(faceBox)
            console.log(faceBox)
          })
        })
        .catch((err) => {
          console.error(err.toString())
        })
    }
  }
}
</script>

<style lang="stylus">
  .wrap
    position relative

  .face
    position absolute
    z-index 1
    border 2px dashed #fabada
    box-shadow: 0 0 15px 5px white;

</style>
