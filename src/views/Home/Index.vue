<template>
  <div class="home text-light">
    <BaseHeaderTitle
      title="Convierte tu navegador en una grabadora de audio 🎤"
      subtitle="Usando funciones nativas de javascript de tu navegador"
    >
    </BaseHeaderTitle>

    <div class="mb-5">
      <img src="../../assets/main.png" alt="OSW workshop description" class="w-100">
    </div>

    <div class="text-monospace">
      <p class="lead">
        ¿Alguna vez te has preguntado cómo puedes acceder al micrófono de tu pc usando javascript desde un navegador?
        <br>
        Con la llegada de la API de <code>MediaRecorder</code> a los navegadores, hacer esto es muy fácil.
        En este taller veremos cómo acceder al micrófono desde el navegador y crear nuestra grabadora,
        gracias a Javascript del lado del navegador (sin librerías externas).
      </p>

      <p class="lead">
        🔥 EXTRA: Configura y despliega tu Aplicación Vue de manera automática con Netlify
      </p>
    </div>

    <hr class="my-5">

    <SpeakerProfile/>

  </div>
</template>

<script>
import BaseHeaderTitle from '@/components/BaseHeaderTitle'
import SpeakerProfile from './HomeSpeakerProfile'

export default {
  name: 'home',
  components: {
    SpeakerProfile,
    BaseHeaderTitle
  }
}
</script>
