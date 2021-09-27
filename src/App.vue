<template>
  <v-app>
    <v-main>
      <HeaderTivit/>
      <CarouselTivit/>
      <v-container>
        <h2 class="pt-5">Canais</h2>
        <!-- Charts -->
        <v-row class="pb-8" no-gutters>
          <v-col lg="6" sm="12">
            <v-card class="pa-2" outlined tile >
                <ChartAttendanceTivit/>
            </v-card>
          </v-col>
          <v-col lg="6" sm="12">
            <v-card class="pa-2" outlined tile >
                <ChartAnimalsTivit/>
            </v-card>
          </v-col>
        </v-row>
        <!-- Charts -->
      </v-container>
      <FiltersTivit/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderTivit from './components/header';
import CarouselTivit from './components/carousel';
import ChartAttendanceTivit from './components/chartattendance';
import ChartAnimalsTivit from './components/chartanimals';
import FiltersTivit from './components/filters';

export default {
  name: 'App',

  components: {
    HeaderTivit,
    CarouselTivit,
    ChartAttendanceTivit,
    ChartAnimalsTivit,
    FiltersTivit,
  },

  data: () => ({

  }),
};
</script>
