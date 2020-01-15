import service from './index'

export default {
    // 获取定位
    position() {
        return service.get('/position')
    },
    // 获取省份
    province() {
        return service.get('/province')
    },
    // 获取省份所有城市
    citys(id) {
        return service.get(`/citys/${id}`)
    },
    // 获取城市具体信息
    cityname(name) {
        return service.get(`/crumbs?city=${name}`)
    },
    //省市关联
    connectcity() {
        return service.get('city')
    },
    //热门城市
    hotCity() {
        return service.get('/hotCity')
    },
    //全部分类
    category() {
        return service.get('/menu')
    },
    // 获取热门搜索
    hotplace(name) {
        return service.get(`/hotPlace?city=${name}`)
    },
    //搜索建议
    searchTop(name, input) {
        return service.get(`/searchTop?city=${name}input=${input}`)
    },
    //根据关键词搜索
    results(name, keywords) {
        return service.get(`/results?city=${name}&keyword=${keywords}`)
    },
    //商铺详情
    products(keyword, name) {
        return service.get(`/products?keyword=${keyword}&city=${name}`)
    },
    // ### 有格调 (调关键词搜索接口)

    // #### 对应的tab

    // - 约会聚餐 => 美食
    // - 丽人spa => 丽人
    // - 电影演出 => 电影
    // - 品质出游 => 旅游
    // - 全部 => 景点
    //登录
    login(username, passwod) {
        return service.post('/users/login', {
            username,
            passwod
        })
    },
    //注册
    register(username, password, email) {
        return service.post('/users/register', {
            username,
            password,
            email
        })
    }
}