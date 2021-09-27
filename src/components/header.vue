<template>
  <v-container>
  <!-- Bar -->
  <v-app-bar
    app
    dark 
    class="gradiente-header" 
  >
    <div class="d-flex align-center">
      <v-img
        alt="Tivit Logo"
        class="shrink mr-2"
        contain
        src="../assets/tivit.png"
        transition="scale-transition"
        width="50"
      />
    </div>
  </v-app-bar>
  <!-- Bar -->
  </v-container>
</template>

<script>
  export default {
    name: 'HeaderTivit',

    data: () => ({
    }),
  
}
  
</script>
