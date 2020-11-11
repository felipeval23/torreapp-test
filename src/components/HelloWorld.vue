<template>
  <div class="hello">
    <v-btn  @click="mostrar()">mostrar</v-btn><br><br>
   
  </div>
</template>

<script>

export default {
  data: () => ({
    url_base: "https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/felipeval23",
  }),
  methods: {
  

      mostrar(){
           fetch(this.url_base, {
            
            headers: {
                'method':'POST',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
            },
          })
        .then(
            resolve => {
               return resolve.json();
             }
        ).then(data => {

            
            console.log(data);
            console.log(data.education[1].name);
            console.log(data.languages[0].language);
           
           
        })
      }
    }

  }


  
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
