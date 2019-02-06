<template>
  <div class="search">
    <ul class="items">
      <li class="item" v-for="(item, index) in items" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
const QUERY_LIST = ['page']

export default {
  data () {
    return {
      items: []
    }
  },
  async created () {
    const res = await axios.get('https://qiita.com/api/v2/items', {
      params: this.params
    })
    this.items = res.data
  },
  computed: {
    params () {
      let params = {}
      for (let key in this.$route.query) {
        if(QUERY_LIST.includes(key)) params[key] = this.$route.query[key]
      }
      return params
    }
  }
}
</script>