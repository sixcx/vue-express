<template>
    <el-menu class="header" mode="horizontal">
		<div class="icon" @click="toggleSideBar">
			<i class="el-icon-menu"></i>
		</div>
		<el-breadcrumb class="breadcrumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="right">
			<div @click="fullScreen">
				<el-tooltip content="全屏" placement="bottom">
					<i class="el-icon-rank"></i>
				</el-tooltip>
			</div>
			<div class="message">
				<el-badge :value="2" :max="99" class="item">
					<el-tooltip content="通知" placement="bottom">
					<i class="el-icon-bell"></i>
					</el-tooltip>
				</el-badge>
			</div>
			<el-dropdown trigger="click" placement='bottom'>
				<span class="el-dropdown-link">
					吴彦祖<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
					<el-dropdown-item>狮子头</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
    </el-menu>
</template>

<script>
	import * as avator from "@/assets/logo.png"
	import { mapGetters } from 'vuex'
	import screenfull from 'screenfull'

    export default {
		name: 'headTop',
		data() {
			return {
				isFullscreen: false
			}
		},
		computed: {
			...mapGetters([
				'sidebar'
			])
		},
		methods: {
			toggleSideBar() {
      			this.$store.dispatch('toggleSideBar')
			},
			fullScreen() {
			if (!screenfull.enabled) {
				this.$message({
					message: '你的浏览器不支持',
					type: '警告'
				})
				return false
			}
				screenfull.toggle()
			}
		}
    }
</script>

<style lang="less">
    .header{
		background-color: #fff;
		height: 60px;
		line-height: 60px;
		// display: flex;
		// justify-content: space-around;
		// align-items: center;
		// padding-left: 20px;
	}
	.avator{
        width: 36px;
        height: 36px;
		border-radius: 50%;
		margin-right: 37px;
	}
	.icon {
		display: inline-block;
		margin-right: 15px;
		i {
			cursor: pointer;
		}
	}
	.breadcrumb {
		display: inline-block;
	}
	.el-dropdown-menu__item{
        text-align: center;
	}
	.right {
		div {
			display: inline-block;
			margin: 0 5px;
		}
		.el-icon-bell, .el-icon-rank {
			font-size: 20px;
			cursor: pointer;
		}
	}
	.el-badge__content{
		top: 15px !important;
	}
	.el-dropdown {
		cursor: pointer;
	}
</style>

