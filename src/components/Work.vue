
<template>
  <section class="page-base overflow">
    {{ testdata }}
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="3"
      >
        <ImgList/>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import dropboxApi from '../api/dropbox'
import ImgList from './ImgList'

export default {
  components: {
    ImgList,
  },
  data () {
    return {
      testdata: this.getImgList(),
    }
  },
  methods:{
    getImgList: ()=> {
      const aaa = dropboxApi.filesListFolder('/other')
      return aaa;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>