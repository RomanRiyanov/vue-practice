<template>

    <form class='form' action="">
        <input class='input' type="text" placeholder="Название поста" v-bind:value="postTitle" @input="postTitle = $event.target.value">
        <input class='input' type="text" placeholder="Текст поста" v-bind:value="postBody" @input="postBody = $event.target.value">
        <button class='btn' @click.prevent="addPost">Добавить пост</button>
    </form>

    <div class="post" v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong><p>{{ post.body }}</p>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                posts: [
                    {id: 1, title: 'Заголовок поста 1', body: 'Содержание поста 1'},
                    {id: 2, title: 'Заголовок поста 2', body: 'Содержание поста 2'},
                    {id: 3, title: 'Заголовок поста 3', body: 'Содержание поста 3'},
                ],
                postTitle: '',
                postBody: ''
            }
        },
        methods: {
            addPost() {
                let new_id = this.posts.length + 1;
                
                if (this.postTitle !== '' || this.postBody !== '') {
                    this.posts.push({
                        id: new_id, title: this.postTitle, body: this.postBody
                    })
                this.postTitle = '';
                this.postBody = '';
                }
            }
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.post {
    padding: 15px;
    margin: 15px;
    border: 3px solid purple;
}

.form {
    padding: 30px;
    margin: 30px;
    border: 3px solid grey;
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    margin: 15px 0;
    padding: 5px;
}

.btn {
    align-self: flex-end;
    padding: 10px 20px;
    background: none;
    color: thistle;
    border: 1px solid thistle;
    border-radius: 5px;
}

</style>