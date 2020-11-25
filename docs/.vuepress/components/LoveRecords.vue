<template>
<div class="block">
  <el-timeline :reverse="true">
    <el-timeline-item v-for="(record,index) in loveRecords" :key="index" :timestamp="record.date" placement="top">
        <Record :record="record" v-on:drawerEvent="handleDrawerEvent"/>
    </el-timeline-item>
  </el-timeline>

  <el-drawer
        class="el-drawer-container"
        :with-header="false"
        :visible.sync="showDetail"
        :direction="drawerDire"
        style="overflow:scoll"
        :size="drawerSize">
          <Record :record="record" drawerOrCard="drawer"/>
        </el-drawer>
</div>
</template>

<script>
import Record from './Record'
import loveRecords from './loveRecords/loveRecords.js'
// console.log(loveRecords)
const loveRecordsPath = '/img/loveRecords/'
export default {
    components: {Record},
    data() {
        return {
            loveRecords,
            browserWidth: '',
            browserHeight: '',
            record: loveRecords[0],
            showDetail: false,
        }
    },
    computed: {
        drawerDire() {
          if (this.browserWidth > this.browserHeight || this.browserWidth*2/3 > 360) {
            return "rtl"
          } else {
            return "btt"
          }
        },
        drawerSize() {
          if (this.browserWidth > this.browserHeight || this.browserWidth*2/3 > 360) {
            return "66%"
          } else {
            return "80%"
          }
        }
    },
    mounted() {
      this.browserWidth = window.innerWidth;
      this.browserHeight = window.innerHeight;
      window.onresize = () => {
        return (() => {
          this.browserWidth = window.innerWidth;
          this.browserHeight = window.innerHeight;
        })();
      };
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
        },
        handleDrawerEvent(record) {
          this.record = record;
          this.showDetail = true;
        }
    }
}
</script>

<style>

</style>