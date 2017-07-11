<template>
	<div>
		<el-row v-for="address in options" :key="address.id" @click.native="select(address.id)" :class="edit?'address-box address-not-active':'address-active address-box'">
			<el-col class="address-select" v-if="!edit" :span="4">
				<el-radio text-color="#00FF00" class="radio" v-model="thisValue" :label="address.id">&nbsp;</el-radio>
			</el-col>
			<el-col :span="edit?24:20">
				<el-row class="address-header">
					<el-col :span="12" class="address-left">
						{{address.name}}
					</el-col>
					<el-col :span="12" class="address-right">
						{{address.phone}}
					</el-col>
				</el-row>
				<el-row class="address-content">
					<el-col>
						<span 
						v-if="address.id == thisDefaultAddress && !edit" 
						class="default-address">[默认地址]</span>{{address.area.replace(/\s/g, "")}}{{address.detailed}}
					</el-col>
				</el-row>
				<el-row v-if="edit" class="address-footer">
					<el-col :span="12" class="address-left">
						<el-radio text-color="#00FF00" class="radio" v-model="thisDefaultAddress" :label="address.id">{{address.id == thisDefaultAddress? '默认地址':'设为默认'}}</el-radio>
					</el-col>
					<el-col :span="12" class="address-right">
						<span @click="modifyAddress(address)">
							<icon name="edit" scale="2" />
							编辑
						</span>
						<span @click="deleteAddress(address.id)">
							<icon name="delete" scale="2" />
							删除
						</span>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				thisValue: this.value,
				thisDefaultAddress: this.defaultAddress
			}
		},
		props: {
			options: [Array],
			value: [Number],
			defaultAddress: [Number],
			addressContent: '',
			edit: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			value(val) {
				this.thisValue = val;
			},
			defaultAddress(val){
				this.thisDefaultAddress = val;
			},
			thisDefaultAddress(val){
				this.$emit("on-radio-change", val);
				this.$emit("on-default-change", val);
			}
		},
		methods :{
			select(val){
				if (!this.edit) {
					this.thisValue = val;
					this.$emit("on-radio-change", val);
				}
			},
			deleteAddress(id){
				var _this = this;
				this.$vux.confirm.show({
					title: '确认删除',
					content: '是否删除此地址',
					onCancel () {},
					onConfirm () {
						_this.$emit('on-delete', id)
					}
				})
			},
			modifyAddress(address){
				this.$router.push({
					name: 'address',
					params: {
						address
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.address-box{
		padding: 10px;
		height: 100%;
		background-color: #FFF;
		.address-select{
			text-align: center;
			height: 100%;
			display: table;
			label{
				display: table-cell;
				vertical-align: middle;
			}
		}
		.address-left{
			text-align: left;
		}
		.address-right{
			text-align: right;
		}
		.address-header{
			.address-left{
				font-size: 14px;
			}
		}
		.address-content{
			padding: 10px 0;
			.default-address{
				color: #F9834A;
			}
		}
		.address-footer{
			position: relative;
			padding-top: 10px;
			.address-right{
				font-size: 14px;
				span{
					svg{
						margin-bottom: -3px;
					}
				}
				span+span{
					margin-left: 5px;
				}
			}
		}
		.address-footer::before{
			border-top: 1px solid #E5E5E5;
			content: " ";
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			width: 100%;
			height: 1px;
			color: #E5E5E5;    
			transform: scaleY(0.5);
		}
	}
	.address-active{
		position: relative;
		border-bottom: 1px solid #F1F1F1;
	}
	.address-active:active{
		background-color: #E5E5E5;
	}
	.address-not-active{
		margin-bottom: 10px;
	}
</style>