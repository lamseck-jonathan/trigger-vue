<template>
    <!-- Modal -->
    <div 
        class="modal fade" 
        :id="id" 
        data-bs-backdrop="static" 
        data-bs-keyboard="false" 
        tabindex="-1" 
        aria-labelledby="staticBackdropLabel" 
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 
                        class="modal-title" 
                        id="staticBackdropLabel"
                    >
                        {{ title }}
                    </h5>
                    <button 
                        type="button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <slot> modal-body-content</slot>
                </div>
                <div class="modal-footer">
                    <div>
                        <base-button
                            background-color="#474747"
                            background-color-active="#292929"
                            data-bs-dismiss="modal"
                        >
                            {{ cancelButtonText }}
                        </base-button>
                    </div>
                    <div>
                        <base-button @click="$emit('accept')">
                            {{ acceptButtonText }}
                        </base-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        acceptButtonText: {
            type: String,
            default: 'Exécuter'
        },

        cancelButtonText: {
            type: String,
            default: 'Annuler'
        },
        
        title: {
            type: String,
            default: 'titre du modal'
        },

        id: {
            type:String,
            required: true
        }
    },
    emits: ['accept'] 
}
</script>

<style scoped>
.modal-title::first-letter {
    text-transform: capitalize;
}
</style>