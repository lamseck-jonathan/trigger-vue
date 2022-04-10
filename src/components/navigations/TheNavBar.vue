<template>
    <nav class="navbar navbar-expand-lg navbar-dark p-2 m-0">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="Vendeurs">Vendeurs</router-link>
                    <router-link class="nav-link" to="RecetteVendeurs">Recette</router-link>
                    <router-link class="nav-link" to="RecetteJours">RecetteJour</router-link>
                    <router-link class="nav-link" to="RecetteMois">RecetteMois</router-link>
                </div>
            </div>
            
            <div class="dropdown" style="min-width: 10rem;">
                <div id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    <img 
                        src="../../assets/avatar.png"  
                        alt="user avatar"
                        width="42"
                        class="rounded-circle"/>
                    <span 
                        class="username text-start" 
                        v-text="user.name"
                    ></span>
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                    <li class="dropdown-item" @click="logout">Déconnexion</li>
                </ul>
            </div>
    </nav>
    <div class="navbar navbar-light shadow-sm p-3 m-0"></div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    props: {
        title: {
            type: String,
            default: 'vendeurs'
        }
    },

    computed: {
        ...mapGetters([
            'getToken',
            'getUser'
        ])
    },

    data () {
        return {
            user: {
                name: 'tafita raza'
            }
        }
    },

    methods: {
        ...mapMutations([
            'setToken'
        ]),

        logout () {
            if(confirm('Voulez vous vraiment vous déconnecter?')) {
                this.axios.delete(
                    'logout',
                    {headers: { 'Authorization': 'Bearer ' + this.getToken }}
                ).then( () => {
                    alert('logout successfully')
                    this.setToken('')
                    this.$router.push({ name: 'Auth' })
                }).catch( err => {
                    alert(err)
                })
            }
        }
    },

    mounted () {
        this.user.name = this.getUser
    }
}
</script>

<style scoped>
.active {
    background: rgba(255, 255, 255, 0.1);
}

.nav-link {
    color: #fcfcfc !important;
}

.dropdown {
    cursor: pointer;
}

.username {
    margin-left: 10%;
    font-weight: bolder;
    text-transform: capitalize;
    color: #fcfcfc;
}

.navbar-dark {
    background-color: #1563c3;
}

.navbar-light {
    background-color: #fcfcfc;
    height: 3.3rem;
}

.navbar-brand::first-letter {
    text-transform: uppercase;
}
</style>