import { reactive } from 'vue'

export const auth = reactive({
    user: {
        name: 'rihards',
        surname: 'buks',
        code: 'IT21054',
        favorite_songs: localStorage.getItem(favorite_songs) ?? [],
    },

is_authenticated: localStorage.is_authenticated ?? false,

setUserData(name, surname, code) {
    this.user.name = name;
    this.user.surname = surname;
    this.user.code = code;
},

authenticate(email, password) {
    if (email == 'rihardsniklavs.buks@va.lv' && password == '123456' && password >= 6){
        localStorage.is_authenticated = true;
        this.is_authenticated = true;
        router.replace({path: '/'});
    }
},

logout() {
    localStorage.clear();
    localStorage.is_authenticated = false;
    router.replace({path: '/login'});
},

toggleFavorite(songID) { //mainīt
    for(i = 0; i<=this.favorite_songs.lenght; i++){
    if (this.user.favorite_songs.includes(songID)){
        this.user.favorite_songs.remove(this.user.favorite_songs[i]);
    } else {
        this.user.favorite_songs.push(this.user.favorite_songs[i]);
    }}
},

getFavoriteSongs() {
    return this.user.favorite_songs;
}

})