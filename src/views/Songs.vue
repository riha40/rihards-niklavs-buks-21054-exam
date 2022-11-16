<script>
import songs from '../data/songs'
import { player } from '../stores/player'
import IconHeart from '../components/icons/IconHeart.vue'
import IconCaretUp from '../components/icons/IconCaretUp.vue'
export default{
    components: {IconHeart, IconCaretUp},
    data() {
        return{
            player,
            songs: songs,
        }
    },
    methods: {
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
    },
    getTime(milliseconds){
        let seconds = ~~(milliseconds / 1000);
        let minutes = ~~(seconds / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;
        let combined = minutes + ":"+ (seconds < 10 ? '0' : '') + seconds;
        return combined;
    },
    getArtist(artists){
        let name = '';
        let songs_obj = Object.keys(artists);
        artists.forEach((artist, index) => {
            if(index == songs_obj.length){
                name = artist.name;
            } else {
                name = name + artist.name +", ";
            }
        });
        return name;
    },
    sortBy(){

    },
    selectSong(song){
        player.setNowPlaying(song);
    },
    toggle() {
        this.isActive = !this.enable;
    },
    },
    computed: {
        song_list() {
            return this.songs;
        }
    },   
}
</script>
<template>
    <div id="songs-view" @scroll="handleScroll">
    <div class="wrapper-header">
        <h1>SONGS</h1>
        <div class="wrapper-search">
            <input id="input-search" placeholder="Search by title..." />
        </div>
        <div class="wrapper-settings">
            <button id="btn-show-favorites" :class="{active:isActive}" @click="isActive = !isActive">Show Favorites</button>
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
            <tr class="song" v-for="(song, index) in song_list" @dblclick="selectSong(song)">
                <td id="td-index">
                    <IconPlay />
                    <span id="txt-index">{{index + 1}}</span>
                </td>
                <td id="td-title">
                    <img :src="song.album.images[1].url" />
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