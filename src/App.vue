<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-title>
        Welcome
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          text
          rounded
          :class="index===active_index ? 'active-link' : ''"
          :to="link.url"
        >
          {{ link.label }} 
        </v-btn>
      </div>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-sheet color="information">
      <v-navigation-drawer v-model="drawer" absolute temporary style="position:fixed;">
        <v-list nav>
          <v-list-item-group
            v-model="group"
            active-class="green--text text--accent-8"
          >
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
              :to="link.url"
              :class="index===active_index ? 'active-link' : ''"
            >
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-decoration-none">{{ link.label }}</v-list-item-title>
            </v-list-item>
        
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title primary-title class="primary">
          <strong class="subheading">Find me on</strong>
          <v-spacer></v-spacer>
          <a 
          :href="social.url"
          v-for="(social, index) in socialIcons"
          :key="index"
          >
            <v-btn
              dark
              icon
              class="mx-2 mx-md-4"
            >
              <v-icon size="24">
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </a>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} &ndash; Chidiebere
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    active_index: null,
    drawer: false,
    group: null,
    links: [
      {
        label: "Home",
        url: "/",
        icon: 'mdi-home'
      },

      {
        label: "Projects",
        url: "/projects",
        icon: "mdi-folder-cog"
      },

      {
        label: "Certifications",
        url: "/certifications",
        icon: "mdi-certificate"
      },
      {
        label: "Resume",
        url: "/resume",
        icon: "mdi-certificate"
      }
    ],
    socialIcons: [
      {
        icon: "mdi-twitter",
        url: "https://twitter.com/paulchristain2"
      },
      {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/chidiebere-emmanuel-uzoma-1a8209194/"
      },
      {
        icon: "mdi-github",
        url: "https://github.com/tegajunior"
      }
    ]
  }),

  watch: {
    $route: {
      handler() {
        this.activateCurrentRoute(this.$router.currentRoute.name);
      },
      immediate: true,
      deep: true,
    }

  },

  mounted() {
    this.activateCurrentRoute(this.$router.currentRoute.name);
  },

  methods: {
    activateCurrentRoute(route_name) {
      switch (route_name) {

        case "Home":
          this.active_index = 0;
          break;

        case "Projects":
          this.active_index = 1;
          break;

        case "Certifications":
          this.active_index = 2;
          break;

        case "Resume":
          this.active_index = 3;
          break;

        default:
          break;
      }
    }

  },
};
</script>

<style lang="scss">
  .active-link {
    background-color: #fff;
    color: #41B883 !important;
    font-weight: 700;
  }
  .text-decoration-none {
    text-decoration: none !important;
  }
</style>