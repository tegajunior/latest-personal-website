<template>
  <div class="">
    <v-container fluid>
      <h3 class="text-center primary--text my-5 font-weight-light">Projects I have done individually or as part of a team.</h3>
      <v-row justify="space-between">
        <template v-for="(project, index) in projects">
          <v-col cols="12" md="4" :key="index">
            <v-hover v-slot="{ hover }">
              <v-card
                class="white--text"
                color="primary"
                :elevation="hover ? '13' : '2'"
                :class="{'on-hover': hover, 'show-btns':hover}"
              >
                <v-card-title >
                   {{ project.title }}
                </v-card-title>
                <v-card-text class="white--text">
                  {{ project.description }}
                  <v-divider class="my-3 white"></v-divider>
                  <strong><i>Built with: </i></strong><code><strong>{{ project.languages }}</strong></code>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <a :href="project.url" class="text-decoration-none">
                    <v-btn
                      color="transparent"
                      :class="{'show-btns': hover }"
                      dark
                    >
                     click here
                    </v-btn>
                  </a>
                </v-card-actions>
              </v-card>

            </v-hover>
          </v-col>
        </template>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data: () => ({
    projects: [
      {
        title: 'Learning Management System',
        description: 'This is a private learning management system owned by the Lagos state government of Nigeria. To use platform, you must be enrolled by an admin. It is integrated with LinkedIn Learning for content uploading.',
        languages: "Html/Css, JavaScript, Sass, Vue.JS, Vuex, Laravel, etc",
        url: "https://peaceful-clarke-66c2f4.netlify.app/login"
      },
      {
        title: 'Meeting App',
        description: 'This is a simple meeting app. Any user can register as to be able to create a meeting for others to join. Any registered user can join a created meeting',
        languages: "Html/Css, Bootstrap, JavaScript, Vue.JS, Vuex, Firebase, Firestore Cloud",
        url: "https://vue-meeting-app.web.app/"
      },
      {
        title: 'Simple Weather App',
        description: 'This is a simple weather reporting app that displays the temperature and weather condition of any city',
        languages: "Html/Css, Node.js, Ejs, APIs,",
        url: "https://evening-caverns-80880.herokuapp.com/"
      },
      {
        title: 'Survey Creation App',
        description: 'This is a simple app for survey creation. Before using this app, you have to create an account first.',
        languages: "Html/Css, Node.js, Ejs, Mongodb, Mongoose, etc",
        url: "http://waaw-survey-creator.herokuapp.com/"
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
