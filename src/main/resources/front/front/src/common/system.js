export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"维修员","menuJump":"列表","tableName":"weixiuyuan"}],"menu":"维修员管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","宿舍"],"menu":"楼栋信息","menuJump":"列表","tableName":"loudongxinxi"}],"menu":"楼栋信息管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除","修改","分配"],"menu":"宿舍信息","menuJump":"列表","tableName":"sushexinxi"}],"menu":"宿舍信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","宿舍人数统计","首页总数","首页统计"],"menu":"宿舍分配","menuJump":"列表","tableName":"sushefenpei"}],"menu":"宿舍分配管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除","审核","修改","每日报修人数统计","首页总数","首页统计","派单"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"维修订单","menuJump":"列表","tableName":"weixiudingdan"}],"menu":"维修订单管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"维修进度","menuJump":"列表","tableName":"weixiujindu"}],"menu":"维修进度管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除","修改","满意度统计","首页总数","首页统计"],"menu":"评价信息","menuJump":"列表","tableName":"pingjiaxinxi"}],"menu":"评价信息管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"知识分类","menuJump":"列表","tableName":"zhishifenlei"}],"menu":"知识分类管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除","查看评论"],"menu":"知识信息","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-news","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"知识信息列表","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","报修"],"menu":"宿舍分配","menuJump":"列表","tableName":"sushefenpei"}],"menu":"宿舍分配管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","评价"],"menu":"维修进度","menuJump":"列表","tableName":"weixiujindu"}],"menu":"维修进度管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除"],"menu":"评价信息","menuJump":"列表","tableName":"pingjiaxinxi"}],"menu":"评价信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"知识信息列表","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","进度"],"menu":"维修订单","menuJump":"列表","tableName":"weixiudingdan"}],"menu":"维修订单管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"维修进度","menuJump":"列表","tableName":"weixiujindu"}],"menu":"维修进度管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"评价信息","menuJump":"列表","tableName":"pingjiaxinxi"}],"menu":"评价信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"知识信息列表","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"维修员","tableName":"weixiuyuan"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
