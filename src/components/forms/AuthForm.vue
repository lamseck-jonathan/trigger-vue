<template>
    <h1 class="text-center text-color--blue mb-4">
        {{type === 'register' ? 'Inscription' : 'Connexion'}}
    </h1>
    <form action="submit">
        <base-input
            label="nom"
            placeholder="ex: John Doe"
            v-model="user.name"
            required
        />
        <span class="error-msg" v-if="v$.user.name.$error">
            {{ v$.user.name.$errors[0].$message }}
        </span>

        <base-input
            type="password"
            label="mot de passe"
            placeholder="ex: JxwyLhiNW234!#"
            class="mt-4"
            v-model="user.password"
        />
        <span class="error-msg" v-if="v$.user.password.$error">
            {{ v$.user.password.$errors[0].$message }}
        </span>

        <base-input
            v-show="type === 'register'"
            type="password"
            label= "mot de passe (vérification)"
            placeholder="Entrez le même mot de passe"
            class="mt-4"
            v-model="user.confirmedPassword"
        />
        <span class="error-msg" v-if="type === 'register' && v$.user.confirmedPassword.$error">
            {{ v$.user.confirmedPassword.$errors[0].$message }}
        </span>

        <base-switch
            v-show="type === 'register'"
            label="Administrateur"
            class="mt-4"
            v-model="user.isAdmin"
        />

        <base-button
            class="mt-5 mb-4"
            @click="onSubmit"
        >
            {{type === 'register' ? 'Créer un compte' : 'Se connecter'}}
        </base-button>
    </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'

export default {
    emits: ['submit'],

    props: {
        type: {
            type: String,
            required: true
        },

    },

    data () {
        return {
            v$: useVuelidate(),
            user: {
                name: '',
                password: '',
                confirmedPassword: '',
                isAdmin: false
            }
        }
    },

    methods: {
        onSubmit () {
            this.v$.$validate()
            if(!this.v$.$error) {
                this.$emit('submit', this.user)
            }
        }
    },

    validations () {
        if(this.type === 'register') {
            return {
                user: {
                    name: { required },
                    password: { required, minLength: minLength(6) },
                    confirmedPassword: { required, sameAs: sameAs(this.user.password) },
                }
            }
        } else {
            return {
                user: {
                    name: { required },
                    password: { required },
                }
            }
        }
    }
}
</script>

<style scoped>
.text-color--blue {
    color: #1563C3;
}

.error-msg {
    color: #db2727;
    font-size: 0.8rem;
}
</style>