<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <searchBox></searchBox>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  data() {
    return {
      
    }
  },
  components: {
    'searchBox': searchBox
  }
}
</script>

<style lang="stylus" scoped>
  
</style>