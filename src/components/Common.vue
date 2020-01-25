<template>
 <div>
  <top></top>
  <router-view/>
  <foot></foot>
 </div>
</template>

<script>
import top from './top/Top'
import foot from './foot/Foot'
 export default {
   data () {
     return {

     }
   },
   components: {
     top,
     foot
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>