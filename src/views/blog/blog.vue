<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="navChange"
        >
          <template v-for="(item, index) of menuOptions">
            <template v-if="item.children">
              <el-submenu :key="index" :index="item.path">
                <template slot="title">
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item
                    v-for="(son, index1) of item.children"
                    :key="index1"
                    :index="son.path"
                  >
                    <span slot="title">{{ son.name }}</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :key="index" :index="item.path">
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-header>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import menuJson from '../../config/menu';

export default {
  data() {
    return {
      menuOptions: [],
      timeStr: '',
    };
  },
  created() {
    this.menuOptions = menuJson;
    setInterval(() => {
      this.timeStr = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    }, 500);
  },
  methods: {
    navChange(index, indexPath) {
      if (window.location.pathname === indexPath[indexPath.length - 1]) return;
      this.$router.push(indexPath[indexPath.length - 1]);
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.el-menu {
  border-right: none;
}
.el-header,
.el-footer {
  display: flex;
  justify-content: space-between;
//   background-color: rgb(36, 41, 46);
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  border-right: solid 1px #e6e6e6;
  color: #333;
  text-align: center;
  line-height: 20px;
  overflow-x: hidden;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
