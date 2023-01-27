<template>
    <div class="header">
        <div class="appTitle">
            <img src="../../assets/image/titleImg.jpg" alt="">
            <span>vue+element</span>
        </div>
        <div class="usernameTitle">
            <el-avatar :size="40" :src="avatar"></el-avatar>
            <p>{{ username }}</p>
        </div>
    </div>
</template>

<script>
import avatar from '../../assets/image/avatar.png'
export default {
    data() {
        return {
            avatar,
            username: 'admin',
        }
    },
    mounted() {
        let username = localStorage.getItem('username')
        this.username = Object.freeze(username)
    },
}
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.appTitle {
    display: flex;
    align-items: center;
    img {
        height: 90%;
        margin-right: 10px;
    }
    span {
        font-size: 24px;
        font-weight: 900;
    }
}
.usernameTitle {
    display: flex;
    align-items: center;
    .el-avatar {
        margin-right: 10px;
    }
}
</style>