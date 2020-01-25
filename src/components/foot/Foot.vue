<template>
 <div class="foot">
   <div class="footlink">
    <div class="foot-clounm">
      <dl>
        <dt>{{footList[0].title}}</dt>
        <dd v-for="item in footList[0].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[1].title}}</dt>
        <dd v-for="item in footList[1].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
    </div>
    <div class="foot-clounm">
      <dl>
        <dt>{{footList[2].title}}</dt>
        <dd v-for="item in footList[2].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
    </div>
    <div class="foot-clounm">
      <dl>
        <dt>{{footList[3].title}}</dt>
        <dd v-for="item in footList[3].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[4].title}}</dt>
        <dd v-for="item in footList[4].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
    </div>
    <div class="foot-clounm">
      <dl>
        <dt>{{footList[5].title}}</dt>
        <dd v-for="item in footList[5].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[6].title}}</dt>
        <dd v-for="item in footList[6].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[7].title}}</dt>
        <dd v-for="item in footList[7].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[8].title}}</dt>
        <dd v-for="item in footList[8].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
    </div>
    <div class="foot-clounm">
      <dl>
        <dt>{{footList[9].title}}</dt>
        <dd v-for="item in footList[9].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[10].title}}</dt>
        <dd v-for="item in footList[10].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[11].title}}</dt>
        <dd v-for="item in footList[11].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[12].title}}</dt>
        <dd v-for="item in footList[12].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
      <dl>
        <dt>{{footList[13].title}}</dt>
        <dd v-for="item in footList[13].details" :key="item.id">
          {{item}}
        </dd>
      </dl>
    </div>
   </div>
   <div class="footcopy">
     <div class="left">
       <p>
         <span>©美团网团购 meituan.com</span>
         <span class="p-mid">京ICP证070791号</span>
         <span class="p-right">京ICP备10211739号</span>
       </p>
       <p>
         <span>广播电视节目制作经营许可证（京）字第03889号</span>
       </p>
       <p>
         <span class="p-right">食品经营许可证</span>
         <span class="p-right">互联网药品信息服务资格证</span>
       </p>
       <p>
         <span>医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</span>
       </p>
     </div>
     <div class="right">
      <p>京公网安备11010502025545号</p>
      <div class="f-content">
        <div class="first">
          <img class="f-img" src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e" alt="">
          <span class="f-text">北京三快科技有限公司</span>
        </div>
        <div class="ph1"></div>
        <div class="ph2"></div>
        <div class="ph3"></div>
      </div>
     </div>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        footList: [
          {
            title: "用户帮助",
            details: [
              "申请退款",
              "查看美团券密码",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告",
              "消费者权益保障",
            ]
          },
          {
            title: "美团服务",
            details: [
              "美团外卖",
              "美团酒店",
              "猫眼电影",
              "美团配送",
              "美团云",
              "大众点评",
              "美团民宿",
              "无人配送",
            ]
          },
          {
            title: "商家合作",
            details: [
              "美团餐饮商户中心",
              "美食商家入驻(非外卖)",
              "美团外卖开店申请",
              "美团收银官网",
              "外卖配送加盟申请",
              "美团点评餐饮学院",
              "酒店商家入驻",
              "境内度假商家入驻",
              "综合商家入驻",
              "美团民宿房东商家入驻",
              "商家开票申请",
              "美团点评智能收银机",
              "美团点评收单",
              "美团点评餐饮开放平台",
              "免费使用美团排队",
              "快驴进货商家合作",
              "美团闪购商家入驻",
            ]
          },
          {
            title: "代理商加盟",
          details: [
              "美团外卖代理商招募",
              "到店餐饮代理商招募",
              "非餐饮代理商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团点评5S服务商招募",
              "美团收单渠道代理商招募",
            ]
          },
          {
            title: "美团规则",
            details: [
              "规则中心",
              "规则目录",
              "规则评议院",
            ]
          },
          {
            title: "关注美团",
            details: [
              "美团新浪微博",
            ]
          },
          {
            title: "公司信息",
            details: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "商户诚信公约及管理办法",
              "保险经纪资质",
            ]
          },
          {
            title: "廉正举报",
            details: [
              "廉政邮箱",
            ]
          },
          {
            title: "知识产权",
            details: [
              "知识产权维权平台",
            ]
          },
          {
            title: "消费者服务热线",
            details: [
              "外卖消费者：10109777",
              "猫眼消费者：10105335",
              "其他消费者：10107888",
            ]
          },
          {
            title: "商家服务热线",
            details: [
              "外卖&餐饮商家：10105557",
              "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107",
            ]
          },
          {
            title: "投诉举报热线",
            details: [
              "违法和不良信息举报电话：4006018900",
              "举报邮箱：tousujubao@meituan.com",
            ]
          },
          {
            title: "商家自助入驻美团入口"
          },
          {
            title: "供应商注册入口"
          },
      ]
     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   },
   filters: {

   }
 }
</script>

<style scoped lang='scss'>
.foot{
  width: 1190px;
  margin: 0 auto;
  color: #333;
  font-size: 12px;
  line-height: 2;
  box-sizing: border-box;
  text-align: left;
  .footlink{
    padding: 40px 45px;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    .foot-clounm{
      width: 20%;
      dl{
        padding-bottom: 20px;
        color: #666;
        dt{
          color: #333;
          font-size: 14px;
          font-weight: 500;
        }
        dd{
          cursor: pointer;
          &:hover{
           color:  #FE8C00 
          }
        }
      }
    }
  }
  .footcopy{
    color: #999;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 30px;
    line-height: 1.6;
    display: flex;
    justify-content: space-between;
    .left{
      .p-mid{
        margin-left: 20px;
        margin-right: 20px;
      }
      .p-right{
        margin-right: 20px;
      }
    }
    .right{
      text-align: right;
      .f-content{
        display: flex;
        .first{
          text-align: left;
          padding-top: 6px;
          position: relative;
          top: -20px;
          .f-img{
            width: 38px;
            position: relative;
            top: 15px;
          }
          .f-text{
            padding: 0 5px;
          }
        }
        .ph1{
          background: url('../../assets/footer.png') no-repeat;
          width: 113px;
          height: 40px;
          background-position: 0px -165px;
          margin-right: 2px;
        }
        .ph2{
          background: url('../../assets/footer.png') no-repeat;
          width: 110px;
          height: 40px;
          background-position: 0px -125px;
          margin-right: 2px;
        }
        .ph3{
          background: url('../../assets/footer.png') no-repeat;
          width: 110px;
          height: 40px;
          background-position: 0px -38px;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>