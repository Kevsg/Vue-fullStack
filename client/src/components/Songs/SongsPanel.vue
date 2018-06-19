<template>
<div>

    
      <panel title="Songs">
          <v-btn 
          slot="action" 
          class="cyan accent-2" 
          light medium absolute right middle fab  
          :to="{name: 'songs-create'}"> 
              <v-icon>add</v-icon>
          </v-btn>

        <div class="song" v-for="song in songs" :key="song.id">

          <v-layout>
            <v-flex xs6>
              <div class="song-title"> {{song.title}} </div>
              <div class="song-artist"> {{song.artist}} </div>
              <div class="song-genre"> {{song.genre}} </div>

                  <v-btn
                    dark
                    class="cyan"
                    :to="({
                      name: 'song',
                      params: {
                        songId: song.id
                      }
                    })">
                  View
                  </v-btn>    
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageURL"/>
            </v-flex>
          </v-layout>

        </div>
      </panel>


</div>  
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
    data () {
      return {
          songs: null
        }   
    },
    watch: {
      '$route.query.search': {
        immediate: true,
        async handler (value) {
          this.songs = (await SongsService.index(value)).data
        }
      }
    }
}

</script>

<style scoped>
.album-image {
  width: 70%;
  margin: 0 auto;
}

</style>
