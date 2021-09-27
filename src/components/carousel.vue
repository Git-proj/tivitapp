<template>
  <v-container>
  <!-- Carousel -->
  <v-carousel  :show-arrows-on-hover="true" :hide-delimiters="true" v-model="carousel">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    >
    <v-row>
      <div class="carousel-item text-h2 mt-5 pt-5 text-white d-block">
        {{ item.title }}
      </div>
   
      <div class="carousel-item text-h3 d-block">
        {{ item.subtitle }}
      </div>
   
       <div class="carousel-item text-p text-white d-block">
        {{ item.text }}
      </div>
    </v-row>
    </v-carousel-item>
  </v-carousel>
  <!-- Carousel -->

  </v-container>
</template>

<script>
  export default {
    name: 'CarouselTivit',

    data: () => ({
      
        carousel: 0,
        items: [
          {
            title: 'Mês do' + '\n' + 'Cachorro louco',
            subtitle: 'Ajude na Prevenção',
            text: 'Ofereça sempre as vacinações para os tutores dos Pets',
            colors: '#000',
          },
          {
            title: 'Mês do' + '\n' + 'Cachorro louco',
            subtitle: 'Ajude na Prevenção',
            text: 'Ofereça sempre as vacinações para os tutores dos Pets',
            colors: '#000',
          },
        ],

    }),
  
}
  
</script>
