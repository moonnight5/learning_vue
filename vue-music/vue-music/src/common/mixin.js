import { mapGetters,mapMutations,mapActions } from 'vuex'

export const searchMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  methods: {
    onQueryChange (query) {
      // console.log(query)
      this.query = query.trim()    //trim()去空格
    },
    blurInput() {
      this.$refs.searchBox.blur()
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch(song) {
      console.log(song)
      this.selectPlaySong(song)
      // this.$store.dispatch('saveSearchHistory',this.data)
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'selectPlaySong'
    ])
  }
}