<template>
    <div class="login">
        <div class="form_div">
            <el-button type="text" class="go_login_form" @click="formType = !formType">
                {{ formType? 'sign up': 'sign in' }}
                <i class="el-icon-right el-icon--right"></i>
            </el-button>
            <el-form :model="formData" ref="sign_in_form" :rules="rules" key="sign_in_form" v-if="formType">
                <p class="login_title">Sign Form</p>
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="formData.username" placeholder="请输入用户名"
                        @keyup.enter.native="signIn" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="iconfont icontianchongxing-1" v-model="formData.password"
                        @keyup.enter.native="signIn" :type="!passwordView ? 'password' : 'text'" placeholder="请输入密码">
                        <span slot="suffix"
                            :class="['passwordView', 'iconfont', !passwordView ? 'iconyanjing-guan' : 'iconyanjing_kai',]"
                            @click="passwordView = !passwordView"></span>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login_box">
                        <el-button class="login_button" type="primary" @click="signIn">sign In</el-button>
                        <transition name="signIn">
                            <p class="login_p" v-if="loginPrompt">用户名或密码错误</p>
                        </transition>
                    </div>
                </el-form-item>
            </el-form>
            <el-form :model="formDataUp" ref="sign_up_form" :rules="rulesUp" key="sign_up_form" v-else>
                <p class="logup_title">Sign Form</p>
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" @keyup.enter.native="signUp" v-model="formDataUp.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="iconfont icontianchongxing-1" @keyup.enter.native="signUp" v-model="formDataUp.password"
                        :type="!passwordViewUp ? 'password' : 'text'" placeholder="请输入密码">
                        <span slot="suffix"
                            :class="['passwordView', 'iconfont', !passwordViewUp ? 'iconyanjing-guan' : 'iconyanjing_kai',]"
                            @click="passwordViewUp = !passwordViewUp"></span>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="textarea" rows="2" placeholder="备注" @keyup.enter.native="signUp" v-model="formDataUp.remarks" resize="none" />
                </el-form-item>
                <el-form-item>
                    <div class="logup_box">
                        <el-button class="logup_button" type="primary" @click="signUp">sign Up</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formType: true,
            formData: {
                username: "admin",
                password: "admin",
            },
            rules: {
                username: [
                    { required: true, message: '请输入名称', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            },
            rulesUp: {
                username: [
                    { required: true, message: '请输入名称', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            },
            formDataUp: {
                username: "",
                password: "",
                remarks: ""
            },
            loginPrompt: false,
            passwordView: false,
            passwordViewUp: false,
        };
    },
    created() {
        let username = localStorage.getItem('username')
        if(username) this.$router.push({name: 'index'})
    },
    methods: {
        signIn() {
            axios.get('/api/userList').then(res => {
                this.$refs.sign_in_form.validate((valid) => {
                    if (valid) {
                        let { username, password } = this.formData
                        let user = res.filter(v => (v.username === username && v.password === password))[0]
                        if (user) {
                            localStorage.setItem('username', username)
                            this.$router.push({name: 'index'})
                            this.loginPrompt = false
                        } else {
                            this.loginPrompt = true
                        }
                    } else return false
                })
            })
        },
        signUp() {
            this.$refs.sign_up_form.validate((valid) => {
                if (valid) {
                    let { username, password, remarks } = this.formDataUp
                    axios.post('/api/setUser', { username, password, remarks }).then(res => {
                        if (res.status) {
                            alert(res.msg)
                        } else {
                            this.$message.success('注册成功');
                            this.formType = true
                        }
                    })
                } else return false
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.login {
    background-image: url("@/assets/image/login-background.gif");
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form_div {
    width: 50%;
    position: relative;
}

.go_login_form {
    position: absolute;
    right: 15px;
    top: 0%;
}

.el-form {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba($color: #fff, $alpha: 0.4);
    border-radius: 10px;
    padding-bottom: 40px;

    ::v-deep .el-form-item {
        width: 50%;
        margin: 22px auto;

        &__label {
            color: #000;
        }
    }

    .login_button,
    .logup_button {
        width: 100%;
    }

    .login_title,
    .logup_title {
        text-align: center;
        color: #fff;
        font-size: 35px;
        font-weight: 900;
        margin-top: 22px;
    }
}

::v-deep .iconfont {
    margin-left: 4px;
}

.passwordView {
    cursor: pointer;
}


.login_box,
.logup_box {
    position: relative;
}

.login_p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #F56C6C;
}

.signIn-enter,
.signIn-leave-to {
    transform: translate(-50%, -10px);
    opacity: 0;
}

.signIn-enter-active,
.signIn-leave-active {
    transition: all .3s;
}

.signIn-enter-to,
.signIn-leave {
    transform: translate(-50%, 0);
    opacity: 1;
}
</style>