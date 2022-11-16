import { reactive } from 'vue'

export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        playlist.push(songs);
    },
    setNowPlaying(song) {
        this.now_playing(song); //atg
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing; //atg
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){ //apskatīt vel
        let index = 0;
        for(let i = 0; i <= this.playlist.length; i++){
            for(let j = 0; j <= this.now_playing.length; j ++){
                if (this.playlist.indexOf[i] == this.now_playing.indexOf[j]){
                    return index = this.playlist.indexOf[i + 1];
                } else {
                    return false;
                }
            }
        }
    },
    getPreviousSong() {
        let index = 0;
        for(let i = 0; i <= this.playlist.length; i++){
            for(let j = 0; j <= this.now_playing.length; j ++){
                if (this.playlist.indexOf[i] == this.now_playing.indexOf[j]){
                    index = this.playlist.indexOf[i - 1];
                    return index;
                } else {
                    return false;
                }
            }
        }
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})