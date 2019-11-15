<template>
  <div class="shadow-sm mb-5 p-5 bg-white rounded">
    <header class="text-center border-bottom border-warning mb-4">
      <h1 class="text-dark">Shape Detection API</h1>
      <h3>aka Face Detector API</h3>
    </header>
    <p class="lead">
      This API provides access to accelerated shape detectors (e.g. human faces) for still images and/or live image
      feeds.
      <br>
      It is not a W3C Standard nor is it on the W3C Standards Track. <em>Only for Chrome</em>
    </p>
    <a href="https://wicg.github.io/shape-detection-api/">https://wicg.github.io/shape-detection-api/</a>
  </div>
</template>
<script>
export default {
  name: 'FaceDetectionHeader'
}
</script>
