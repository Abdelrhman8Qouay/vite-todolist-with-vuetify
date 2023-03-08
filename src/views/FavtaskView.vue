<template>
  <div class="contentList">
    <v-container>
      <v-row>
        <v-col cols="8">
          <div
            class="text-lg-h1 text-md-h2 text-sm-h3 text-xs-h3 text-h3 text-white"
          >
            Favorites
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container>
    <Todolist :get="'fav'" />
  </v-container>
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
const store = useTasksStore();
</script>

  <style lang="scss" scoped>
.addTask {
  z-index: 5000;
  right: 10%;
  bottom: 10%;
}

.contentList {
  background: url(../assets/imgs/amazing.jpg);
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