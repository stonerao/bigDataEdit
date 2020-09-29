<template>
    <div class="e-apps">
        <div class="e-app" v-for="(item, index) in items" :key="index">
            <div class="e-app-name">
                {{item.name}}
            </div>
            <div class="e-app-items">
                <ul>
                    <li v-for="com in item.children" :key="com.id">
                        <div class="e-item-icon">
                            <i></i>
                        </div>
                        <div  class="e-item-name">
                            {{com.name}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import comConfigs from '../config';
export default {
    data() {
        return {
            items: comConfigs
        }
    },
    created() {
        console.log(comConfigs)
    }
}
</script>
<style lang="less" scoped>
.e-apps {
    
}
</style>