<template>
    <i 
        :class="classArray"
        :style="{color, fontSize: size}"
        :data-bs-toggle="dataBsToggle"
        :data-bs-target="dataBsTarget"
    ></i>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#FFFFFF'
        },
        class: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        
        dataBsToggle: {
            type: String,
            default: ''
        },

        dataBsTarget: {
            type: String,
            default: ''
        }
    },

    computed: {
        classArray () {
            return [ 
                'bi', 
                this.name , 
                ...this.class.split(' ')
            ]
        }
    }
}
</script>