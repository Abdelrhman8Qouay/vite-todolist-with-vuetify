import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref([]);
    const tasksWatch = computed(()=> tasks.value);

    const titleTask = ref("");
    const titCom = computed(() => titleTask.value);

    function addTask() {
        if (titCom.value == null || titCom.value == "" || titCom.value == undefined) {
            console.log("Empty Field");
        } else {
            tasks.value.push({
            id: Math.floor(Math.random() * 10000000000),
            title: titleTask.value,
            date: new Date().toLocaleString(),
            completed: false,
            fav: false,
            });
            titleTask.value = "";
        }
    }

    function deleteTask(id) {
        tasks.value = tasks.value.filter(task=> task.id != id)
    }

    return { tasks, tasksWatch, titleTask,  titCom, addTask, deleteTask }
})
