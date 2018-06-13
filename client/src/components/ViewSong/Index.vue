<template>
<div>
<v-layout>
    <v-flex xs6>
        <song-metadata :song="song"/>
    </v-flex>

    <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeID"/>
    </v-flex>


</v-layout>   

<v-layout class="mt-2">
    <v-flex xs6>
        <tab :song="song"></tab>
    </v-flex>

    <v-flex xs6 class="ml-2">
        <lyrics :song="song"/>
    </v-flex>

</v-layout>

</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Tab from './Tab'
import Panel from '@/components/Panels'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'

export default {
    data () {
        return {
            song: {}
        }
    },
    async mounted () {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
    },
    components: {
        Panel,
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
    }
}
</script>

<style scoped>

</style>
