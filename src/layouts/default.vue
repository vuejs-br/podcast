<script>
import PageHeader from '../components/PageHeader.vue'

export default {
  components: { PageHeader }
}
</script>

<template>
  <div>
    <PageHeader />
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>
