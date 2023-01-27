<template>
    <div class="tab">
        <template v-for="data in tabList">
            {{ data }}
        </template>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['tabList'])
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>

</style>