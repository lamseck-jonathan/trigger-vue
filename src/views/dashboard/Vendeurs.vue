<template>
    <div class="d-flex justify-content-between mb-5">
        <base-input 
            placeholder="Rechercher un vendeur ... "
            v-model="searchValue"
        />
        <div style="width: 10rem">
            <base-button 
                data-bs-toggle="modal" 
                data-bs-target="#addModal"
                @click="resetVendeurForm()"
            >
                Ajouter
            </base-button>
        </div>
    </div>

    <div 
        class="row shadow-sm py-3 px-2 mb-4 rounded" 
        style="background-color: #fcfcfc"
    >
        <div class="col-5 fw-bold">Nom</div>
        <div class="col-5 fw-bold">Salaire</div>
        <div class="col-2"></div>
    </div>

    <div 
        class="tab-item row shadow-sm py-3 px-2 mb-1 rounded" 
        style="background-color: #fcfcfc" 
        v-for="vendeur in filteredVendeurs" 
        :key="vendeur.id"
    >
        <div class="col-5">{{ vendeur.vd_name }}</div>
        <div class="col-5">{{ vendeur.salaire }} Ar</div>
        <div class="tab-item-actions col-2 fs-5">
            <base-icon 
                name="bi-pencil-square" 
                color="#555555"
                data-bs-toggle="modal"
                data-bs-target="#editModal"  
                @click="fillEditVendeurModal(vendeur)"
            />
            <base-icon 
                name="bi-trash" 
                color="#555555" 
                @click="deleteVendeur(vendeur)"
            />
        </div>
    </div>

    <v-modal 
        id="addModal"
        title="Ajouter un vendeur"
        acceptButtonText="Ajouter"
        @accept="addVendeur"
    >
        <base-input
            class="mb-3"
            label="nom du vendeur"
            placeholder="Ex: Jane Doe"
            v-model="vendeurData.vd_name"
        />
        <base-input
            label="salaire du vendeur"
            placeholder="250 000"
            type="number"
            v-model="vendeurData.salaire"
        />
    </v-modal>

    <v-modal 
        id="editModal"
        title="Modifier un vendeur"
        acceptButtonText="Modifier"
        @accept="editVendeur"
    >
        <base-input
            class="mb-3"
            label="nom du vendeur"
            placeholder="Ex: Jane Doe"
            v-model="vendeurData.vd_name"
            readonly
        />
        <base-input
            label="salaire du vendeur"
            placeholder="250 000"
            v-model="vendeurData.salaire"
        />
    </v-modal>

</template>

<script>
import { mapGetters } from 'vuex'
import VModal from '../../components/VModal.vue'

export default {
    components: {
        VModal
    },
    computed: {
        filteredVendeurs () {
            return this.vendeurs.filter(v => {
                return v.vd_name.toLowerCase().includes(this.searchValue)
            })
        },
        ...mapGetters([
            'getToken'
        ])
    },
    data () {
        return {
            vendeurs: [],
            searchValue: '',
            vendeurData: {
                id: null,
                vd_name: '',
                salaire: ''
            },
        }
    },
    methods: {
        
        getVendeurs () {
            this.axios.get(
                'vendeurs',
                { headers: { 'Authorization': 'Bearer ' + this.getToken } }
            ).then((res) => {
                this.vendeurs = res.data;
            }).catch((err) => alert(err))
        },
        addVendeur () {
            this.vendeurData.salaire = parseFloat(this.vendeurData.salaire);
            if(this.vendeurData.vd_name != '' && this.vendeurData.salaire > 0) {
                this.axios.post(
                    'vendeurs',
                    {
                        vd_name : this.vendeurData.vd_name,
                        salaire : this.vendeurData.salaire
                    },
                    { headers: { 'Authorization': 'Bearer ' + this.getToken } },
                ).then((res) => {
                    let { data } = res.data
                    this.vendeurs.push(data)
                    this.resetVendeurForm()
                }).catch((err) => alert(err))

            } else {
                alert('Données invalides')
            }
        },
        fillEditVendeurModal (vendeur) {
            this.vendeurData.id = vendeur.id.toString()
            this.vendeurData.vd_name = vendeur.vd_name.toString()
            this.vendeurData.salaire = vendeur.salaire.toString()
        },
        editVendeur () {
            let salaire = parseFloat(this.vendeurData.salaire)
            if(this.vendeurData.salaire > 0) {
                this.axios.put(
                    'vendeurs/' + this.vendeurData.id,
                    {salaire},
                    { headers: { 'Authorization': 'Bearer ' + this.getToken } }
                ).then(() => {
                    alert('salaire modifié avec succès')
                    this.getVendeurs()
                    this.resetVendeurForm()
                }).catch((error) => alert(error))
            }
        },
        deleteVendeur (vendeur) {
            if(confirm('voulez vous vraiment supprimer le vendeur: ' + vendeur.vd_name)) {
                this.axios.delete(
                    `vendeurs/${vendeur.id}`, 
                    {headers: { 'Authorization': 'Bearer ' + this.getToken }}
                ).then(() => {
                    let vendeurIndex = this.vendeurs.findIndex(v => v.id === vendeur.id)
                    this.vendeurs.splice(vendeurIndex, 1)
                }).catch(error => console.log(error))
            }
        },
        resetVendeurForm () {
            this.vendeurData.id = null;
            this.vendeurData.vd_name = ''
            this.vendeurData.salaire = null
        }
    },
    mounted () {
        this.getVendeurs();
    }
}
</script>

<style scoped>
.tab-item-actions > * {
    margin-right: 1rem;
}
</style>