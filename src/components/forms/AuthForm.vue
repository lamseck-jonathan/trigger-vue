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
        <base-input
            type="password"
            label="mot de passe"
            placeholder="ex: JxwyLhiNW234!#"
            class="mt-4"
            v-model="user.password"
        />
        <base-input
            v-show="type === 'register'"
            type="password"
            label= "mot de passe (vérification)"
            placeholder="Entrez le même mot de passe"
            class="mt-4"
            v-model="user.confirmedPassword"
        />
        <base-switch
            v-show="type === 'register'"
            label="Administrateur"
            class="mt-4"
            v-model="user.isAdmin"
        />
        <base-button
            class="mt-5 mb-4"
            @click="$emit('submit', user)"
        >
            {{type === 'register' ? 'Créer un compte' : 'Se connecter'}}
        </base-button>
    </form>
</template>

<script>
import BaseInput from '../base/BaseInput.vue'
import BaseSwitch from '../base/BaseSwitch.vue'
import BaseButton from '../base/BaseButton.vue'

export default {
    components: {
        BaseInput,
        BaseSwitch,
        BaseButton,
    },

    emits: ['submit'],

    props: {
        type: {
            type: String,
            required: true
        },

    },

    data () {
        return {
            user: {
                name: '',
                password: '',
                confirmedPassword: '',
                isAdmin: false
            }
        }
    }
}
</script>

<style scoped>
.text-color--blue {
    color: #1563C3;
}
</style>