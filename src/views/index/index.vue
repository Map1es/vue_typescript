<template>
	<section class="home-index">
		<div class="title">首页</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
	created() {
		//
	}

	mounted() {
        //
  }

	// 初始化函数
	init() {
		//
	}
}
</script>

<style lang="scss" scoped>
.home-index {
	.title {
		font-size: vw(28px);
		color: #fff;
		background-color: aquamarine;
		height: vw(90px);
	}
	.squary {
		@include headerImg(750vw);
	}
}
</style>

