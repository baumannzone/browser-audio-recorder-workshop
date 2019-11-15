<template>
  <div class="audio-page mb-5">

    <FaceDetectionHeader/>

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary">Detectar</b-button>
      <hr>

      <div class="wrap" ref="wrap">
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
  methods: {
    faces () {

      // TODO 1
      // if (window.FaceDetector == undefined) {
      //   console.error('Face Detection not supported on this platform');
      // }
      // Bonus! 😝
      // if (window.BarcodeDetector == undefined) {
      //   console.error('Barcode Detection not supported on this platform');
      // }

      // 🧹
      // const arrFaces = [...document.getElementsByClassName('face')]
      // arrFaces.forEach((face) => {
      //   face.parentNode.removeChild(face)
      // })

      // TODO 2
      // 1. Crear new faceDetector
      // 2. Detectar "caras"
      // 3. Recorrer "caras"
      // 4. Crear cajitas con la clase `face`

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
