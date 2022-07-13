<template>
    <div class="express">
        <div>
            <el-form :model="form" ref="form" :rules="rules">
                <el-row style="display:flex;justify-content:center">
                    <el-col :span="20">
                        <el-form-item prop="number" required>
                            <el-input v-model="form.number" placeholder="请输入快递号"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="display:flex;justify-content:center">
                    <el-col :span="20">
                        <el-form-item prop="code">
                            <el-select v-model="form.code" placeholder="请选择快递">
                                <el-option
                                    v-for="(item, index) in expressList"
                                    :key="index"
                                    :value="item.code"
                                    :label="item.name"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="text-align:center">
                    <el-button type="primary" size="medium" @click="fetchExpressLog"
                        >查询</el-button
                    >
                </el-row>
            </el-form>
        </div>
        <div class="content">
            <div v-for="(item, index) in locationList" :key="index">
                <div>{{ item.location }}{{ item.time }}</div>
                <div>{{ item.context }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { expressList } from '../../utils/constants';

export default {
    data() {
        return {
            form: {},
            expressList,
            rules: {
                number: [{ required: true, message: '请输入', trigger: 'blur' }],
                code: [{ required: true, message: '请选择', trigger: 'blur' }]
            },
            locationList: []
        };
    },
    methods: {
        fetchExpressLog() {
            this.$refs.form.validate(val => {
                if (val) {
                    location.href = `//www.kuaidi100.com/query?type=${this.form.code}&postid=${this.form.number}`;
                }
            });
        }
    }
};
</script>
<style lang="scss">
body {
    height: 100%;
}
</style>
<style lang="scss" scoped>
.express {
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div {
        padding: 1rem;
    }
    .content {
        height: 100%;
        overflow: scroll;
        > div {
            padding-bottom: 1rem;
        }
    }
    .el-select {
        width: 100%;
    }
}
</style>
