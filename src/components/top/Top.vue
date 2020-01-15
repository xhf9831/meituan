<template>
 <div class="header">
   <Icon type="md-pin" />
   <span>{{list.city}}</span>
   <span class="change">切换城市</span>
   <span class="near">[
    <span v-for="item in city" :key="item.id" @click="changeCity(item)">
       {{item}}
    </span>
   ]</span>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       list:[],
       city:[]
     }
   },
   components: {

   },
   methods: {
     getCity(){
       this.$api.position().then(res=>{
         if(res.code===200){
           this.list = JSON.parse(res.data)
           console.log(this.list);
           this.getNear()
         }
       }).catch(err=>{
         console.log(err);
       })
     },
     getNear(){
       this.$api.cityname(this.list.city).then(res=>{
         this.arr = res.data.areas
         let near=[]
         near.push(res.data.areas[0].type)
         near.push(res.data.areas[1].type)
         near.push(res.data.areas[2].type)
         this.city = near
       }).catch(err=>{
         console.log(err);
       })
     },
     changeCity(item){

     }
   },
   mounted() {
     this.getCity()
   },
   watch: {

   },
   filters:{

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.header{
  width: 1190px;  
  margin: 0 auto;
  .change{
    border:1px solid black;
  }
}
</style>