<template>
  <highcharts  class="hc" :options="chartOptions" ref="chart" ></highcharts>      
</template>

<script>
import moment from 'moment'
  export default {
    name: 'ChartAttendanceTivit',

    beforeCreate() {
        fetch(process.env.VUE_APP_API_ENDPOINT+"/appointment")
          .then(resp => resp.json())
          .then(resp => {
            //

            resp.map( el=>{
                // Deletando itens
                delete el["id","animal_id","details" ]

                // Mudando o nome dos itens
                el.name = el.type
                delete el.type
                el.date = el.created_at
                delete el.created_at
          
                //formatando dia
                el.date = moment(el.date).format('dddd')

            })
            
              // Removendo itens duplicados e contando
                var temp = [];
                var attendance = [];
                for(var i=0;i<resp.length;i++){
                  if(temp.indexOf(resp[i].name) == -1){
                      temp.push(resp[i].name);
                      var _data = {};
                      _data.name = resp[i].name;
                      _data.y = 1;
                      
                      attendance.push(_data);
                  }else{
                    for(var j=0;j<attendance.length;j++){
                        if(attendance[j].name === resp[i].name){
                            var _x = parseInt(attendance[j].y) + 1;
                            attendance[j].y = _x;
                        }
                    }
                  }
                }
                console.log(attendance)
            //
            this.chartOptions.series[0].data = attendance;
            // console.log("atendimento : " + JSON.stringify(resp))
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
            type: 'column'
          },
          plotOptions: {
              // column: {
              //     stacking: 'normal',
              //     dataLabels: {
              //         enabled: true
              //     }
              // }
          column: {
              stacking: 'normal'
          }

          },
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            symbolHeight: 10,
            symbolWidth: 20,
            symbolRadius: 0
          },
          yAxis: {
            title: false
          },
          title: {
            text: 'Tipos de atendimento'
          },
          xAxis: {
            categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],

          },
          colors:['#0d9bfa', '#fe6584', '#4ec0bf', '#c0c0c0', '#fbe594', '#000000'],
          series: [{
            data: []
          }]
          // series: [{
          //     name: 'Emergência',
          //     color: '#fe6584',
          //     data: [5, 3, 4, 7, 2, 7, 2]
          // }, {
          //     name: 'Retorno',
          //     color: '#4ec0bf',
          //     data: [2, 2, 3, 2, 1, 2, 1]
          // }, {
          //     name: 'Vacinação',
          //     color: '#fbe594',
          //     data: [3, 4, 4, 2, 5,  2, 5]
          // }, {
          //     name: 'Consulta',
          //     color: '#0d9bfa',
          //     data: [3, 4, 4, 2, 5,  2, 5]
          // }]
        }
      }
    } 
}
</script>
