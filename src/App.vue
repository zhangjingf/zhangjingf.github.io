<template>
  <div id="app">
    <el-container>
      <el-header>愿生活对你我都能温柔以待</el-header>
      <el-container>
        <el-aside width="200px"
          ><el-menu
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
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import menuJson from './config/menu';

export default {
  data() {
    return {
      menuOptions: [],
    };
  },
  created() {
    this.menuOptions = menuJson;
  },
  methods: {
    navChange(index, indexPath) {
      if (window.location.pathname === indexPath[indexPath.length - 1]) return;
      this.$router.push(indexPath[indexPath.length - 1]);
    }
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 20px;
  height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
