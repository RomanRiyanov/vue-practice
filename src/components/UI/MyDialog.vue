<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyDialog',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
}

.dialog__content {
    background-color: white;
    border-radius: 10px;
    min-width: 300px;
    min-height: 100px;
    margin: auto;
}
</style>