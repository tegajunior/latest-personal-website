<template>
  <div class="">
    <v-container fluid class="text-center">
      <h1 class="text--subtitle-1 my-3 pa-2 primary white--text">Some Certificates Obtained</h1>

      <v-row>

        <v-col cols="12">
          <h3 class="text-subtitle-1 my-2 primary--text text-left">BootCamps</h3>
          <pdf src="./fullStackWebDevelopmentUdemy.pdf"></pdf>
        </v-col>

        <v-col cols="12">
          <h3 class="text--subtitle-1 my-2 primary--text text-left">Software Development</h3>
          <pdf src="./CertificateOfCompletion_Programming_Foundations_ Algorithms.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_Workflow Tools_for_Web_Developers.pdf"></pdf>   
        </v-col>

        <v-col cols="12">
          <h3 class="text--subtitle-1 my-2 primary--text text-left">Html/Css/JavaScript</h3>
          <pdf src="./CertificateOfCompletion_HTML_Essential_Training.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_Introduction_to_CSS.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_Responsive_Layout.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_CSS_ Variables_and_Fluid_Layouts.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_Building_a_Responsive_Portfolio_Site.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_JavaScript Essential_Training.pdf"></pdf>
        </v-col>
        
        <v-col cols="12">
          <h3 class="text--subtitle-1 my-2 primary--text text-left">VueJS</h3>
          <pdf src="./CertificateOfCompletion_Learning_Vue.js.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_Vue.js Essential_Training.pdf"></pdf>
          <pdf src="./CertificateOfCompletion_Vue.js_ Working_with_APIs.pdf"></pdf>
        </v-col>

        <v-col cols="12">
          <h3 class="text--subtitle-1 my-2 primary--text text-left">Other Tools</h3>
          <pdf src="./CertificateOfCompletion_Learning_Git_and_GitHub.pdf"></pdf>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import pdf from "vue-pdf"
export default {
  name: "Certifications",
  components: {
    pdf
  }
}
</script>