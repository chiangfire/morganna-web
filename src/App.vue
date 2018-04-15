<template>
    <div id="app">
	    <el-row class="app-header-frame">
		    <el-col :xs="appHeaderFrame.xs" :lg="appHeaderFrame.lg">
		        <Header></Header>
		    </el-col>
		</el-row>
        <el-row class="app-component-verticaldist">
            <el-col :xs="appHeaderFrame.xs" :lg="appHeaderFrame.lg">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Header from "./views/main/Header.vue";
export default {
    name: 'App',
    data (){
        return {
            appHeaderFrame:{
                xs:24,
                lg:{span:16,offset:4}
            }
        }
    },
    components:{Header}
}
</script>

<style>
html, body {
    font-family: Lato, "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-text-size-adjust: none;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;/**#f5f5f5;*/
    color: #867f6f;
    margin:0;
    padding:0;
}
img{
    border:0px;
    width: 100%;
    height: 100%;
}
ul{
    margin:0px;
    padding:0px
}
ul li{  
    list-style-type:none;
}  
a{
    text-decoration:none;
    color: rgba(0, 0, 0, 0.65);
}
a:focus{
    outline:none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 100%;
    height: auto;
    min-height: 100%;
}
.app-component-line{
    display:block;
    background-color:#1890ff;
    height:2px;
    transform:scaleX(0);
    transition: transform .3s;
    transform-origin:50 50;
}
.app-component-verticaldist{
    margin-top:10px;
}
</style>
