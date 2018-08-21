<template>
	<div class="sidebar fillcontain">
		<el-menu 
			:default-active="$route.path" 
			background-color="#324057" 
			style="min-height: 100%;"
			router
			text-color='rgb(191, 203, 217)'
			:collapse="isCollapse"
			>
			<el-menu-item index="/">
				<i class="el-icon-menu"></i>
				<template slot="title">
					<span slot="title">首页</span>
				</template>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-document"></i>
					<span slot="title">数据管理</span>
				</template>
				<el-menu-item index="user">用户管理</el-menu-item>
				<el-menu-item index="shop">商家管理</el-menu-item>
				<el-menu-item index="food">货物管理</el-menu-item>
				<el-menu-item index="order">订单管理</el-menu-item>
				<el-menu-item index="admin">管理员管理</el-menu-item>
			</el-submenu>
		</el-menu>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'

    export default {
			name: 'sidebar',
			computed: {
				...mapGetters([
					'sidebar'
				]),
				isCollapse() {
					return !this.sidebar.opened
				}
			}
    }
</script>

<style lang="less" scoped>
	// @import './style/mixin';
	.sidebar {
		width: 100%;
	}
</style>