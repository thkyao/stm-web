<template>
  <v-app>
    <div :style="bgStyle" class="bg"/>
    <div class="smork"/>
    <AppHeader/>
    <v-main class="mt10">
      <transition mode="out-in">
         <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>
 
<script>
import constants from './common/constants'
import AppHeader from './components/Header'

export default {
  components: {
    AppHeader,
  },
  created : () =>{
  },
  data () {
    return {
      drawer: false,
      bgStyle: `background: url("${this.getBgImg()}");background-size: cover;background-position: center center;`,
    }
  },
  methods:{
    getBgImg: ()=> {
      const messageNo = Math.floor( Math.random() * constants.topImgs.length);
      return constants.topImgs[messageNo];
    }
  }
}
</script>
 
<style lang="scss" scoped>
.bg {
  // background: url("/img/top.jpg");
  // background-size: cover;
  // background-position: center center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50vh;
  min-height: 100vh;
}
.smork {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50vh;
  min-height: 100vh;
}
.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>