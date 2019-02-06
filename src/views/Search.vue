<template>
  <div class="search">
    <ul class="items">
      <li class="item" v-for="(item, index) in items" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    fetch('https://qiita.com/api/v2/items').then(res => {
      return res.json()
    }).then(items => {
      this.items = items
    })
  }
}
</script>