<template>
<div class="all-content">
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
    <div class="f-contet" @mousemove="goin(1)" @mouseleave="goout">
      <span class="font r-font">我的美团</span>
      <div :class="{change:num===1}" class="fcontent">
        <div>我的订单</div>
        <div>我的收藏</div>
        <div>抵用券</div>
        <div>账户设置</div>
      </div>
    </div>
    <div class="App">
      <span>手机APP</span>
    </div>
    <div class="f-contet" @mousemove="goin(2)" @mouseleave="goout">
      <span class="font r-font">商家中心</span>
      <div :class="{change:num===2}" class="scontent">
        <div>美团餐饮商户中心</div>
        <div>登录商家中心</div>
        <div>美团智能收银</div>
        <div>我想合作</div>
        <div>手机免费开店</div>
        <div>餐饮代理商招募</div>
        <div>商家申请开票</div>
        <div>免费合作美团排队</div>
      </div>
    </div>
    <div class="f-contet" @mousemove="goin(3)" @mouseleave="goout">
      <span class="font r-font">美团规则</span>
      <div :class="{change:num === 3}" class="tcontent">
        <div>规则中心</div>
        <div>规则目录</div>
        <div>规则评议院</div>
      </div>
    </div>
    <div class="f-contet" @mousemove="goin(4)" @mouseleave="goout">
      <span class="font r-font">网站导航</span>
      <div :class="{change:num === 4}" class="fivcontent">
        <div class="fiv-content" >
          <dl v-for="(item,index) in arr" :class="`changew${index}`" :key="index">
            <dt class="changef">{{item.title}}</dt>
            <dd v-for="(items,indexs) in arr[index].name" :class="`changel${index}`" :key="indexs">
              {{items}}
            </dd>
          </dl>
          <dl class="finalb">
            <dt class="changef">手机应用</dt>
            <dd>
              <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="">
            </dd>
            <dd>
              <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="">
            </dd>
            <dd>
              <img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt="">
            </dd>
            <dd>
              <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="">
            </dd>
            <dd>
              <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="">
            </dd>
          </dl>
        </div>
      </div>   
    </div>
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
       num:0,
       arr:[
         {title:'酒店旅游',
          name: [
            "国际机票",
            "火车票",
            "民宿",
            "经济型酒店",
            "主题酒店",
            "商务酒店",
            "公寓",
            "豪华酒店",
            "客栈",
            "青年旅社",
            "度假酒店",
            "别墅",
            "农家院"
          ]},
      // 吃美食
          {title:'吃美食',
          name: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"]},
          // 看电影
          {title:'看电影',
          name: [
            "热映电影",
            "热门影院",
            "热映电影口碑榜",
            "最受期待电影",
            "国内票房榜",
            "北美票房榜",
            "电影排行榜"
          ]}
        ]
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
       this.num = item
     },
     goout(){
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
  .left{
    line-height: 40px;
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
    display: flex;
    .f-contet{
      padding-top: 12px;
      &:hover{
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
        color: #FE8C00;
        background-color: #fff;
        border-color: #E5E5E5;
      }
      .font{
      cursor: pointer;
      padding: 12px 14px;
      }
    }
    .App{
      padding: 12px 14px;
      cursor: pointer;
      &:hover{
        color: #FE8C00
      }
    }
  }
}
.fcontent{
  display: none;
  font-size: 12px;
  color: #999;
  background: #fff;
  padding: 12px 14px;
  div{
    text-align: center;
    margin-top: 12px;
    &:hover{
      cursor: pointer;
      color: #FE8C00;
    }
  }
}
.scontent{
  margin-top: 10px;
  display: none;
  font-size: 12px;
  position: absolute;
  left: 1087px;
  color: #999;
  background: #fff;
  padding: 12px 14px;
  div{
    text-align: center;
    margin-top: 12px;
    &:hover{
      cursor: pointer;
      color: #FE8C00;
    }
  }
}
.tcontent{
  display: none;
  position: absolute;
  left: 1211px;
  font-size: 12px;
  color: #999;
  background: #fff;
  padding: 11px 8px;
  margin-top: 10px;
  div{
    text-align: center;
    margin-top: 12px;
    &:hover{
      cursor: pointer;
      color: #FE8C00;
    }
  }
}
.change{
  display: block !important;
}
.all-content{
  width: 100%;
  background: #F8F8F8;
}
.fivcontent{
  display: none;
  .fiv-content{
    display: none;
    position: absolute;
    left: 164px;
    font-size: 12px;
    color: #999;
    background: #fff;
    width: 1200px;
    box-sizing: border-box;
    border-top-left-radius: 4px;
    padding: 30px 36px 36px 47px;
    margin-top: 10px;
    display: flex;
    dd{
      cursor: pointer;
      &:hover{
        color: #FE8C00
      }
    }
  }
}
.changef{
  margin-bottom: 26px;
  font-size: 14px;
  color: #222222;
  font-weight: 500;
  text-align: center;
}
.changew0{
  width: 234px;
  margin-right: 47px;
  .changel0{
    width: 33%;
    text-align: center;
    float: left;
  }
}
.changew1{
  width: 156px;
  margin-right: 47px;
  .changel1{
    width: 50%;
    text-align: center;
    float: left;
  }
}
.changew2{
  width: 90px;
  margin-right: 47px;
  .changel2{
    text-align: center;
  }
}
.finalb{
  margin-right: 47px;
  dd{
    display: inline-block;
    margin: 0 8px;
  }
  img{
    width: 60px;
    height: 60px;
    border: 0;
  }
}
</style>