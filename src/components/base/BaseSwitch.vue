<template>
    <div :class="classArray">
        <label 
            class="form-check-label" 
            :for="label"
        >
            {{label}}
        </label>
        <input 
            :id="label"
            :checked="modelValue"
            type="checkbox"
            class="form-check-input" 
            @input="$emit('update:modelValue', $event.target.checked)"/>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        class: {
            type: String,
            default: ''
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
        modelValue: {
            type: Boolean,
            default: false
        }
    },

    emits: ['update:modelValue'],

    computed: {
        classArray () {
            return [
                'form-check',
                'form-switch', 
                ...this.class.split(' ')
            ]
        }
    }
}
</script>

<style scoped>
label::first-letter {
    text-transform: uppercase;
}

.form-check-input:hover, 
.form-check-input:focus {
    border-color: v-bind(backgroundColor);
    box-shadow: none;
    outline: var(color) solid 1px;
}

.form-check-input:checked {
    background-color: v-bind(backgroundColor);
}
</style>