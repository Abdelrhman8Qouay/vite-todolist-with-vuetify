<template>
  <div class="contentList">
    <v-container>
      <v-row>
        <v-col cols="8">
          <div
            class="text-lg-h1 text-md-h2 text-sm-h3 text-xs-h3 text-h3 text-white"
          >
            List
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container>
    <Todolist />
  </v-container>

  <v-btn position="fixed" color="indigo-darken-2" class="addTask">
    <v-icon>fas fa-plus</v-icon>
    <v-dialog v-model="dialog" activator="parent" width="auto">
      <v-card style="min-width: 300px">
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                color="warning"
                @keydown.enter="store.addTask()"
                v-model="store.titleTask"
                clearable
                label="Title task"
                variant="underlined"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="indigo" @click="dialog = false">Close</v-btn>
          <v-btn @click="store.addTask()" color="warning">Add Task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
  {{ store.doubleCount }}
</template>

<script setup>
import { ref, defineComponent, computed } from "vue";
// Get Tasks Store ----------------
import { useTasksStore } from "@/stores/tasksStore";
// Get Components -----------------
import ToDoList from "../components/todolist.vue";
const Todolist = defineComponent(ToDoList);

// Get Icons To Put It On { library } to get from it the icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add([faPlus]);

// Option Variables ----------------
// const isAcitveSnackbar = ref(false);
const dialog = ref(false);

const store = useTasksStore();

// Functions ------------------------
</script>

<style lang="scss" scoped>
.addTask {
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