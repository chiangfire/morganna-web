<template>
    <div>
        <el-form ref="cashlessVoucher" :model="cashlessVoucher" label-width="80px">
            <el-form-item label="品牌名称">
                <el-input v-model="cashlessVoucher.brandName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="发放时间">
                <el-col :span="6">
                    <el-date-picker size="mini" v-model="cashlessVoucher.publishStartTime" type="datetime" placeholder="券发放开始时间"> </el-date-picker>
                </el-col>
                <el-col :span="6">
                    <el-date-picker v-model="cashlessVoucher.publishEndTime" type="datetime" placeholder="券发放结束时间"> </el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="有效时间">
			    <el-radio-group v-model="cashlessVoucher.voucherValidPeriod.type">
				    <el-radio label="ABSOLUTE">绝对时间</el-radio>
				    <el-radio label="RELATIVE">相对时间</el-radio>
			    </el-radio-group>
		    </el-form-item>
		    <el-form-item label="" v-if="cashlessVoucher.voucherValidPeriod.type == 'ABSOLUTE'">
                <el-col :span="6">
                    <el-date-picker v-model="cashlessVoucher.voucherValidPeriod.start" type="datetime" placeholder="券生效时间"> </el-date-picker>
                </el-col>
                <el-col :span="6">
                    <el-date-picker v-model="cashlessVoucher.voucherValidPeriod.end" type="datetime" placeholder="券失效时间"> </el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="" v-if="cashlessVoucher.voucherValidPeriod.type == 'RELATIVE'">
                <el-col :span="5">
                    <el-input-number v-model="cashlessVoucher.voucherValidPeriod.duration" label="描述文字"></el-input-number>
                </el-col>
                <el-col :span="11">
                    <el-select v-model="cashlessVoucher.voucherValidPeriod.unit"  placeholder="请选择时间单位">
					    <el-option label="天" value="DAY" selected="selected"></el-option>
					    <el-option label="小时" value="HOUR"></el-option>
					    <el-option label="分钟" value="MINUTE"></el-option>
				    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item label="可用时段">
                <el-checkbox-group v-model="cashlessVoucher.checkboxGroup3" size="small">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
            <el-date-picker
      v-model="cashlessVoucher.value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        <el-date-picker
      v-model="cashlessVoucher.value3"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
        <el-button @click.stop="test()">点击</el-button>
    </div>
</template>
<script>
const cityOptions = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
export default{
    data(){
        return {
            cashlessVoucher:{
                voucherValidPeriod:{}
            },
            cities: cityOptions
        }
    },
    methods:{
        test(){
            console.info(this.cashlessVoucher);
           
        }
    }
}
</script>
<style>
.line{
	text-align:center;
}
</style>