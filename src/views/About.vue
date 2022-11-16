<script>
import { auth } from '/auth.js'
import songs from '../data/songs'
export default {
    data() {
        return {
            auth,
            hidden: false,
            visible: true,
            Name: auth.user.name,
            Surname: auth.user.surname,
            Code: auth.user.code
        }
    },
}
</script>
<template>
    <div id="about-view">
    <div class="wrapper-header">
        <h1>ABOUT ME</h1>
        <div class="settings">
            <div v-if="visible"><button id="btn-show-favorites">Edit Form</button></div>
            <div v-if="hidden"><button id="btn-save">Save Form</button></div>
        </div>
    </div>
    <form>
        <div class="wrapper-input">
            <label>NAME</label>
            <div><input v-model="Name" id="input-name" /></div>
        </div>
        <div class="wrapper-input">
            <label>SURNAME</label>
            <div><input v-model="Surname" id="input-surname" /></div>
        </div>
        <div class="wrapper-input">
            <label>STUDENT CODE</label>
            <div><input v-model="Code" id="input-code" /></div>
        </div>
        <div class="wrapper-songs">
            <label>FAVORITE SONGS</label>
            <ul>
                <li>
                    <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                    <div class="song-info">
                        <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                        <p id="txt-artist" class="song-artists">Example</p>
                    </div>
                </li>
            </ul>
            <div id="txt-empty" class="empty">NO SONGS FOUND</div>
        </div>
    </form>
</div>
</template>