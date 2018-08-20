<template>
    <el-container>
        <el-aside width="200px">
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

    export default {
        components: {
            headTop,
            sidebar
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
        text-align: center;
        line-height: 60px;
    }
</style>