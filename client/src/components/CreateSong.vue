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
        @click="create">
    Create Song
    </v-btn>    



</v-flex>

</v-layout>
</template>

<script>
import Panel from '@/components/Panels'
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
    components: {
        Panel
    },
    methods: {
        async create () {
            this.error = null
            const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
            if  (!areAllFieldsFilledIn) {
               this.error = 'Please fill in all the fields'
               return
           }
            try {
                await SongsService.post(this.song)
                this.$router.push({
                    name: 'songs'
                })
            } catch (err) {
                console.log(err)
            }       
        }
    }

}

</script>

<style scoped>
.danger-alert {
  color: red;
}
</style>
