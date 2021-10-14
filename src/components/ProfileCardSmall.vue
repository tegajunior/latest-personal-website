<template>
  <v-card class="mx-auto" width="1000" max-width="100%" tile>
    <v-img height="100%" src="../assets/my-profile-pic.jpg">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-5" cols="12" dark>
          <v-avatar class="profile" color="grey" size="35%" tile>
            <v-img src="../assets/my-profile-pic.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-2">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">
                Chidiebere Uzoma
              </v-list-item-title>
              <v-list-item-subtitle>
                Full Stack Developer
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCardSmall",
};
</script>

<style scoped>
.title-sm-scrn,
.subtitle-sm {
  color: #33b178;
}
.title-sm-scrn {
  font-size: 100px;
}
</style>
