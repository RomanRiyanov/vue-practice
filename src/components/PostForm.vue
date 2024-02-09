<template>
    <form class='form' action="">
        <MyInput placeholder="Название поста" v-model="post.title"/>
        <MyInput placeholder="Текст поста" v-model="post.body"/>
        <MyButton @click.prevent="addPost">Добавить пост</MyButton>
    </form>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                }
            } 
        },
        methods: {
            addPost() {
                let new_id = new Date();
                
                if (this.post.title !== '' && this.post.body !== '') {
                    this.$emit('addPost', this.post);
                    this.post = {
                        title: '',
                        body: '',
                    }
                }
            }
        },
        // watch: {
        //     //глубокое отслеживание изменений
        //     post: {
        //         handler(newValue) {
        //             console.log(newValue)
        //         },
        //         deep: true
        //     }
        // }
    }
</script>

<style scoped>

.form {
    padding: 30px;
    margin: 30px;
    border: 3px solid grey;
    display: flex;
    flex-direction: column;
}

</style>