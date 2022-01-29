<template>
    <div :class="classArray">
        <label
            v-if="label"
            :for="label" 
            class="form-label"
        >
            {{label}}
        </label>
        <input
            :id="label"
            :type="type" 
            :value="modelValue"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :readonly="readonly"
            class="form-control"
            @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },

        label: {
            type: String,
            default: ''
        },

        placeholder: {
            type: String,
            default: ''
        },

        borderColor: {
            type: String,
            default: '#1563C3'
        },
        
        class: {
            type: String,
            default: ''
        },

        autocomplete: {
            type: String,
            default: 'off'
        },

        readonly: {
            type: Boolean,
            default: false
        },

        modelValue: String,
    },

    emits: ['update:modelValue'],

    computed: {
        classArray () {
            return this.class.split(' ')
        }
    }
}
</script>

<style scoped>
label::first-letter {
    text-transform: uppercase;
}

textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
  border-color: v-bind(borderColor);
  box-shadow: none;
  outline:  v-bind(borderColor) solid 1px;
}
</style>