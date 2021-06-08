<template>
  <div>
    <v-container fluid class="text-center">
      <h1 class="text--subtitle-1 my-3 primary--text">Resume</h1>
      <pdf src="./My-CV-as-at-24-may-2021-pdfv.pdf"></pdf>
    </v-container>
  </div>
</template>

<script>
import pdf from "vue-pdf"
export default {
  name: "Resume",
  components: {
    pdf
  }
}
</script>