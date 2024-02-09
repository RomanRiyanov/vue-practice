<template>
    <div style="display: flex; margin: 20px 0; justify-content: space-between;">
        <MyButton @click="this.dialogShow = true">Добавить пост</MyButton>
        <MySelect v-model="selectedSort" :options="selectedOptions"/>
    </div>

    <MyDialog v-model:show="dialogShow">
        <PostForm @addPost="pushPost"/>
    </MyDialog>
    
    <div v-if="posts.length > 0">
        <h2>Списка постов</h2>
        <PostList @deletation="removePost" :posts="sortedPosts"/>
    </div>
    <h3 v-else>Нет постов для отображения</h3>
</template>

<script>
    import PostForm from '@/components/PostForm';
    import PostList from '@/components/PostList';
    import axios from 'axios';

    export default {
        components: {
            PostForm, PostList
        },
        data() {
            return {
                posts: [
                    // {id: 1, title: 'Заголовок поста 1', body: 'Содержание поста 1'},
                    // {id: 2, title: 'Заголовок поста 2', body: 'Содержание поста 2'},
                    // {id: 3, title: 'Заголовок поста 3', body: 'Содержание поста 3'},
                ],
                postTitle: '',
                postBody: '',
                dialogShow: false,
                selectedSort: '',
                selectedOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержанию'},
                ],
            }
        },
        methods: {
            pushPost(data) {
                this.posts.push(data);
                this.dialogShow = false;
            },
            removePost(data) {
                console.log(data)
                this.posts = this.posts.filter(elem => elem.id !== data)
            },
            async fetchPosts() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
                        .then(res => {
                            this.posts = res.data;
                        })
                } catch(e) {
                    alert('Ошибка запроса');
                    console.log('error', e)
                }
            }
        },
        mounted() {
            this.fetchPosts();
        },
        computed: {
            // может называться по любому
            sortedPosts() {
                return [...this.posts].sort((a,b) => {
                    return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
                })
            }
        },
        watch: {
            // должна называться так же, как и параметр, за которым мы наблюдаем
            // selectedSort(newValue) {
            //     return this.posts.sort((a,b) => {
            //         return a[newValue]?.localeCompare(b[newValue])
            //         // равнозначно
            //         // return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
            //     })
            // },
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin-inline: 15px;
}

</style>