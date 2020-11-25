<template>
    <div>
        <el-card v-if="drawerOrCard==='card'">
            <h3>{{record.title}}</h3>

            <div class="image-package" v-if="record.pics && record.pics.length > 0">
                <el-image 
                class="image-view"
                fit="scale-down"
                :preview-src-list="[getUrl(record.pics[0])]"
                lazy
                :src="getUrl(record.pics[0])"></el-image>
                <div class="image-desc">{{getUrlDesc(record.pics[0])}}</div>
            </div>

            <p>{{getRecordDescLines(record.desc)[0]}}</p>
            <el-button v-if="(getRecordDescLines(record.desc).length > 1 || (record.pics && record.pics.length > 1))" type="text" @click="$emit('drawerEvent', record)">>>more</el-button>
        </el-card>

        <div class="drawerDiv" v-else>
          <h2 style="text-align: center;">{{record.title}}</h2>

          <div class="image-package" v-for="(pic, index) in record.pics" >
              <el-image 
              class="image-view"
              fit="scale-down"
              lazy
              :src="getUrl(pic)"></el-image>
              <div class="image-desc">{{getUrlDesc(pic)}}</div>
          </div>
      
          <p v-for="(line, index) in getRecordDescLines(record.desc)">{{line}}</p>

        </div>

    </div>

</template>

<script>
// todo 1.card内添加图片1
// todo 2.card内描述不能全部显示完。换行或指定长度？
// todo 3. edrawer组件内显示所有图片及描述。&& 全部的desc。
// todo 4. edrawer组件内的desc根据换行需要在不同h5 tag内显示
// todo 5. 提供选选项让用户可以预览全部的照片
// todo 6.兼容PC和手机端的任向华显示
const loveRecordsPath = '/img/loveRecords/'
export default {
    props: {
        drawerOrCard: {
          type: String,
          default: 'card'
        },
        record: {
            title: String,
            desc: String,
            pics: Array,
        }
    },

    methods: {
        getUrl(pic) {
            if (typeof pic === 'object') {
                return loveRecordsPath + pic.url
            } else {
                return loveRecordsPath + pic;
            }
        },
        getUrlDesc(pic) {
            let url = this.getUrl(pic)
            return url.substring(url.lastIndexOf('-')+1, url.lastIndexOf('.'))
        },
        getRecordDescLines(desc) {
            let descLines = desc.split('\n');
            descLines = descLines.map(line => line.trim()).filter(line => line.length > 0)
            return descLines
        }
    },
}
</script>

<style scope>
.image-package {
    width: 100%;
    margin: 0;
    padding-bottom: 25px;
    text-align: center;
    /* font-size: 0; */
}

@media only screen and (max-width: 560px){
  .image-view {
      width: 100%;
      width: 270px;
      vertical-align: middle;
      border: 0;
  }
}
@media only screen and (min-width: 560px){
  .image-view {
      width: 100%;
      width: 360px;
      vertical-align: middle;
      border: 0;
  }
}

.image-desc {
    min-width: 20%;
    max-width: 80%;
    min-height: 43px;
    box-sizing: border-box;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    color: #999;
}
.drawerDiv {
  padding: 20px;
}
/*1.显示滚动条：当内容超出容器的时候，可以拖动：*/
.el-drawer__body {
    height: 100%;
    overflow: scroll;
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar{
    display: none;
}
</style>>
