<template>
  <v-list lines="three" select-strategy="classic">
    <v-card-title class="text-right">
      <div class="text-h2 text-indigo">
        {{ tasksContainer.length }}
        {{ tasksContainer.length <= 1 ? "task" : "tasks" }}
      </div>
    </v-card-title>

    <v-list-item
      class="listItem"
      @click="task.completed = !task.completed"
      :value="task.id"
      :class="task.completed ? 'bg-indigo-lighten-1' : ''"
      v-for="task in tasksContainer"
      :key="task.id"
    >
      <v-card-action class="content_btns">
        <v-btn
          @click.stop="task.fav = !task.fav"
          :class="task.fav ? 'text-primary' : 'text-grey-darken-2'"
          icon="fas fa-star"
        ></v-btn>
        <v-btn
          v-if="task.completed"
          @click.stop="store.deleteTask(task.id)"
          rounded="0"
          class="mx-3"
          color="red"
          icon="fas fa-trash"
        ></v-btn>
      </v-card-action>

      <template v-slot:prepend>
        <v-list-item-action start>
          <v-checkbox-btn :model-value="task.completed"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title
        :class="
          task.completed
            ? 'text-decoration-line-through'
            : 'text-decoration-none'
        "
        >{{ task.title }}</v-list-item-title
      >

      <v-list-item-subtitle>
        {{ task.date }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
// Get Tasks Store ----------------
import { useTasksStore } from "@/stores/tasksStore";

// Option Variables
const store = useTasksStore();
const props = defineProps(["get"]);

let tasksContainer = computed(() => store.tasks);

if (props.get === "fav") {
  tasksContainer = computed(() => {
    return store.tasks.filter((task) => {
      return task.fav == true;
    });
  });
}

// Get Icons To Put It On { library } to get from it the icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
library.add([faTrash, faStar]);
</script>

<style lang="scss">
.listItem {
  position: relative;
  user-select: none;
  .content_btns {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
  }
}
</style>