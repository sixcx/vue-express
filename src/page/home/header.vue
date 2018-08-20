<template>
    <el-menu class="header">
		<div class="icon" @click="toggleSideBar">
			<i class="el-icon-menu"></i>
		</div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
    </el-menu>
</template>

<script>
	import * as avator from "@/assets/logo.png"
	import { mapGetters } from 'vuex'

    export default {
		name: 'headTop',
		computed: {
			...mapGetters([
				'sidebar'
			])
		},
		methods: {
			toggleSideBar() {
      			this.$store.dispatch('toggleSideBar')
    		}
		}
    }
</script>

<style lang="less">
    .header{
		background-color: #fff;
		height: 60px;
		display: flex;
		// justify-content: space-between;
		align-items: center;
		// padding-left: 20px;
	}
	.avator{
        width: 36px;
        height: 36px;
		border-radius: 50%;
		margin-right: 37px;
	}
	.icon {
		margin-right: 15px;
		i {
			cursor: pointer;
		}
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>

