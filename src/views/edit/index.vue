<!-- @format -->

<template>
	<div>
		<!-- 顶部操作 -->
		<div class="e-head">
			<div class="e-h-l">
				<a-button class="e-b-m" type="primary">打开</a-button>
				<span class="e-b-m e-h-b">保存</span>
				<span class="e-b-m e-h-b">另存为</span>
				<span class="e-b-m">|</span>
				<span class="e-b-m e-h-b">置顶</span>
				<span class="e-b-m e-h-b">上一层</span>
				<span class="e-b-m e-h-b">下一层</span>
				<span class="e-b-m e-h-b">置底</span>
				<span class="e-b-m">|</span>
				<span class="e-b-m e-h-b">锁定</span>
				<span class="e-b-m e-h-b">解锁</span>
			</div>
			<div class="e-h-r">
				<span class="e-b-m e-h-b">预览</span>
				<span class="e-b-m e-h-b">发布</span>
				<span class="e-b-m e-h-b">资源</span>
				<span class="e-b-m e-h-b">设置</span>
			</div>
		</div>
		<!-- 操作 -->
		<div class="e-main">
			<!-- 页面操作 -->
			<div class="e-m-left">
				<div class="e-ml-tab">
					<!-- 工程视图  组件库   组件列表 -->
					<span :style="listState == 1 ? listStyle : ''" @click="listState = 1">工程师图</span>
					<span :style="listState == 2 ? listStyle : ''" @click="listState = 2">组件库</span>
					<span :style="listState == 3 ? listStyle : ''" @click="listState = 3">组件列表</span>
				</div>
				<!-- 具体操作 -->
				<div class="e-ml-operate">
					<!-- 视图 -->
					<div class="e-ml-view p-full" v-if="listState == 1">
						view
					</div>
					<!-- 组件库 -->
					<div class="e-ml-com p-full" v-if="listState == 2">
						com
					</div>
					<!-- 组件列表  -->
					<div class="e-ml-list p-full" v-if="listState == 3">
						comlist
					</div>
				</div>
				<!-- 右键操作 -->
				<div class="e-ml-o"></div>
			</div>
			<!-- 编辑就可视区域 -->
			<div class="e-m-edit">
				<!-- 编辑可视区域 -->
				<div class="e-me-view">
					<v-scroll>
						<div slot="main" class="e-ma-view" style="width:1920px;height:1080px;"></div>
					</v-scroll>
				</div>
				<!-- 底部调节 宽高  左边  等配置 -->
				<div class="e-me-config"></div>
			</div>
			<!-- 详情 事件 -->
			<div class="e-m-right">
				<!-- tab操作 -->
				<div class="e-ml-tab">
					<!-- 基础信息  事件  高级设置 -->
					<span :style="basicState == 1 ? listStyle : ''" @click="basicState = 1">基础信息</span>
					<span :style="basicState == 2 ? listStyle : ''" @click="basicState = 2">事件设置</span>
					<span :style="basicState == 3 ? listStyle : ''" @click="basicState = 3">高级设置</span>
				</div>
				<div class="e-mr-operate">
					<!-- 配置 -->
					<div class="e-mr-info" v-if="basicState == 1"></div>
					<!-- 事件 -->
					<div class="e-mr-event" v-if="basicState == 2"></div>
					<!-- 高级 代码操作等 -->
					<div class="e-mr-opts" v-if="basicState == 3"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "edit",
	data() {
		return {
			listState: 1, // 列表状态
			basicState: 0, // 右侧基础点击
			listStyle: {
				color: "#ff5555",
			},
		};
	},
	created() {},
	methods: {
		// 左侧列表tab点击切换
		listActive(key) {
			console.log(key);
		},
	},
	watch: {
		// 点击列表tab切
		listState() {},
	},
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
