<template>
  <div class="audio-page mb-5">

    <FaceDetectionHeader/>

    <div class="shadow-sm p-5 bg-white rounded">
      <b-button variant="primary" @click="checkFaces" class="mr-2">Detectar</b-button>

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
  methods: {
    checkFaces () {
      // Comprobar si está disponible
      if (typeof window.FaceDetector === 'undefined') {
        console.log('No face detection!')
        return
      }

      // Limpiar 🧹
      const arrFaces = [...document.getElementsByClassName('face')]
      arrFaces.forEach((face) => {
        face.parentNode.removeChild(face)
      })

      // Comparar API vison de google:
      // https://cloud.google.com/vision/#demostracin-de-la-api-vision
      const faceDetector = new window.FaceDetector()

      faceDetector.detect(this.$refs.image)
        .then(faces => {
          console.log(faces)

          faces.forEach((face) => {
            // Face box
            const { width, height, top, left } = face.boundingBox

            // Crear un elemento div
            const faceBox = document.createElement('div')

            // Agregar la clase `face` (definida abajo, en el bloque css)
            faceBox.classList.add('face')

            // Añadir CSS: posición y tamaño
            faceBox.style.cssText = `
              width: ${width}px;
              height: ${height}px;
              top: ${top}px;
              left: ${left}px;
            `
            // Añadir el elemento div al DOM
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
