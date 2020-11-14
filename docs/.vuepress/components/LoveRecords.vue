<template>
<div class="block">
  <el-timeline :reverse="true">
    <el-timeline-item v-for="(record,index) in loveRecords" :key="index" :timestamp="record.date" placement="top">
        <Record :record="record"/>
    </el-timeline-item>
  </el-timeline>
</div>
</template>

<script>
import Record from './Record'
import loveRecords from './loveRecords/loveRecords.js'
// console.log(loveRecords)
export default {
    components: {Record},
    data() {
        return {
            loveRecords,
        }
    }
}
</script>

<style>

</style>