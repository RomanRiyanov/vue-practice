<template>
    <input :value="modelValue" @input="updateMyInput" class="input" type="text">
</template>

<script>
    export default {
        name: 'MyInput',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateMyInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.input {
    width: 100%;
    margin: 15px 0;
    padding: 5px;
}
</style>