$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	var loadingBox = $("#loadingBox");
	var loadPer = loadingBox.find(".perNum");
	var loadPerBar = loadingBox.find(".per");

	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	function init() {
		requestAnimationFrame(function () {
			if (os.screenProp < 0.54) articleBox.addClass("screen189");
			if (os.screenProp > 0.64) articleBox.addClass("screen159");
			load_handler();
		});
	}//edn func


	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			// load_more();
			pageInit();
			loader = null;
		});
		loader.start();
	}//end func

	function load_more() {
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');

		//实际加载进度
		loader.addProgressListener(function (e) {
			var per = Math.round(e.completedCount / e.totalCount * 50);
			loadPer.html('LOADING ' + per + '%');
			loadPerBar.css({ x: per / 100 * 4.08 + "rem" });
		});

		loader.addCompletionListener(function () {
			load_timer(50);//模拟加载进度
			loader = null;
		});
		loader.start();
	}//end func

	//模拟加载进度
	function load_timer(per) {
		per = per || 0;
		per += imath.randomRange(1, 3);
		per = per > 100 ? 100 : per;
		loadPer.html('LOADING ' + per + '%');
		loadPerBar.css({ x: per / 100 * 4.08 + "rem" });
		if (per == 100) setTimeout(pageInit, 200);
		else setTimeout(load_timer, 33, per);
	}//edn func

	//----------------------------------------页面逻辑代码----------------------------------------
	var mapBox = $("#mapBox");
	var followBox = $("#followBox");
	var roadBox = $("#roadBox");
	var sidewayBox = $("#sidewayBox");
	var schoolBox = $("#schoolBox");
	var smartBox = $("#smartBox");
	var tipsBox = $("#tipsBox");

	var mapX = 0;

	/**
	 * 页面初始化
	 */
	function pageInit() {
		// openAnime();
		eventInit();
		DevelopTest();
		monitor_handler();
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		// loadingBox.hide();
		// QABox.show();
		// showMapBox();
		SwiperInit();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".limitBtn").on("touchend", limitClick);
	}

	/**
	 * Swiper初始化
	 */
	function SwiperInit() {
		var sidewayBoxSwiper = new Swiper('#sidewayBoxSwiper', {
			autoplay: true,
			delay: 1000,
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		});

		var schoolBoxSwiper = new Swiper('#schoolBoxSwiper', {
			autoplay: true,
			delay: 1000,
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		});
	}

	/**
	 * 开场动画
	 */
	function openAnime() {
		var part1 = loadingBox.find(".part1");
		var part2 = loadingBox.find(".part2");
		var baoshan = loadingBox.find(".baoshan");
		icom.fadeOut(part1);
		icom.fadeIn(part2, 500, function () {
			setTimeout(function () {
				baoshan.transition({ scale: 4, x: "-0.8rem", y: "2rem" }, 2000, showMapBox)
			}, 500)
		});
	}

	/**
	 * 显示地图页面
	 */
	function showMapBox() {
		var timer = setTimeout(function () {
			icom.fadeOut(tipsBox);
			mapBoxAnime();
		}, 3000);
		mapBox.show();
		icom.fadeOut(loadingBox, 500, function () {
			icom.popOn(tipsBox, {
				onClse: function () {
					clearTimeout(timer);
					mapBoxAnime();
				}
			});
		});
		mapBoxInit();
	}

	/**
	 * 地图页面初始化
	 */
	function mapBoxInit() {
		mapX = os.windowH / 1217 * 1830;
		mapBox.find(".map").css({
			width: mapX,
			left: -mapX / 3
		});
	}

	/**
	 * 地图页面动画
	 */
	function mapBoxAnime() {

	}

	/**
	 * 限制点击
	 */
	function limitClick() {
		$(".limitBtn").addClass('noPointer');
		setTimeout(function () { $(".limitBtn").removeClass('noPointer') }, 500);
	}//end func

	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler() {
		//		imonitor.add({obj:$('a.btnTest'),action:'touchstart',category:'default',label:'测试按钮'});
	}//end func
});//end ready
