<template>
<div>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <songs-search-panel/>
      <songs-panel/>
    </v-flex>
  </v-layout> 
</div>  
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import SongsSearchPanel from './SongsSearchPanel'

export default {
    components: {
        SongsPanel,
        SongsSearchPanel
    },
    data () {
      return {
          songs: null
        }   
    },
    async mounted () {
      this.songs = (await SongsService.index()).data
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
}

</script>

<style scoped>


</style>
