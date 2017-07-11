<template>
    <Tabbar v-model="ind">
        <TabbarItem @on-item-click="doAction(0)">
            <icon slot="icon" name="home" scale="3"></icon>
            <p slot="label">首页</p>
        </TabbarItem>
        <TabbarItem @on-item-click="doAction(1)">
            <icon slot="icon" name="sort" scale="3"></icon>
            <p slot="label">分类</p>
        </TabbarItem>
        <TabbarItem @on-item-click="doAction(2)">
            <icon slot="icon" name="cart" scale="3"></icon>
            <p slot="label">购物车</p>
        </TabbarItem>
        <TabbarItem @on-item-click="doAction(3)">
            <icon slot="icon" name="people" scale="3"></icon>
            <p slot="label">我的</p>
        </TabbarItem>
    </Tabbar>
</div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'

    export default{
       components: {
           Tabbar,
           TabbarItem
       },
       data () {
           return {
            show: false,
            ind: 0
        }
    },
    methods:{
        doAction(index) {
            this.go(index);
        },
        go(index){
            switch(index) {
                case 0:
                this.$router.push({name: 'index'});
                break;
                case 1:
                this.$router.push({name: 'sort'});
                break;
                case 2:
                this.$router.push({name: 'shopcar'});
                break;
                case 3:
                this.$router.push({name: 'my'});
                break;
            }
        }
    },
    created(){
        switch (this.$route.fullPath) {
            case '/sort':
                this.ind = 1;
            break;
            case '/shopcar':
                this.ind = 2;
            break;
            case '/my':
                this.ind = 3;
            break;
        }
    },
}
</script>

<style>
	.bottom-tabber{
        position: absolute;
        bottom: 0;
    }
    .weui-bar__item_on svg path{
        color: #09BB07;
    }
</style>