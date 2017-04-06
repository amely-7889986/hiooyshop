//javascript Document
function SuCaiJiaYuan(){
	this.init();
}
SuCaiJiaYuan.prototype = {
	constructor: SuCaiJiaYuan,
	init: function(){		
		this._initBackTop();
	},	
	_initBackTop: function(){
		var $backTop = this.$backTop = $('<div class="cbbfixed">'+
						'<a class="user cbbtn"">'+
							'<span class="user-icon"></span><div>个人中心</div>'+
						'</a>'+
						'<a class="order cbbtn">'+
							'<span class="order-icon"></span><div>我的订单</div>'+
						'</a>'+
						'<a class="shopcar cbbtn"">'+
							'<span class="shopcar-icon"></span><div>购物车</div>'+
						'</a>'+
						'<a class="gotop cbbtn">'+
							'<span class="up-icon"></span>'+
						'</a>'+
					'</div>');
		$('body').append($backTop);
		
		$backTop.click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 120);
		});
		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $backTop.css("bottom", "200") : $backTop.css("bottom", "200");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	}
	
}
var SuCaiJiaYuan = new SuCaiJiaYuan();