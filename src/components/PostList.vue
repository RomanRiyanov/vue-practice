<template>
    <TransitionGroup name="postItem" key="postItem" tag="article">
        <article class="post" v-for="post in posts" :key="post.title">
            <div>
                <strong>{{ post.title }}</strong><p>{{ post.body }}</p>
            </div>
            <!-- <MyButton @click="deletePost(post.id)">Удалить пост</MyButton> -->
            <MyButton @click="this.$emit('deletation', post.id)">Удалить пост</MyButton>
        </article>
    </TransitionGroup>
</template>

<script>
// можно убрать, потому что зарегестрировали в main
// import MyButton from '../UI/MyButton.vue';
    export default {
        components: {
            // MyButton,
        },
        props: {
            posts: {
                type: Array,
                default: [],
                required: true,
            }
        },
        methods: {
            deletePost(data) {
                this.$emit('deletation', data)
            }
        }
    }
</script>

<style scoped>
.post {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin: 15px;
    border: 3px solid purple;
}

.postItem-enter-active,
.postItem-leave-active {
  transition: all 0.5s ease;
}
.postItem-enter-from,
.postItem-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.postItem-move {
  transition: all 0.5s ease;
}
</style>