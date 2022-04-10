<template>
    <div class="d-flex justify-content">

    </div>

    <div 
        class="row shadow-sm py-3 px-2 mb-4 rounded" 
        style="background-color: #fcfcfc"
    >
        <div class="col-6 fw-bold">Date</div>
        <div class="col-6 fw-bold">Montant</div>
    </div>
    <div class="tab-item row shadow-sm py-3 px-2 mb-1 rounded" style="background-color: #fcfcfc" 
    v-for="recetteJour in recetteJours" :key="recetteJour.id">
        <div class="col-6">{{ recetteJour.rc_date }}</div>
        <div class="col-6">{{ recetteJour.rc_montant }} Ar</div>
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name : "RecetteJours",
    data() {
        return {
            recetteJours : []
        }
    },
    computed : {
        ...mapGetters([
            'getToken'
        ])
    },
    methods : {
        getRecetteJours() {
            this.axios.get("recette/jours",{ headers: { 'Authorization': 'Bearer ' + this.getToken } }).then((res) => {
                this.recetteJours = res.data;
            }).catch((err) => alert(err))
        },
    },
    mounted () {
        this.getRecetteJours()
    }
}
</script>

<style>

</style>