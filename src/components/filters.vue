<template>
  <v-container>
    <!-- filtros -->
    <v-row class="pt-8 pb-6" no-gutters>
      <v-col sm="12" lg="6" class="col-12 pr-lg-6">
        <v-autocomplete
          v-model="infopetshop"
          :items="data"
          :item-text='filtrotutorespecie'
          :return-object="true"  
          filled
          label="Filtrar por tutor ou espécie"
          outlined
          no-data-text='Sem dados a apresentar'
          @click.stop
          append-icon="mdi-magnify"
        >
        </v-autocomplete>
      </v-col>
      <v-col sm="12" lg="3" class="col-12 pr-lg-2">
        <v-autocomplete
          v-model="infopetshop"
          :items="data"
          item-text="animal_type"
          :return-object="true"  
          filled
          label="Filtrar por espécie"
          outlined
        ></v-autocomplete>
      </v-col>
      <v-col sm="12" lg="3" class="col-12">
        <v-autocomplete
          v-model="infopetshop"
          :items="data"
          item-text="owner"
          :return-object="true"  
          filled
          label="Filtrar por tutor"
          outlined
        ></v-autocomplete>
      </v-col>
    </v-row>
    <!-- filtros -->

    <!-- Exibição -->
    <v-row class="pb-6" no-gutters>
      <v-col sm="12" lg="12" class="col-12">
        <v-row>
          <v-col sm="4" lg="4" class="col-4 text-center"><p class="mb-0">Espécie</p></v-col>
          <v-col sm="4" lg="4" class="col-4 text-center"><p class="mb-0">Nascimento</p></v-col>
          <v-col sm="4" lg="4" class="col-4 text-center"><p class="mb-0">Tutor</p></v-col>
        </v-row> 
        <v-row class="result-select rounded ml-1 mr-1"> 
          <v-col sm="4" lg="4" class="col-4 text-center"><p class="mb-0">{{ infopetshop.animal_type || "Sem informações"}}</p></v-col>
          <v-col sm="4" lg="4" class="col-4 text-center"><p class="mb-0">{{ infopetshop.birth || 'Sem informações' | moment("DD/MM/YYYY") }}</p></v-col>
          <v-col sm="4" lg="4" class="col-4 text-center"><p class="mb-0">{{ infopetshop.owner || "Sem informações"}}</p></v-col>
        </v-row>  
      </v-col>
    </v-row>
    <!-- Exibição -->
  </v-container>
</template>

<script>
  export default {
    name: 'FilterTivit',

    beforeCreate() {
        fetch(process.env.VUE_APP_API_ENDPOINT+"/animal")
          .then(resp => resp.json())
          .then(resp => {
            this.data = resp;
          })
          .catch(error => {
            this.errorMessage = error;
            console.error("Ops um erro ocorreu", error);
          });
      },

    methods: {
        filtrotutorespecie(data) {
            return `${data.animal_type} - ${data.owner}`;
        },
    },
    data: () => ({
      data: [],
        infopetshop: '',
    }),
  
} 
</script>
