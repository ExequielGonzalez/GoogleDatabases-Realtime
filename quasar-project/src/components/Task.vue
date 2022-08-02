<template>
  <q-item class="q-my-sm items-center">
    <q-item-section avatar top>
      <q-checkbox v-model="state" />
    </q-item-section>

    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium">{{ title }}</span>
      </q-item-label>
      <q-item-label caption lines="1">{{ description }} </q-item-label>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn size="12px" flat dense round icon="delete" color="red" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineComponent, ref } from 'vue';

const name = ref('Task');
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
});
</script>
