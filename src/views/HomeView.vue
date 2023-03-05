<template>
  <div class="contentList">
    <v-container>
      <v-row>
        <v-col cols="8">
          <div class="text-h1 text-indigo">List</div>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-badge :content="tasksNum <= 1 ? 'task' : 'tasks'" color="indigo">
            <div class="text-h2 text-indigo">{{ tasksNum }}</div>
          </v-badge>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container>
    <Todolist />
  </v-container>

  <v-btn icon="fas fa-plus" color="indigo-darken-2 addTask">
    <v-icon>fas fa-plus</v-icon>
    <v-dialog v-model="dialog" activator="parent" width="auto">
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="searchInput"
            clearable
            label="Label"
            variant="underlined"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
          <v-btn color="success">Add Task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
  {{ text }}
</template>

<script setup>
import { ref, defineComponent, computed } from "vue";
import ToDoList from "../components/todolist.vue";
const Todolist = defineComponent(ToDoList);

const dialog = ref(false);

let tasksNum = ref(2);
let searchInput = ref(null);

let text = computed(() => searchInput);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add([faPlus]);
</script>

<style lang="scss">
.addTask {
  position: fixed;
  z-index: 5000;
  right: 10%;
  bottom: 10%;
}

.contentList {
  background: url(../assets/imgs/oceanImgList.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 225px;
  padding: 5rem;
  position: relative;
  background-position-y: center;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #0000008a, transparent);
  }

  .v-container {
    z-index: 50;
    position: relative;
  }
}
</style>