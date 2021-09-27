<template>
  <highcharts  class="hc" :options="chartOptions" ref="chart" ></highcharts>      
</template>

<script>
  export default {
    name: 'ChartAttendanceTivit',
  
    beforeCreate() {
        fetch(process.env.VUE_APP_API_ENDPOINT+"/animal")
          .then(resp => resp.json())
          .then(resp => {
          
            resp.map( el=>{
                // Deletando itens
                delete el["id","birth","owner"]

                // Mudando o nome dos itens
                el.name = el.animal_type
                delete el.animal_type
            })
            
              // Removendo itens duplicados e contando
                var temp = [];
                var animais = [];
                for(var i=0;i<resp.length;i++){
                  if(temp.indexOf(resp[i].name) == -1){
                      temp.push(resp[i].name);
                      var _data = {};
                      _data.name = resp[i].name;
                      _data.y = 1;
                      
                      animais.push(_data);
                  }else{
                    for(var j=0;j<animais.length;j++){
                        if(animais[j].name === resp[i].name){
                            var _x = parseInt(animais[j].y) + 1;
                            animais[j].y = _x;
                        }
                    }
                  }
                }

            this.chartOptions.series[0].data = animais;
            // console.log("animais : " + JSON.stringify(animais))
          })

          .catch(error => {
            this.errorMessage = error;
            console.error("Ops um erro ocorreu", error);
          });
      },

    data() { 
      return {
        chartOptions: {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',              
          },
          plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
          },
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            symbolHeight: 10,
            symbolWidth: 20,
            symbolRadius: 0,
          },
          
          colors:[ '#000000','#c0c0c0','#0d9bfa', '#4ec0bf', '#fe6584', '#fbe594',],
          yAxis: {
            title: false
          },
          title: {
            text: 'Tipos de Animais mais atendidos'
          },  
          tooltip: {
            pointFormat: '{point.percentage:.1f}%',
        },
          series: [{
            innerSize: '70%',
            data: []
          }]
        }
      }
    },    
}

</script>
