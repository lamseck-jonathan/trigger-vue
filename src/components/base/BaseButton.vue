<template>
    <button
        :class="classArray"
        :type="type"
    >
        <slot>default</slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        },

        backgroundColor: {
            type: String,
            default: '#1563C3'
        },

        backgroundColorActive: {
            type: String,
            default: '#0E488E'
        },

        color: {
            type: String,
            default: '#FFFFFF'
        },

        class: {
            type: String,
            default: ''
        }
    },

    computed: {
        classArray () {
            return [
                'btn', 
                ...this.class.split(' ')
            ]
        }
    },

    mounted () {
        this.classArray.push(this.class);
    }
}
</script>

<style scoped>
.btn {
    width: 100%;
    color: v-bind(color);
    background-color: v-bind(backgroundColor);
}

.btn:hover,
.btn:focus,
.btn:active,
.btn.active,
.open > .dropdown-toggle.btn {
    background-color: v-bind(backgroundColorActive);
    border-color: v-bind(backgroundColorActive);
}

.btn:focus {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px v-bind(backgroundColorActive);
    outline: v-bind(color) solid 1px;
}
</style>