<template>
  <div>
    <v-container fluid class="text-center">
      <h1 class="text--subtitle-1 my-3 primary--text">Resume</h1>
      <pdf src="./cv-as-of-09-06-2021.pdf"></pdf>
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