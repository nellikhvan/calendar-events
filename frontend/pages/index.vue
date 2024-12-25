<template>
    <div>
      <h1>Google Calendar Events</h1>
      <ul>
        <li v-for="event in events" :key="event.id">
          <strong>{{ event.summary }}</strong> - {{ event.start.dateTime || event.start.date }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const events = ref([])
  
  onMounted(async () => {
    try {
      const response = await $fetch('/calendar')
      events.value = response
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  })
  </script>
  