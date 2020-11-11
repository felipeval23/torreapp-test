<template>
    <v-card>
        <v-system-bar></v-system-bar>

                <v-row class="px-6 py-3" align="center">
                  <span class="mr-4">To</span>
                  <v-menu
                    v-model="menu"
                    bottom
                    right
                    transition="scale-transition"
                    origin="top left"
                  >
                    <template v-slot:activator="{ on }">
                      <v-chip pill v-on="on">
                        <v-avatar left>
                          <v-img
                            src="https://starrgate.s3.amazonaws.com:443/CACHE/images/users/12337548ee85eeb37ad312a9645b881a8aa24325/profile_1ea6Eh7/037625ed1c24f4a6ff53e23928f4b8fa.jpg"
                          ></v-img>
                        </v-avatar>
                        Alexander Torrenegra
                      </v-chip>
                    </template>
                    <v-card width="300">
                      <v-list dark>
                        <v-list-item>
                          <v-list-item-avatar>
                            <v-img
                              src="https://starrgate.s3.amazonaws.com:443/CACHE/images/users/12337548ee85eeb37ad312a9645b881a8aa24325/profile_1ea6Eh7/037625ed1c24f4a6ff53e23928f4b8fa.jpg"
                            ></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              >Alexander Torrenegra</v-list-item-title
                            >
                            <v-list-item-subtitle
                              >torrenegra@torre.com</v-list-item-subtitle
                            >
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-btn icon @click="menu = false">
                              <v-icon>mdi-close-circle</v-icon>
                            </v-btn>
                          </v-list-item-action>
                        </v-list-item>
                      </v-list>
                      <v-list>
                        <v-list-item @click="() => {}">
                          <v-list-item-action>
                            <v-icon>mdi-briefcase </v-icon>
                          </v-list-item-action>
                          <v-list-item-subtitle
                            >torrenegra@torre.com </v-list-item-subtitle
                          >
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                </v-row>

                <v-divider></v-divider>

                <v-text-field
                  full-width
                  value="Re: Contract terms"
                  label="Subject"
                  single-line
                ></v-text-field>

                <v-textarea full-width single-line label="Message"></v-textarea>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    ><v-icon color="#ff9999" fill left>mdi-close-circle</v-icon
                    >Cancelar</v-btn
                  >
                  <v-btn
                    ><v-icon color="#99cc99" fill left>mdi-check-circle</v-icon
                    >Enviar</v-btn
                  >
                </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data: () => ({
    search: "",
    jobs: false,
    show: null,
    menu: false
  })
}