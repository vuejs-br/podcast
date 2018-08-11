<script>
import Youtube from '../components/youtube.vue'
import Aplayer from 'vue-aplayer'

export default {
  components: { Youtube, Aplayer },
  asyncData: async ({ app, route, payload }) => {
    return ({
      post: payload || await app.$content('/seasons').get(route.path)
    })
  },
  computed: {
    music () {
      const { post } = this
      return post
      ? {
        artist: 'Vue.js Brasil',
        title: post.title,
        pic: post.audioCover || post.thumbnail,
        src: post.audio
      }
      : false
    }
  }
}
</script>

<template>
  <section>
    <h1 class="is-size-1"> {{ post.title }} </h1>
    <no-ssr placeholder="Loading...">
      <Aplayer
        v-if="music"
        v-bind="{ music }" />
    </no-ssr>
    <Youtube
      v-if="post.youtube"
      :src="post.youtube" />
    <nuxtent-body
      :body="post.body"
      class="content" />
  </section>
</template>
