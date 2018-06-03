<template>
	<!-- //判断他有没有children的，
	//设置点击事件，传的参数就是这个层级的link链接
	//动态绑定name属性 -->
	<menu-item v-if="item.children===undefined" style="cursor:pointer" @click="emitclick(item.link)" :name="item.name">{{item.name}}</menu-item>
	
	<submenu :name="index" v-else>
	<template slot="title">
		{{item.name}}
	</template>
		<menu-item v-for="item in item.children" style="cursor:pointer" @click="emitclick(i.link)" :name="i.name">{{i.name}}</menu-item>
	</submenu>
</template>

<script>
	export default {
		methods: {
			//传给子组件
			props:{
				item: {
					type:Object,
					default: () => {
						return {}
					}
				},
				index: {
					type:Number,
					default:0
				}
			},
			emitclick(link) {
				this.$emit('emitclick',link)
			}
		}
	}
</script>

<style>
</style>