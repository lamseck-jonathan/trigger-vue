<template>
    <div class="d-flex justify-content">

    </div>

    <div 
        class="row shadow-sm py-3 px-2 mb-4 rounded" 
        style="background-color: #fcfcfc"
    >

    <div class="col-4 fw-bold">Montant</div>
        <div class="col-4 fw-bold">Mois</div>
        <div class="col-4 fw-bold">Année</div>
        
    </div>
    <div class="tab-item row shadow-sm py-3 px-2 mb-1 rounded" style="background-color: #fcfcfc" 
    v-for="recetteM in recetteMois" :key="recetteM.id">
        <div class="col-4">{{ recetteM.rc_montant }}</div>
        <div class="col-4">{{ recetteM.rc_month }}</div>
        <div class="col-4">{{ recetteM.rc_year }}</div>
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name : "RecetteMois",
    data() {
        return {
            recetteMois : []
        }
    },
    computed : {
        ...mapGetters([
            'getToken'
        ])
    },
    methods : {
        getRecetteMois() {
            this.axios.get("recette/mois",{ headers: { 'Authorization': 'Bearer ' + this.getToken } }).then((res) => {
                this.recetteMois = res.data;
            }).catch((err) => alert(err))
        },
    },
    mounted () {
        this.getRecetteMois()
    }
}
</script>

<style>

</style>