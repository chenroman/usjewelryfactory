var ProductDetails = {
	CountPics: "",
	CurrentPicNum: 1,
	Init: function () {
		$(window).load(function() {
			$('#slider').nivoSlider();
		});
		
		$(document).ready(function() {
			$("#ddmenu ul li").hover(function() {
				$("#ddmenu ul li").removeClass('over');
				$(this).addClass('over');
			}, function() {
				$("#ddmenu ul li").removeClass('over');
			});
			//search
			$('.searchbox').on('click', function() {
				
			});
			//count pics
			ProductDetails.CountPics = $('.thumb_pic img').length;
			//zoom view 
			$(".thumb_pic").click(function () {
				ProductDetails.LoadPic(this);
			});
			$(".zoomview").click(function() {
				$(this).next(".thumb_pic").click();
			});
			//prev zoom view
			$(".prev_view").click(function() {
				ProductDetails.LoadPicPrev();
			});
			//next zoom view
			$(".next_view").click(function() {
				ProductDetails.LoadPicNext();
			});
			//tabs
			
		});
	},
	LoadPic: function(elem) {
		var currentImgUrl = $('.zoom_view img').attr('src');
		var src = $(elem).find('img').attr('src');
		
		if (src && src != currentImgUrl) {
			$('.zoom_view img').fadeOut(function() {
				$('.zoom_view img').attr('src', src);
				$('.zoom_view img').fadeIn();
			});
			ProductDetails.CurrentPicNum = $(elem).find('img').attr('pic_num');
		}
	},
	LoadPicNext: function () {
		var currentImgUrl = $('.zoom_view img').attr('src');
		var next_num = (ProductDetails.CurrentPicNum >= ProductDetails.CountPics) ? 1 : parseInt(ProductDetails.CurrentPicNum) + 1;
		ProductDetails.CurrentPicNum = next_num;
		var img_src = $(".thumb_pic img[pic_num = " + next_num + "]").attr("src");
		if (img_src) {
			$('.zoom_view img').fadeOut(function() {
				$('.zoom_view img').attr('src', img_src);
				$('.zoom_view img').fadeIn();
			});
		}
	},
	LoadPicPrev: function() {
		var currentImgUrl = $('.zoom_view img').attr('src');
		var next_num = (ProductDetails.CurrentPicNum == 1) ? ProductDetails.CountPics : parseInt(ProductDetails.CurrentPicNum) - 1;
		ProductDetails.CurrentPicNum = next_num;
		var img_src = $(".thumb_pic img[pic_num = " + next_num + "]").attr("src");
		if (img_src) {
			$('.zoom_view img').fadeOut(function() {
				$('.zoom_view img').attr('src', img_src);
				$('.zoom_view img').fadeIn();
			});
		}
	},
	ChangeTab: function(tab_num) {
		$(".ebaytab.tabactive").removeClass("tabactive").addClass("tabinactive");
		$("#tab" + tab_num).addClass("tabactive").removeClass("tabinactive");
		$("#content div").hide();
		$("#content" + tab_num).fadeIn();
	}
};

ProductDetails.Init();