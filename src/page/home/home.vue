<template>
    <el-container>
        <el-aside v-if="sidebar.opened" width='180px'>
            <sidebar></sidebar>
        </el-aside>
        <el-aside v-else width='64px'>
            <sidebar></sidebar>
        </el-aside>
        <el-container>
            <el-header>
                <head-top></head-top>
            </el-header>
        </el-container>
    </el-container>
</template>

<script>
    import headTop from './header.vue'
    import sidebar from './sidebar.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            headTop,
            sidebar
        },
        computed: {
			...mapGetters([
				'sidebar'
			])
		}
    }
</script>
        
<style lang="less">
    .el-container {
        height: 100%;
    }
    .el-header, .el-footer {
        background-color: #fff;
        color: #333;
        // text-align: center;
        line-height: 60px;
    }
</style>