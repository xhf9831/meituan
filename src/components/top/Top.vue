<template>
<div>
  <div class="header">
   <div class="left">
    <Icon type="md-pin" size="15" />
    <span>{{list.city}}</span>
    <span class="changecity">切换城市</span>
    <span class="near">[
      <span class="n-city" v-for="item in city" :key="item.id">
        {{item}}
      </span>
    ]</span>
    <span class="login">立即登录</span>
    <span class="register">注册</span>
   </div>
   <div class="right">
     <span class="font" @mousemove="goin(1)" @mouseleave="goout">我的美团</span>
     <span class="font">手机APP</span>
     <span class="font" @mousemove="goin(2)" @mouseleave="goout">商家中心</span>
     <span class="font" @mousemove="goin(3)" @mouseleave="goout">美团规则</span>
     <span class="font">网站导航</span>
   </div>
 </div>
 <div>
  <div :class="{change:num===1}" class="content">
    <div>我的订单</div>
    <div>我的收藏</div>
    <div>抵用券</div>
    <div>账户设置</div>
  </div>
  <div :class="{change:num===2}" class="content">
    <div>美团餐饮商户中心</div>
    <div>登录商家中心</div>
    <div>美团智能收银</div>
    <div>我想合作</div>
    <div>手机免费开店</div>
    <div>餐饮代理商招募</div>
    <div>商家申请开票</div>
    <div>免费合作美团排队</div>
  </div>
  <div :class="{change:num===3}" class="content">
    <div>规则中心</div>
    <div>规则目录</div>
    <div>规则评议院</div>
  </div>
 </div>
</div>
 
</template>

<script>
 export default {
   data () {
     return {
       list:[],
       city:[],
       num:0
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
     goin(item){
       console.log(item,'111');
       this.num = item
     },
     goout(){
       console.log(item,'000');
       this.num = 0
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
  display: flex;
  justify-content: space-between;
  background: #F8F8F8;
  font-size: 12px;
  color: #999;
  height: 40px;
  line-height: 40px;
  .left{
    .changecity{
      background: #F4F4F4;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      color: #666;
      margin: 0 4px;
      padding: 0 2px;
      cursor: pointer;
      &:hover{
        color:#FE8C00
      }
    }
    .near{
      .n-city{
        margin: 0 4px;
        cursor: pointer;
        &:hover{
          color:#FE8C00
        }
      }
    }
    .login{
      margin-left: 25px;
      color:#FE8C00;
      cursor: pointer;
    }
    .register{
      margin-left: 10px;
      cursor: pointer;
      &:hover{
        color:#FE8C00
      }
    }
  }
  .right{
    .font{
      padding: 12px 14px;
    }
  }
}
.content{
  display: none;
}
.change{
  display: block !important;
}
</style>