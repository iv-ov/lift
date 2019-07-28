<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">{{label}}</div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"><slot /></div>
        </el-col>
    </el-row>
</template>

<script>
import { scrypt } from 'crypto';

export default {
    props: ['label'],
}
</script>