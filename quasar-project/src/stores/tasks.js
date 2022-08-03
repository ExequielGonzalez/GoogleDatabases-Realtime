import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: ["1"],
  }),
  getters: {
    getTasks: (state) => state.tasks,
  },
  actions: {
    updateTask(task) {
      //TODO: save task to database
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks[index] = task;
    },
    saveTasks(tasks) {
      //TODO: save task to database
      this.tasks = tasks
    },

    deleteTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks.splice(index, 1);
    }
    
  
  }

  
});
