
const state = {
	selectAll: false,
	
	cartList: [{
			id: 1,
			name: '原拆有测 For 6代手机 尾插排线 充电数据耳机送话器排线 白色',
			price: 19.50,
			amount: 2,
			stock: 10,
			select: false,
			deli: 0.00,
			cell: 3,
			stock: 10,
			sort: ['颜色','型号'],
			pics: [
				{
					src: 'https://cbu01.alicdn.com/img/ibank/2016/964/370/2964073469_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
				},
				{
					src: 'https://cbu01.alicdn.com/img/ibank/2015/512/396/2458693215_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
				},
				{
					src: 'https://cbu01.alicdn.com/img/ibank/2015/632/408/2462804236_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
				},
			]
		}
		]
	}

// getters
const getters = {
	cartList: state => state.cartList,
	selectAll: state => state.selectAll
}

// mutations
const mutations = {
	updateSelectAll (state, selectAll) {
    	// 判断是否全部选中商品
    	var flag = true;
    	for (var cart of state.cartList)　{
    		if (!cart.select) {
    			flag = false;
    		}
    	}
    	var oldVal = state.selectAll;
    	// 全选
    	if ( selectAll ) {
    		for (var cart of state.cartList)　{
    			cart.select = true;
    		}
    	} else if( !selectAll && oldVal && flag){
    		for (var cart of state.cartList)　{
    			cart.select = false;
    		}
    	}
    	state.selectAll = selectAll;
    },
    removeCart (state, id){
    	var index = 0;
    	for (var cart of state.cartList) {
    		if (id === cart.id) {
    			state.cartList.splice(index, 1)
    		}
    		index++;
    	}
    },
    addCart (state, id){
    	var cart = {
            id: 1,
            name: '原拆有测 For 6代手机 尾插排线 充电数据耳机送话器排线 白色',
            price: 19.50,
            amount: 1,
            stock: 10,
            select: false,
            deli: 0.00,
            cell: 3,
            stock: 10,
            sort: ['颜色','型号'],
            pics: [
                {
                    src: 'https://cbu01.alicdn.com/img/ibank/2016/964/370/2964073469_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
                },
                {
                    src: 'https://cbu01.alicdn.com/img/ibank/2015/512/396/2458693215_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
                },
                {
                    src: 'https://cbu01.alicdn.com/img/ibank/2015/632/408/2462804236_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
                },
            ]
        }
    	var isNotExist = true;
    	var ind = 0;
    	for (var cart of state.cartList) {
    		if (id === cart.id) {
    			state.cartList[ind].amount = state.cartList[ind].amount+1;
    			isNotExist = false;
    		}
    		ind++;
    	}
    	if (isNotExist) {
    		state.cartList.push(cart)
    	}
    },
}

export default {
	state,
	getters,
	mutations
}
