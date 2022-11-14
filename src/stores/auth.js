import { reactive } from 'vue'

export const auth = reactive({
    name : 'rihards',
    surname : 'buks',
    code : 'IT21054',
    favorite_songs : [],

is_authenticated: localStorage.is_authenticated ?? false,

setUserData(name, surname, code) {
    this.name = name;
    this.surname = surname;
    this.code = code;
},

authenticate(email, password) {
    if (email == 'rihardsniklavs.buks@va.lv' && password == '123456' && password >= 6){
        localStorage.is_authenticated ?? true,
        router.push({path: '/'});
    }
},

logout() {
    localStorage.clear();
    localStorage.is_authenticated ?? false,
    router.push({path: '/login'});
},

toggleFavorite(songID) {
    if (this.favorite_songs.includes(songID)){
        return false;
    } else {
        return true;
    }
},

getFavoriteSongs() {
    // for(let i = 0; i <= this.favorite_songs.length; i++){
    // }
}

})