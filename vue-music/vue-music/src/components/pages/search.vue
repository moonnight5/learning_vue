<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <searchBox></searchBox>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query" >
      <!-- 热门搜索 -->
      <scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li
              class="item"
              v-for="(item, index) in hotKey" :key="index"
              @click="addQuery(item.first)"
            >
              <span>{{item.first}}</span>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  data() {
    return {
      query: false,
      hotKey: [
        {first: '0新歌发布'},
        {first: '1新歌发布'},
        {first: 'a新歌发布'},
        {first: 'b新歌发布'},
        {first: 'c新歌发布'},
        {first: 'd新歌发布'},
      ]
    }
  },
  components: {
    'searchBox': searchBox,
    'scroll': scroll
  }
}
</script>

<style lang="stylus" scoped>
  
</style>