<template>
<v-layout>
<v-flex xs4>
    <panel title ="Song Metadata">
        <v-text-field
          label="Title"
          requried
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          requried
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          requried
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          requried
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image URL"
          requried
          :rules="[required]"
          v-model="song.albumImageURL"
        ></v-text-field>

        <v-text-field
          label="Youtube ID"
          requried
          :rules="[required]"
          v-model="song.youtubeID"
        ></v-text-field>

    </panel>
</v-flex>   

<v-flex xs8>
    <panel title = "Song Structure" class="ml-4">
        <v-text-field
          multi-line
          label="Lyrics"
          requried
          :rules="[required]"
          v-model="song.lyrics"
        ></v-text-field>

        <v-text-field
          multi-line
          label="Tab"
          requried
          :rules="[required]"
          v-model="song.tab"
        ></v-text-field>
    </panel>   

    <div class="danger-alert" v-if="error">
        {{error}}
    </div>

    <v-btn
        dark
        class="cyan"
        @click="save">
    Save Song
    </v-btn>    



</v-flex>

</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageURL: null,
                youtubeID: null,
                lyrics: null,
                tab: null
            },
            required: (value) => !!value || 'Required.',
            error: null
        }
    },
    methods: {
        async save () {
            this.error = null
            const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
            if  (!areAllFieldsFilledIn) {
               this.error = 'Please fill in all the fields'
               return
           }

           try {
            const songId = this.$store.state.route.params.songId
            await SongsService.put(this.song)
            this.$router.push({
                    name: 'song',
                    params: {
                        songId: songId
                    }
            })} catch (err) {console.log(err)}
            
        }
    },   
    async mounted () {
            try { 
                const songId = this.$store.state.route.params.songId
                this.song = (await SongsService.show(songId)).data
            } catch (err) {
                console.log(err)
            }
        }
}

</script>

<style scoped>
.danger-alert {
  color: red;
}
</style>
