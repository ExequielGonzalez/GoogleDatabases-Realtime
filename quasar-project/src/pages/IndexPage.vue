<template>
  <q-page class="flex q-my-md">
    <div class="full-width">
      <q-list separator bordered class="q-mx-lg">
        <div v-for="task in tasks" :key="task.id" @click="editTask(task.id)">
          <Task :key="task.id" :title="task.title" :description="task.description" :state="task.state" class="q-py-xs cursor-pointer" />
        </div>
      </q-list>
    </div>
  <editTaskPopupView ref="editTaskPopup" key="editTaskPopup" @save-task="saveTask" />
  </q-page>

  
</template>

<script setup>
import { ref } from 'vue';
import Task from 'src/components/Task.vue';
import EditTaskPopupView from 'src/components/EditPopup.vue';

const name = ref('IndexPage');
const editTaskPopup = ref(null);

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is a task',
    state: true,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is a task',
    state: false,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is a task',
    state: true,
  },
];

const editTask = (id) => {
  console.log(id);
  editTaskPopup.value.show(id);
};

const saveTask = (id, title, description, state) => {
  console.log(id, title, description, state);
};
</script>
