<!-- @format -->

<template>
	<div ref="scroll" class="v-scroll">
        <slot name="main"></slot>
    </div>
</template>
<script>
import PerfectScrollbar from "perfect-scrollbar";
import 'perfect-scrollbar/css/perfect-scrollbar.css'
export default {
	name: "scroll",
	data() {
		return {
			ps: null,
		};
	},
	mounted() {
		const container = this.$refs["scroll"];
		this.ps = new PerfectScrollbar(container, {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 10,
        });
        this.ps.update();
	},
	methods: {
		update() {
			this.ps.update();
		},
		destroy() {
			this.ps.destroy();
			this.ps = null;
		},
		updateTop() {
			this.ps.scrollTop = 0;
			this.update();
		},
	},
};
</script>
<style lang="less" scoped>
.v-scroll{
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
</style>
