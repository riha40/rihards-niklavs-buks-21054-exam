<script>
import songs from '../data/songs'
import { player } from '../stores/player'
import IconHeart from '../components/icons/IconHeart.vue'
import IconCaretUp from '../components/icons/IconCaretUp.vue'
export default{
    components: {IconHeart, IconCaretUp},
    data() {
        return{
            search: '',
            show_favorites: false,
            songs: songs,
            active: true,
        }
    },
    methods: {
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
    },
    computed: {
    filtered_songs() {
        return this.songs;
    }
    },
    getTime(duration){
        let mins = ~~((duration % 3600) / 60);
        let secs = ~~duration % 60;
        let combined = mins + ":"+ (secs < 10 ? '0' : '') + secs;
        return combined;
    },
    getArtist(artist){
        let empty_artist= '';
        artist.forEach(art, index => {
            if (index != Object.keys(songs).length - 1){
                empty_artist = empty_artist + art.name + ", ";
            }
            return empty_artist;
        });
    },
    sortBy(){

    },
    selectSong(song){
        player.setNowPlaying(song);
    }
}
}
</script>
<template>
    <div id="songs-view" @scroll="handleScroll">
    <div class="wrapper-header">
        <h1>SONGS</h1>
        <div class="wrapper-search">
            <input v-model="search" id="input-search" placeholder="Search by title..." />
        </div>
        <div class="wrapper-settings">
            <button id="btn-show-favorites" @click="show_favorites ? show_favorites = true : show_favorites = false" v-bind:class="{active: show_favorites}">Show Favorites</button>
        </div>
    </div>
    <div class="wrapper-songs">
        <table cellspacing="0" cellpadding="0">
            <tr ref="header">
                <th id="th-id" >#</th>
                <th id="th-title">
                    Title
                    <IconCaretUp />
                </th>
                <th id="th-artist">Artist</th>
                <th id="th-album">Album</th>
                <th id="th-duration">
                    Duration
                    <IconCaretUp />
                </th>
            </tr>
            <!-- Loop goes on this <tr> element -->
            <tr class="song" v-for="(song, index) in filtered_songs" @dblclick="selectSong(song)">
                <td id="td-index">
                    <IconPlay />
                    <span id="txt-index">{{index + 1}}</span>
                </td>
                <td id="td-title">
                    <img: src="song.album.images[index].url" />
                    {{song.name}}
                </td>
                <td id="td-artist">{{getArtist(song.artists)}}</td>
                <td id="td-album">{{song.album.name}}</td>
                <td id="td-duration">
                    {{getTime(song.duration_ms)}}
                    <IconHeart />
                </td>
            </tr>
        </table>
    </div>
</div>
</template>