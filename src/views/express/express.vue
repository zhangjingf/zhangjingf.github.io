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
                                <el-option v-for="(item, index) in expressList" :key="index" :value="item.code" :label="item.name">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="text-align:center">
                    <el-button type="primary" size="medium" @click="fetchExpressLog">查询</el-button>
                </el-row>
            </el-form>
        </div>
        <div class="content"></div>
    </div>
</template>
<script>
import {expressList} from '../../utils/constants';
import axios from 'axios';
export default {
    data() {
        return {
            form: {},
            expressList: expressList,
            rules: {
                number: [{ required: true, message: '请输入', trigger: 'blur' }],
                code: [{ required: true, message: '请选择', trigger: 'blur' }]
            }
        };
    },
    methods: {
        fetchExpressLog() {
            this.$refs['form'].validate(val => {
                if (val) {
                    axios.get(`http://www.kuaidi100.com/query?type=${this.form.code}&postid=${this.form.number}`).then(res => {
                        console.log(res);
                    })
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.express {
    padding: 1rem;
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    .content {
        height: 100%;
        overflow: scroll;
    }
    .el-select {
        width: 100%;
    }
}
</style>