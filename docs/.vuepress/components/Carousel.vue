<template>
  <el-carousel :interval="2000" type="card" height="300px">
    <el-carousel-item v-for="(article, item) in articles" :key="item" >
      <div style=" text-align: center " @click=" gogogo(article.path) ">
          <h3>{{ article.title }}</h3>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scope>
  .el-carousel__item h3 {
  
    font-size: 20px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
     background-color: #d3dce6;

  }
  
  .el-carousel__item:nth-child(2n+1) {
   
    background-color: #99a9bf;
  }
</style>

<script>
import {sortFun} from './utils/article'
const displayNum = 5;
export default {
  data() {
    return {
      articles: [],
    };
  },
  created: function () {
      this.$site.pages.forEach(item => {
        if (item.frontmatter.sticky) {
          this.articles.push(item);
        }
      });
      this.articles.sort(sortFun)
      let leftNum = displayNum - this.articles.length;
      for (let key = 0; key < leftNum; key++) {
        this.articles.push({title: "暂无专题", path: undefined})
      }
      this.articles = this.articles.slice(0,displayNum)

  },
  methods: {
    gogogo (path) {
      if (path) {
        window.location.href= path;
      }
    }
  }
}
</script>