<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton'
    }
</script>

<style scoped>
.btn {
    align-self: flex-end;
    padding: 10px 20px;
    background: none;
    color: thistle;
    border: 1px solid thistle;
    border-radius: 5px;
    min-width: 125px;
}

.btn:hover {
    cursor: pointer;
}
</style>