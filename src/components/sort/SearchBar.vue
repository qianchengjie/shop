<template>
	<header class="sort-header">
	<div id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" placeholder="搜索你想要的商品" required="">
                </div>
            </form>
        </div>
	</header>
</template>

<script>
import { Search } from 'vux'
export default{
	components : {
	},
	data(){
		return{

		};
	}
}
</script>

<style>
.sort-header{
	padding: 10px;
	background-color: #F1F1F1;
	position: absolute;
	width: 100vw;
	z-index: 1;
}
.sort-header input{
	padding: 0 35px;
	border-radius: 4px;
	font-size: 1.3rem;
	width: 100%;
	border: 1px solid #EEE;
}
.sort-header span.icon{
	margin: 17.5px 10px;
	font-size: 1.5rem;
	color: #CCC;
	position: absolute;
	vertical-align: middle;
}
.sort-header span.del{
	right: 0;
	margin: 17.5px 20px;
	font-size: 1.5rem;
	color: #CCC;
	position: absolute;
	vertical-align: middle;
}
</style>