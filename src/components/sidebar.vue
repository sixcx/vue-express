<template>
	<div class="sidebar fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="user">用户管理</el-menu-item>
						<el-menu-item index="shop">商家管理</el-menu-item>
						<el-menu-item index="food">货物管理</el-menu-item>
						<el-menu-item index="order">订单管理</el-menu-item>
						<el-menu-item index="admin">管理员管理</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		name: 'sidebar',
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>

<style lang="less" scoped>
	// @import './style/mixin';
</style>