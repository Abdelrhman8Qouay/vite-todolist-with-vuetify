
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="indigo-darken-2"
      expand-on-hover
      rail
      model-value
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          prepend-avatar="./assets/bussinLogo.png"
          title="Abdelrhman Ashraf"
          subtitle="qouay555@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="fas fa-list"
          color="warning"
          title="TodoList Page"
          value="todolist"
          to="/"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="fas fa-star"
          color="warning"
          title="Favorite Tasks"
          value="favoritetasks"
          to="/favtasks"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="fas fa-address-card"
          color="warning"
          title="About Page"
          value="about"
          to="/about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="text-right text-white px-3" color="indigo-darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        >ToDoList Application | With <v-icon icon="fab fa-vuejs"></v-icon> AS
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const drawer = ref(false);

// To Add Icons On This Page >>>>>
// this is must have
// Get Icons To Put It On { library } to get from it the icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faList,
  faAddressCard,
  faStar,
  faSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";

library.add([faList, faAddressCard, faStar, faSquare, faBars]);
library.add(faVuejs);
</script>


<style lang="scss">
</style>
