$(document).ready(function(){

	$('.bottom-nav li').click(function(){
		var index = $(this).index();
		contentAllHide();
		switch (index){
			case 0:

			break;
			case 1:
				var loading = weui.loading('数据加载中', {
				    className: 'custom-classname'
				});
				setTimeout(function () {
					$('.sort-content').fadeIn();
				    loading.hide(function() {
				    });
				}, 1000);
			break;
			case 2:
				var loading = weui.loading('数据加载中', {
				    className: 'custom-classname'
				});
				setTimeout(function () {
					$('.shopcart-content').fadeIn();
				    loading.hide(function() {
				    });
				}, 1000);
			break;
			case 3:

			break;
		}
		$('.bottom-nav').find('li:eq(' + index + ')').addClass('active');
	})
	function contentAllHide(){
		$('.shopcart-content').hide();
		$('.sort-content').hide();
		$('.bottom-nav').find('li').removeClass('active');
	}

	// 自适应
	(function(){
		var windowHeight = $(window).outerHeight();
		var bottomHeight = $('.bottom-nav').outerHeight();
		var sortHeaderHeight = $('.sort-header').outerHeight();
		var shopcartTopHeight = $('.shopcart-top').outerHeight();
		var shopcartBottomHeight = $('.shopcart-bottom').outerHeight();
		$('body').height(windowHeight);
		$('.content').height(windowHeight-bottomHeight);
		$('.sort-body').height(windowHeight-bottomHeight-sortHeaderHeight-shopcartBottomHeight);
		$('.shopcart-goods').height(windowHeight-bottomHeight-shopcartTopHeight-shopcartBottomHeight);
	})()

	// 分类头部搜索清除键
	$('.sort-header .del').click(function(){
		$('.sort-header input').val('').focus();
	})

	// 分类侧边栏选中分类浮动
	var sortSidebarActiveClone = $('<li class="activeClone"><a></a></li>');
	sortSidebarActiveClone.appendTo('.sort-sidebar .nav').hide();
	function sortSidebarActiveFloat(){
		var activeTop = $($('.sort-sidebar').find('.active')[0]).offset().top;
		var activeOffsetTop = activeTop-$('.sort-header').outerHeight();
		var activeOffsetBottom = $('.body').outerHeight()-activeTop-$('.sort-sidebar li').outerHeight();
		var text = $($('.sort-sidebar').find('.active')[0]).text();
		sortSidebarActiveClone.find('a').text(text);
		// 上方溢出
		if (activeOffsetTop <= 0) {
			$(sortSidebarActiveClone).css({
				position : 'absolute',
				top : 0,
				bottom : '',
				zIndex : 1
			})
			sortSidebarActiveClone.show();

		}
		// 下方溢出
		else if (activeOffsetBottom <= 0) {
			$(sortSidebarActiveClone).css({
				position : 'absolute',
				top : '',
				bottom : 0,
				zIndex : 1
			})
			sortSidebarActiveClone.show();
		} else {
			sortSidebarActiveClone.hide();
		}
	}
	$('.sort-sidebar').scroll(function(){
		sortSidebarActiveFloat();
	})
	// 给选中分类添加active
	$('.sort-content').on('click', '.sort-sidebar li', function(){
		$('.sort-sidebar li').removeClass('active');
		$(this).addClass('active');
		sortSidebarActiveFloat();

		$('.goods-list').hide();
		var loading = weui.loading('数据加载中', {
		    className: 'custom-classname'
		});
		setTimeout(function () {
			$('.goods-list').fadeIn();
		    loading.hide(function() {
		    });
		}, 500);
	})

	// 购物车商品选择
	$('.shopcart-content').on('click', '.shopcart-good-left span', function(){
		$(this).parent('div').find('input').click();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active glyphicon-ok');
			$('.shopcart-select-all span').removeClass('active glyphicon-ok');
		} else {
			$(this).addClass('active glyphicon-ok');
			var goods = $('.shopcart-goods-list').find('li');
			var flag = true;
			for (var i = 0; i < goods.length; i++){
				if (!$(goods[i]).find('input').prop('checked')){
					flag = false;
				}
			}
			if (flag) {
				$('.shopcart-select-all span').addClass('active glyphicon-ok');
			}
		}
		calPrice();
	})
	// 购物车编辑
	$('.shopcart-top').on('click', 'span.edit', function(){
		var text = $(this).text();
		var goods = $('.shopcart-goods-list').find('li');
		log(goods.length)
		if (text == '编辑') {
			$(this).text('完成');
			for (var i = 0; i < goods.length; i++){
				$(goods[i]).find('.shopcart-good-info').hide();
				$(goods[i]).find('.shopcart-good-edit').show();
			}
			$('.shopcart-bottom .all-price').hide();
		} else {
			$(this).text('编辑');
			for (var i = 0; i < goods.length; i++){
				$(goods[i]).find('.shopcart-good-info').show();
				$(goods[i]).find('.shopcart-good-edit').hide();
			}
			$('.shopcart-bottom .all-price').show();
			calPrice()
		}
	})
	// 购物车数量编辑
	$('.shopcart-goods-list').on('click', '.amount-edit .amount-add,.amount-edit .amount-minus', function(){
		var amount = Number($(this).parents('li').find('.amount-edit .amount').text());
		if ($(this).hasClass('amount-add')){
			amount++;
		} else {
			if (amount == 1){
				if (delGood(this)){
					return;
				}
			} else {
				amount--;
			}
		}
		setAmount(this, amount);
	})

	$('.shopcart-goods-list').on('click', '.amount-edit .amount',function(){
		var obj = this;
		weui.dialog({
		    title: '输入数量',
		    content: '<input id="input_amount" class="weui-input"  type="number" style="color: #000;border: 0;border-bottom:1px solid #CCC;width: 40%;text-align:center;overflow:hidden;"placeholder="请输入数量">',
		    className: 'custom-classname',
		    buttons: [{
		        label: '取消',
		        type: 'default',
		        onClick: function () {
				}
		    }, {
		        label: '确定',
		        type: 'primary',
		        onClick: function () {
		        	var amount = $('body').find('#input_amount').val();
		        	var reg = /^([0-9]{1,5})$/;
		        	if (!reg.test(amount) || amount == 0){
						weui.topTips('请填写正确的数量');
		        	} else {
		        		setAmount(obj, amount);
		        	}
		        }
		    }]
		});
		$('body').find('#input_amount').focus();
	})
	function setAmount(obj, amount){
		$(obj).parents('li').find('.amount-edit .amount').text(amount);
		$(obj).parents('li').find('.shopcart-good-info .amount').text('x'+amount);
	}
	function calPrice(){
		var goods = $('.shopcart-goods-list').children('li');
		var allPrice = Number(0);
		for (var i = 0; i < goods.length; i++){
			if ($(goods[i]).find('input').prop('checked')){
				var amount = Number($(goods[i]).find('.shopcart-good-info').find('.amount').text().substring(1, $(goods[i]).find('.shopcart-good-info').find('.amount').text().length));
				var price = Number($(goods[i]).find('.shopcart-good-info').find('.price').text().substring(2, $(goods[i]).find('.shopcart-good-info').find('.price').text().length));
				allPrice += amount*price;
			}
		}
		$('.all-price .price').text('¥'+allPrice.toFixed(2))
	}
	//商品删除操作
	$('.shopcart-goods-list').on('click', ' .shopcart-good-edit .del', function(){
		delGood(this)
	})
	function delGood(obj){
		var flag = true;
		weui.confirm(
			'是否删除此商品',
			function(){
			 	//yes
				$(obj).parents('li').remove();
			},
			function(){
				//no
				flag = false;
			}
		);
		return flag;
	}
	//购物车全选操作
	$('.shopcart-select-all span').click(function(){
		var goods = $('.shopcart-goods-list').find('li');
		var flag = true;
		for (var i = 0; i < goods.length; i++){
			if (!$(goods[i]).find('input').prop('checked')){
				$(goods[i]).find('.shopcart-good-left span').click();
				flag = false;
			}
		}
		if (flag){
			$(this).removeClass('active glyphicon-ok');
			for (var i = 0; i < goods.length; i++){
				if ($(goods[i]).find('input').prop('checked')){
					$(goods[i]).find('.shopcart-good-left span').click();
					flag = false;
				}
			}
		} else {
			$(this).addClass('active glyphicon-ok');
		}
		calPrice();
	})
	calPrice()
	function log(str){
		console.log(str);
	}
})