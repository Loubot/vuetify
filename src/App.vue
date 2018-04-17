<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer temporary v-model="drawer" absolute>
                <v-list class="pa-1">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
            </v-navigation-drawer>
        </v-layout>
        <v-container>
            <v-layout justify-center>
                <v-btn color="success" @click.stop="drawer = !drawer">{{ drawer }}</v-btn> 
            </v-layout> 
            
        </v-container>
        <div id="app">
            <router-view></router-view>
        </div>
    </v-app>
    
</template>

<script>
  export default {
    data () {
      return {
        drawer: false
      }
    },
    name: 'App'
  }
</script>
