<template>
  <div class="video-container">
    <iframe
      :src="url"
      width="100%"
      height="auto"
      allowfullscreen/>
  </div>
</template>

<script>
  export default {
    props: {
      "src": {
        type: String,
        required: true
      }
    },
    computed: {
      id () {
        const url = this.src.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
      },
      url () {
        return `https://www.youtube.com/embed/${this.id}?autoplay=0`
      }
    },
  }
</script>

<style scoped>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /*16:9*/
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
