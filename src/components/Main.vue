<template>
  <v-app id="inspire">
    <v-app-bar app color="blue darken-2" dark flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="gray lighten-2" size="32">
          <img :src="profile.person.pictureThumbnail" alt="Diego" />
        </v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260" color="black">
          <v-text-field
            dense
            flat
            light
            color="gray"
            hide-details
            rounded
            solo-inverted
            v-model="search"
            @keyup.enter="buscar(search)"
            @keydown="search = search.toUpperCase()"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-btn @click="mostrar()">MOSTRAR</v-btn>

    <v-main class="grey lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ profile.person.name }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title @click="show = 1">
                      LANGUAGES
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title @click="show = 2">
                      EXPERIENCES
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title @click="show = 3">
                      EDUCATION
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title @click="show = 4">
                      MESSAGES
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-card v-if="show == 1">
                <v-card flat shaped elevation="0">
                  <h1>Spoken languages</h1>
                  <br />
                  <h3>{{ profile.languages[0].language }}</h3>
                  <h3>{{ profile.languages[0].fluency }}</h3>
                  <v-chip class="ma-2" color="pink" label text-color="white">
                    <v-icon left> mdi-label </v-icon>
                    {{ profile.languages[0].fluency }}
                  </v-chip>
                  <p></p>
                </v-card>
              </v-card>
              <v-card v-if="show == 2"> <Experiences /> </v-card>
              <v-card v-if="show == 3"> hoja 3 </v-card>

              <v-card v-if="show == 4">
                <Messages />
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-dialog v-model="jobs" persistent max-width="800">
      <v-card>
        <v-card-title class="primary white--text">Nueva oferta </v-card-title>

        <v-row class="ma-10">
          <v-col cols="12" sm="8" md="4">
            <v-img :src="job.imagen" aspect-ratio="1.7" contain></v-img>
          </v-col>

          <v-col cols="12" sm="4" md="8">
            <h1>{{ job.nombre }}</h1>
            <br />

            <v-chip class="ma-2" color="primary">
              {{ job.id }}
            </v-chip>
          </v-col>
          <v-col cols="12" sm="4" md="4"> </v-col>
          <v-col cols="12" sm="4" md="8" left>
            <h2>Experiencia requerida</h2>
            <br />
            <h3>{{ job.experiencia }}</h3>
            <br />
          </v-col>
        </v-row>

        <v-spacer></v-spacer>
        <v-chip
          close
          close-icon="mdi-close-outline"
          color="blue"
          label
          dark
          @click="jobs = false"
          >CLOSE</v-chip
        >
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Experiences from './Experiences.vue';
import Messages from "./Message";
export default {
  components: {
   
    Messages,
    Experiences,
  },
  data: () => ({
    search: "",

    jobs: false,
    show: null,
    menu: false,
    id: "",
    links: ["Dashboard", "Profile", "Search"],
    url_base:
      "https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/felipeval23",
    profile: [],
    job: {
      imagen: "",
      nombre: "",
      id: "",
      detalles: "",
      experiencia: "",
    },
  }),

  created() {
    this.mostrar();
  },

  methods: {
    mostrar() {
      fetch(this.url_base, {
        headers: {
          method: "GET",
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((resolve) => {
          return resolve.json();
        })
        .then((data) => {
          this.profile = data;

        });
    },

    buscar(index) {
      console.log(index);
      this.search = "";
      this.jobs = true;

      console.log(index);
      if (index === "REACT") {
        this.id = "https://torre.co/api/opportunities/Vrojvpdy";
      } else if (index == "ANGULAR") {
        this.id = "https://torre.co/api/opportunities/DWVkGqwj";
      }

      fetch(this.id, {
        headers: {
          method: "GET",
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((resolve) => {
          return resolve.json();
        })
        .then((data) => {
          this.job = data;

          console.log(this.job);
          this.job.imagen = data.organizations[0].picture;
          this.job.nombre = data.organizations[0].name;
          this.job.id = data.organizations[0].id;
          this.job.detalles = data.details[1].content;
          this.job.experiencia = data.details[3].content;
          
        });
    },
  },
};
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

span {
  text-align: left;
  size: 20px;
}
</style>

