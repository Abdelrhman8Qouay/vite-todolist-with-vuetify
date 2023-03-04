<template>
  <div class="home">Home Page</div>
  <v-col class="ma-2">
    <v-row justify="space-around"> icons Tora </v-row>
  </v-col>
  <Todolist />
</template>

<script setup>
import { ref, defineComponent } from "vue";

import ToDoList from "../components/todolist.vue";
const Todolist = defineComponent(ToDoList);
</script>

<style lang="scss"></style>