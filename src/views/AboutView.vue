<template>
  <div class="content">
    <div
      class="about mx-auto d-flex flex-column"
      theme="dark"
      style="max-width: 400px"
    >
      <v-card
        class="mx-auto"
        color="#26c6da"
        theme="dark"
        max-width="400"
        prepend-icon="fab fa-twitter"
        title="Twitter"
      >
        <template v-slot:prepend>
          <v-icon size="x-large"></v-icon>
        </template>

        <v-card-text class="text-h5 py-2">
          "Welcome Friend, this is (todolist) application with
          <v-icon icon="fab fa-vuejs"></v-icon>
          <svg
            class="v-icon notranslate v-theme--dark v-icon--size-default"
            style="fill: #fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>vuetify</title>
            <path
              d="M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z"
            />
          </svg>
          <v-icon icon="fab fa-html5"></v-icon>
          <v-icon icon="fab fa-css3"></v-icon>
          <v-icon icon="fab fa-js"></v-icon>
          <v-icon icon="fab fa-html5"></v-icon>
          <v-img
            src="https://pinia.vuejs.org/logo.svg"
            width="35"
            style="display: inline-block; height: 35px"
          ></v-img>
          and created with 💖."
          <div class="d-flex justify-space-around">
            <v-btn
              color="indigo-darken-4"
              icon
              href="https://github.com/Abdelrhman8Qouay"
              ><v-icon icon="fab fa-github"></v-icon
            ></v-btn>
            <v-btn
              color="indigo-darken-4"
              icon
              href="https://www.facebook.com/profile.php?id=100090009622327"
              ><v-icon icon="fab fa-facebook"></v-icon
            ></v-btn>
            <v-btn
              color="indigo-darken-4"
              icon
              href="https://twitter.com/AbdelrhmanQouay"
              ><v-icon icon="fab fa-twitter"></v-icon
            ></v-btn>
            <v-btn
              color="indigo-darken-4"
              icon
              href="https://www.linkedin.com/in/abdelrhman-ashraf-taoc-015b86265/"
              ><v-icon icon="fab fa-linkedin"></v-icon
            ></v-btn>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-list-item
            class="w-100"
            target="_blank"
            href="https://twitter.com/AbdelrhmanQouay"
          >
            <template v-slot:prepend>
              <v-avatar
                color="grey-darken-3"
                image="../../src/assets/bussinLogo.png"
              ></v-avatar>
            </template>

            <v-list-item-title>Abdelrhman Ashraf</v-list-item-title>

            <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>

            <template v-slot:append>
              <div class="justify-self-end">
                <v-icon class="me-1" icon="fas fa-heart"></v-icon>
                <span class="subheading me-2">320</span>
                <span class="me-1">·</span>
                <v-icon class="me-1" icon="fas fa-share"></v-icon>
                <span class="subheading">32</span>
              </div>
            </template>
          </v-list-item>
        </v-card-actions>
      </v-card>

      <v-divider></v-divider>
    </div>
  </div>
</template>

<script setup>
// To Add Icons On This Page >>>>>
// this is must have
// Get Icons To Put It On { library } to get from it the icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSquare,
  faBars,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faVuejs,
  faGithub,
  faFacebook,
  faLinkedin,
  faTwitter,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

library.add([faStar, faSquare, faBars, faHeart, faShare]);
library.add([
  faVuejs,
  faGithub,
  faFacebook,
  faLinkedin,
  faTwitter,
  faCss3,
  faHtml5,
  faJs,
]);
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #303f9f, #fff);
  padding: 35px;
}
</style>