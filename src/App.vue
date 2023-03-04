
<template>
  <v-app id="inspire">
    <v-navigation-drawer expand-on-hover rail model-value>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="['fas', 'home']"
          color="info"
          title="TodoList Page"
          value="todolist"
          to="/"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="fas fa-home"
          color="info"
          title="About Page"
          value="about"
          to="/about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, defineComponent } from "vue";
</script>


<style lang="scss">
</style>
