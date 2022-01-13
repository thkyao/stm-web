<template>
    <header>
      <span class="opacity70">
      <v-app-bar
        elevate-on-scroll
        dark
        color="transparent"
      >
        <v-toolbar-title class="ml-3 mt-5">
          <router-link to="/">
            <SvgElement name="logo"/>
          </router-link >
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-tabs
          optional
          right
          color="white"
        >
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>

        <v-btn icon class="header-icon">
          <a :href="instagramAcccount">
            <v-icon>mdi-instagram</v-icon>
          </a>
        </v-btn>

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>
      </span>
      <v-navigation-drawer
        app
        v-model="drawer"
        fixed
        bottom
        dark
        width="100%"
        height="22%"
        :disable-route-watcher="routeWatcher"
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :to="menuItem.url"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
            <v-btn
              class="ma-1 insta-btn opacity70"
              color="purple"
              dark
              small
               @click="openInstagram"
            >
              <v-icon class="pr-2">mdi-instagram</v-icon>
              Instagram
            </v-btn>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
</template>

<script>
import constants from '../common/constants'
import SvgElement from './SvgElement'

export default {
  components: {
    SvgElement,
  },
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems,
      instagramAcccount: 'https://www.instagram.com/photos_3103/',
      routeWatcher: false,
    }
  },
  methods:{
    openInstagram: ()=> {
      window.open("https://www.instagram.com/photos_3103/");
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-top: 10px;
  margin-right: 50px;
  margin-left: 20px;
}

.v-app-bar__nav-icon, .header-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs, .header-icon {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}

.insta-btn {
    background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
    background: linear-gradient(45deg, rgba(254,212,117,1) 0%,rgba(229,61,93,1) 50%,rgba(194,49,134,1) 70%,rgba(156,56,187,1) 100%);
    box-shadow: 0 5px 25px rgba(0,0,0,.30);
}
</style>