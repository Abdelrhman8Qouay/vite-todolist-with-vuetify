<template>
  <v-list lines="three" select-strategy="classic">
    <v-card-title>Todo Lists</v-card-title>

    <v-list-item
      @click="activeItem = !activeItem"
      value="notifications"
      color="indigo"
    >
      <v-badge content="completed" class="float-right"></v-badge>
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title
        :class="
          activeItem ? 'text-decoration-line-through' : 'text-decoration-none'
        "
        >Notify me about updates to apps or games that I
        downloaded</v-list-item-title
      >

      <v-list-item-subtitle>
        {{ date }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref, defineComponent, computed } from "vue";

// Option Variables
const date = ref(new Date().toLocaleString());
const activeItem = ref(false);

let tasks = ref([
  {
    id: 1,
    title: "how are you",
  },
  {
    id: 2,
    title: "how much this item",
  },
]);
</script>

<style lang="scss"></style>