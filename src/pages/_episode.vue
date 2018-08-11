<template>
  <section>
    <h1 class="is-size-1"> {{ post.title }} </h1>
    <Youtube :src="post.youtube" />
    <nuxtent-body :body="post.body" />
  </section>
</template>

<script>
import Youtube from '../components/youtube.vue'

export default {
  components: { Youtube },
  asyncData: async ({ app, route, payload }) => {
    return ({
      post: payload || await app.$content('/seasons').get(route.path)
    })
  }
}
</script>
