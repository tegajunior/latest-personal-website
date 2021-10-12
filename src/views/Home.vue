<template>
  <div>
    <v-container fluid>
      <v-row justify="space-between">
        <v-col cols="12" class="mb-10">
          <ProfileCard />
        </v-col>
        <v-col cols="12" :elevation="24" class="text-md-left text-center primary--text">
          <div>
            <h3 class="text--subtitle-1 mb-3 pa-2 primary white--text">About me</h3>
            <p class="text--secondary">
              Are you looking for a fullstack web developer? Search no more.
              I have valuable experience in building awesome web software solutions that are <i>responsive</i>
              , <i>secure</i>, <i>scalable</i>, and <i>fast</i>.
              I write clean codes that are easy to maintain and meets international standard.
            </p>
            <p class="text--disabled">I love travelling and watching the love of my life (Chelsea FC) play football.</p>
          </div>
          <v-divider :width="dynamicWidth" class="mx-auto"></v-divider>
          <div class="my-6">
            <h3 class="text--subtitle-1 my-3 pa-2 primary white--text">Languages/Frameworks/Databases</h3>
            <v-sheet>
              <v-chip
                v-for="stack in stacks" :key="stack.label"
                class="ma-2"
                color="primary"
                text-color="primary"
                outlined
              >
                <v-icon left>
                  {{ stack.icon }}
                </v-icon>
                {{ stack.label }}
              </v-chip>
            </v-sheet>
          </div>
          <v-divider :width="dynamicWidth" class="mx-auto"></v-divider>

          <div class="my-6">
            <h3 class="text--subtitle-1 my-3 pa-2 primary white--text">Contact me</h3>
            <p class="text--secondary">
              <span class="mt-10">
                Mail me on <a href="mailto:'chidiebereuzomahumble@gmail.com'" class="blue--text lighten-4">chidiebereuzomahumble@gmail.com</a>
              </span><br><br>
              <span>
                Give me a call on <a href="tel:+2349074191547" class="blue--text lighten-4">+2349074191547</a> or <a href="tel:+2347065569189" class="blue--text lighten-4">+2347065569189</a>
              </span>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import ProfileCard from "@/components/ProfileCard"

  export default {
    name: 'Home',

    data() {
      return {
        stacks: [
        {
          label: "Html",
          icon: "mdi-code-tags"
        },
        {
          label: "Css",
          icon: "mdi-code-tags"
        },
        {
          label: "JavaScript",
          icon: "mdi-code-tags"
        },
        {
          label: "Sass",
          icon: "mdi-sass"  
        },
        {
          label: "Tailwind Css",
          icon: "mdi-tailwind"
        },
        {
          label: "Bootstrap",
          icon: "mdi-bootstrap"
        },
        {
          label: "Vue.Js",
          icon: "mdi-vuejs"
        },
        {
          label: "Vuetify",
          icon: "mdi-vuetify"
        },
        {
          label: "React",
          icon: "mdi-react"
        },
        {
          label: "Node.Js",
          icon: "mdi-nodejs"
        },
        {
          label: "Firebase",
          icon: "mdi-firebase"
        },
        {
          label: "MoongoDB",
          icon: "mdi-code-tags"
        },
        {
          label: "Moongose",
          icon: "mdi-code-tags"
        }
      ]
      }
    },

    components: {
      ProfileCard
    },
    computed: {
      dynamicWidth() {
        return this.$vuetify.breakpoint.width < 640 ? '50%' : '100%'
      }
    }
  }
</script>
