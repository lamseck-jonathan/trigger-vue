<template>
    <div class="row h-full w-full m-0 p-0">
        <div class="col-lg-5 col-xs-12 p-4 left-side flex-center--all flex-column">
            <div class="description" v-once>
                <h1 class="mb-4 fs-1 fw-bold text-uppercase" v-text="project.title"></h1>
                <p class="fs-5" v-html="project.description"></p>
                <p class="fs-5" v-html="project.frameworks"></p>
                <base-button
                    class="mt-2 fw-bold"
                    color="#1563C3"
                    backgroundColor="#FCFCFC"
                    backgroundColorActive="#F0F0F0"
                    @click="isRegister = !isRegister"
                >
                    {{isRegister ? 'Se connecter' : 'Creer un compte'}}
                </base-button>
            </div>
        </div>
        <div class="col-lg-7 col-xs-12 right-side flex-center--all">
            <div class="card p-5">
                <auth-form
                    :type="authFormType"
                    @submit="onAuthFormSubmit"
                    v-memo="[authFormType]"
                ></auth-form>
            </div>            
        </div>
    </div>
</template>

<script>
import AuthForm from '../components/forms/AuthForm.vue'
import { mapMutations } from 'vuex'

export default {
    components: {
        AuthForm
    },
    data () {
        return {
            isRegister: false,
            project: {
                title: 'Projet trigger',
                description: `Cette application est le résultat d'un projet de mise en pratique des 
                    <span class="fw-bolder">procédures stockés</span> 
                    avec le <span class="fw-bolder">SGBD MySQL</span> 
                    à l'<span class="fw-bolder">Ecole Nationale d'Informatique de Madagascar</span>.`,
                frameworks: `<span class="text-decoration-underline">Frameworks</span>: 
                    Vue.js, Laravel`
            }
        }
    },

    computed: {
        authFormType () {
            return this.isRegister ? 'register' : 'login'
        }
    },

    methods: {
        ...mapMutations([
            'setUser',
            'setToken'
        ]),

        onAuthFormSubmit (userData) {
            if(this.authFormType == 'login') {
                this.axios.post('login', {
                    name: userData.name,
                    password: userData.password
                }).then(res => {
                    let token = res.data.data
                    this.setToken(token)
                    this.setUser(userData.name)
                    this.$router.push({ name: 'Vendeurs' })
                }).catch(err => alert(err))
                
            } else {
                let isAdmin = userData.isAdmin ? 1 : 0
                console.log({
                        name: userData.name,
                        password: userData.password,
                        isAdmin: isAdmin
                    })
                this.axios.post(
                    'register', 
                    {
                        name: userData.name,
                        password: userData.password,
                        isAdmin: isAdmin
                    }
                ).then(res => {
                    let token = res.data.data
                    this.setToken(token)
                    this.setUser(userData.name)
                    this.$router.push({ name: 'Vendeurs' })
                }).catch(err => alert(err))

            }
        }
    },

    beforeMount() {
        if(this.$store.getters.isAuthenticated) {
            this.$router.push({ name: 'Vendeurs' })
        }
    }
}
</script>

<style scoped>
.flex-center--all {
display: flex;
align-content: center;
align-items: center;
justify-content: center;
}

.description {
    width: 70%;
    color: #FCFCFC;
}

.card {
    width: 30rem;
    height: auto;
    border: none;
    background-color: #fcfcfc;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.left-side {
    background-color: #1563C3;
}

.right-side {
    background-color: #fcfcfc;
}

.h-full {
    height: 100%;
}

.w-full {
    width: 100%;
}
</style>