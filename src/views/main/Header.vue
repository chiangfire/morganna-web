<template>
    <el-row>
	    <el-col :span="3" class="app-header-logo">
	        <a href="javascript:void(0);">
	            <span class="el-icon-picture"></span>
	        </a>
	    </el-col>
	    <div class="app-header-user">
	        <el-popover ref="user-popover" placement="bottom" transition="" :open-delay=0 trigger="hover">
	            <div>用户信息</div>
			</el-popover>
	        <a href="javascript:void(0);" v-popover:user-popover>
	            <img src="../../assets/img/user.png"/>
	        </a>
	    </div>
	    <el-row tag="ul" class="app-header-nav">
	        <el-col tag="li" :xs="{span:24,offset:0}" :sm="{span:4,offset:7}">
	            <a href="javascript:void(0);">营销活动送红包<i class="app-component-line"></i></a>
	        </el-col>
	        <el-col tag="li" :xs="24" :span="4">
	            <router-link active-class="app-header-nav-active" to="/cashlessvoucher/create">
		            <span>无资金商户优惠券</span>
		            <i class="app-component-line"></i>
	            </router-link>
	        </el-col>
	        <el-col tag="li" :xs="24" :span="4">
	            <a href="javascript:void(0);">支付宝现金抵价券<i class="app-component-line"></i></a>
	        </el-col>
	    </el-row>
	</el-row>
</template>
<style>
.app-header-frame{
    -webkit-box-shadow: 0 2px 8px #f0f1f2;
    box-shadow: 0 2px 8px #f0f1f2;
    line-height:60px;
    height:60px;
    z-index: 100;
}
.app-header-logo{
    font-size: 32px;
    font-weight: 400;
}
.app-header-nav{
    text-align:center;
    font-size: 14px;
    font-weight:600;
}
.app-header-nav a{
    display: block;
    transition: color 0.3s;
}
.app-header-user{
    position: absolute;
    right: 0px;
    z-index:101;
}
.app-header-user img{
    max-height:32px;
    max-width:32px;
    display: inline-block;
    vertical-align: middle;
}
.app-header-user a{
    padding: 20px 0px 11px 0px;
}
/**
 *浏览器宽度大于768px执行
 */
@media screen and (min-width: 768px) {
	.app-header-nav a:hover .app-component-line,.app-header-nav-active .app-component-line{
	    transform:scaleX(1);
	    width:70%;
	    margin:0 auto;
	}
	.app-header-nav a:hover,.app-header-nav-active{
	    color: #1890ff;
	}
}
/**
 *浏览器宽度小于768px执行
 */
@media screen and (max-width: 768px) {
	.app-header-nav a:hover,.app-header-nav-active{
	    background-color: #e6f7ff;
	    color: #1890ff;
	}
}
</style>