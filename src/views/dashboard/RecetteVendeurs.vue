<template>
    <div class="d-flex justify-content-between mb-5">

        <base-input 
            placeholder="Rechercher une recette ... "
        />

        <div style="width: 10rem">
            <base-button 
                data-bs-toggle="modal" 
                data-bs-target="#addModal1"
                @click="resetRecetteVendeurForm()"
            >
                Ajouter
            </base-button>
        </div>
    </div>

    <div 
        class="row shadow-sm py-3 px-2 mb-4 rounded" 
        style="background-color: #fcfcfc"
    >
        <div class="col-3 fw-bold">Vendeur</div>
        <div class="col-3 fw-bold">Date</div>
        <div class="col-3 fw-bold">Montant</div>
        <div class="col-2"></div>
        
    </div>

    <div class="tab-item row shadow-sm py-3 px-2 mb-1 rounded" style="background-color: #fcfcfc" 
        v-for="recetteVendeur in recetteVendeurs" :key="recetteVendeur.id"
    >
        <div class="col-3">{{ recetteVendeur.vd_id }}</div>
        <div class="col-3">{{ recetteVendeur.rc_date }}</div>
        <div class="col-3">{{ recetteVendeur.rc_montant }} Ar</div>
        <div class="tab-item-actions col-2 fs-5">
            <base-icon 
                name="bi-pencil-square" 
                color="#555555"
                data-bs-toggle="modal"
                data-bs-target="#editModal1" 
                @click="fillEditRecetteVendeurModal(recetteVendeur)" 
            />
            <base-icon 
                name="bi-trash" 
                color="#555555" 
                @click="deleteVendeur(recetteVendeur)"
            />
        </div>  
    </div>

    <v-modal 
        id="addModal1"
        title="Ajouter une recette vendeur"
        acceptButtonText="Ajouter"
        @accept="addRecetteVendeur"
    >
        <base-input
            class="mb-3"
            label="identifiant du vendeur"
            placeholder="1 ou 2 ou 3"
            v-model="recetteVendeurData.vd_id"
        />
        <base-input
            class="mb-3"
            label="montant de la recette"
            placeholder="245000"
            v-model="recetteVendeurData.rc_montant"
        />
        <base-input
            class="mb-3"
            label="date de la recette"
            placeholder="2022-02-01"
            v-model="recetteVendeurData.rc_date"
        />
    </v-modal>

    <v-modal 
        id="editModal1"
        title="Modifier une recette vendeur"
        acceptButtonText="Modifier"
        @accept="editRecetteVendeur"
    >
        <base-input
            class="mb-3"
            label="identifiant du vendeur"
            placeholder="1 ou 2 ou 3"
            v-model="recetteVendeurData.vd_id"
            readonly
        />
        <base-input
            label="montant de la recette"
            placeholder="250 000"
            v-model="recetteVendeurData.rc_montant"
        />
        <base-input
            label="date de la recette"
            placeholder="2022-01-01"
            v-model="recetteVendeurData.rc_date"
        />
    </v-modal>


</template>

<script>
import { mapGetters } from 'vuex'
import VModal from '../../components/VModal.vue'

export default {
    name : "RecetteVendeurs",
    components : {VModal},
    data() {
        return {
            recetteVendeurs : [],
            recetteVendeurData : {
                vd_id : "",
                rc_montant : "",
                rc_date : "",
            }
        }
    },
    computed : {
        ...mapGetters([
            'getToken'
        ])
    },
    methods : {
        getRecetteVendeurs() {
            this.axios.get("recette/vendeurs",{ headers: { 'Authorization': 'Bearer ' + this.getToken } }).then((res) => {
                this.recetteVendeurs = res.data;
                console.log(res.data)
            }).catch((err) => alert(err))
        },
        addRecetteVendeur() {
            this.axios.post(
                "recette/vendeurs",
                {
                    vd_id : this.recetteVendeurData.vd_id,
                    rc_montant : this.recetteVendeurData.rc_montant,
                    rc_date : this.recetteVendeurData.rc_date,
                },
                { headers: { 'Authorization': 'Bearer ' + this.getToken }}
            ).then((res) => {
                this.recetteVendeurs.push(res.data)
                this.resetRecetteVendeurForm()
            }).catch((error) => alert(error))
        },
        fillEditRecetteVendeurModal(recette) {
            this.recetteVendeurData.id = recette.id.toString()
            this.recetteVendeurData.vd_id = recette.vd_id.toString()
            this.recetteVendeurData.rc_montant = recette.rc_montant.toString()
            this.recetteVendeurData.rc_date = recette.rc_date.toString()
        },
        editRecetteVendeur(){
            let modif = {
                rc_montant : this.recetteVendeurData.rc_montant,
                rc_date : this.recetteVendeurData.rc_date,
            }
            this.axios.put(
                "recette/vendeurs/" + this.recetteVendeurData.id,
                modif,
                { headers: { 'Authorization': 'Bearer ' + this.getToken }}).then(() => {     
                    this.getRecetteVendeurs()
                    this.resetRecetteVendeurForm()
                }).catch((error) => alert(error))
        },
        deleteRecetteVendeur(){
            this.axios.delete(
                "recette/vendeurs/" + this.recetteVendeursData.id,
                 { headers: { 'Authorization': 'Bearer ' + this.getToken }}).then(() => { 
                    this.getRecetteVendeurs()
                }).catch((error) => alert(error))
        },
        resetRecetteVendeurForm () {
            this.recetteVendeurData.vd_id = null
            this.recetteVendeurData.rc_montant = ''
            this.recetteVendeurData.rc_date = ''
        }
    },
    mounted () {
        this.getRecetteVendeurs()
    }
}
</script>

<style>

</style>