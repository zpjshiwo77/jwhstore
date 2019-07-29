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
			sound_handler();
		});
	}//edn func

	function sound_handler() {
		if (os.weixin) {
			var wsb = window;
			if (wsb.WeixinJSBridge) {
				try {
					wsb.WeixinJSBridge.invoke("getNetworkType", {}, sound_creat);
				}
				catch (e) {
					wx.ready(sound_creat);
				}
			}
			else {
				document.addEventListener("WeixinJSBridgeReady", sound_creat, false);
			}
		} else {
			sound_creat();
		}
	}//edn func

	function sound_creat() {
		document.removeEventListener("WeixinJSBridgeReady", sound_creat);
		ibgm.init({ src: 'audio/bgm.mp3', autoplay: true });
	}//end func


	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/common/ar.png');
		loader.addImage('images/common/bgm_off.png');
		loader.addImage('images/common/bgm_on.png');
		loader.addImage('images/common/c.png');
		loader.addImage('images/common/ca.png');
		loader.addImage('images/common/close.png');
		loader.addImage('images/common/hand.png');
		loader.addImage('images/common/tips.png');
		loader.addImage('images/common/turn_lock.png');
		loader.addImage('images/common/turn_no.png');
		loader.addImage('images/common/turn_phone.png');
		loader.addImage('images/common/turn_unlock.png');
		loader.addImage('images/common/turn_yes.png');
		loader.addImage('images/loadingBox/bg.jpg');
		loader.addImage('images/loadingBox/bs.png');
		loader.addImage('images/loadingBox/logo.png');
		loader.addImage('images/loadingBox/map.png');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			load_more();
			// pageInit();
			loader = null;
		});
		loader.start();
	}//end func

	function load_more() {
		var loader = new PxLoader();
		loader.addImage('images/share.jpg');
		loader.addImage('images/smartBox/1.jpg');
		loader.addImage('images/smartBox/1.png');
		loader.addImage('images/smartBox/2.jpg');
		loader.addImage('images/smartBox/2.png');
		loader.addImage('images/smartBox/3.jpg');
		loader.addImage('images/smartBox/3.png');
		loader.addImage('images/smartBox/4.jpg');
		loader.addImage('images/smartBox/4.png');
		loader.addImage('images/smartBox/5.jpg');
		loader.addImage('images/smartBox/5.png');
		loader.addImage('images/smartBox/c1.png');
		loader.addImage('images/smartBox/c2.png');
		loader.addImage('images/smartBox/c3.png');
		loader.addImage('images/smartBox/more.png');
		loader.addImage('images/smartBox/t.png');
		loader.addImage('images/sidewayBox/1.jpg');
		loader.addImage('images/sidewayBox/2.jpg');
		loader.addImage('images/sidewayBox/3.jpg');
		loader.addImage('images/sidewayBox/w.png');
		loader.addImage('images/schoolBox/1.jpg');
		loader.addImage('images/schoolBox/2.jpg');
		loader.addImage('images/schoolBox/3.jpg');
		loader.addImage('images/schoolBox/w.png');
		loader.addImage('images/roadBox/close.png');
		loader.addImage('images/roadBox/r1.jpg');
		loader.addImage('images/roadBox/r2.png');
		loader.addImage('images/roadBox/r3.png');
		loader.addImage('images/roadBox/r4.png');
		loader.addImage('images/roadBox/r5.png');
		loader.addImage('images/roadBox/r6.png');
		loader.addImage('images/mapBox/1.png');
		loader.addImage('images/mapBox/2.png');
		loader.addImage('images/mapBox/3.png');
		loader.addImage('images/mapBox/4.png');
		loader.addImage('images/mapBox/5.png');
		loader.addImage('images/mapBox/d1.png');
		loader.addImage('images/mapBox/d2.png');
		loader.addImage('images/mapBox/d3.png');
		loader.addImage('images/mapBox/d4.png');
		loader.addImage('images/followBox/1.png');
		loader.addImage('images/followBox/2.png');
		loader.addImage('images/followBox/3.png');
		loader.addImage('images/followBox/4.png');
		loader.addImage('images/followBox/5.png');
		loader.addImage('images/followBox/6.png');
		loader.addImage('images/followBox/bg.jpg');
		loader.addImage('images/followBox/code.png');
		loader.addImage('images/followBox/contact.png');

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
	var touchStartX = 0;
	var moveX = 0;
	var map = mapBox.find(".map");
	var nowStep = "";
	var store = mapBox.find(".store");
	var sideway = mapBox.find(".sideway");
	var school = mapBox.find(".school");
	var metro = mapBox.find(".metro");
	var storeFlag = true, sidewayFlag = true, schoolFlag = true, metroFlag = true, moveFlag = true, showDirTipsFlag = true;

	var sidewayBoxSwiper, schoolBoxSwiper, smartBoxSwiper, followBoxSwiper;

	/**
	 * 页面初始化
	 */
	function pageInit() {
		SwiperInit();
		openAnime();
		eventInit();
		// DevelopTest();
		monitor_handler();
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		loadingBox.hide();
		// QABox.show();
		// showMapBox();
		setTimeout(function () {
			showSmartBox();
		}, 200)
		// followBox.show();
		// SwiperInit();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".gotoFollow").on("click", gotoFollow);
		$("#mapBox").on("click", showMapAnime);
		$("#mapBox").on("touchstart", recordStart);
		$("#mapBox").on("touchmove", moveMap);
		$(".moreBtn").on("touchend", showFollowBox);

		$(".limitBtn").on("touchend", limitClick);
	}

	/**
	 * 显示旋转的提示
	 */
	function showDirTips() {
		if (showDirTipsFlag) {
			showDirTipsFlag = false;
			timer = setTimeout(function () {
				icom.fadeOut($("#turnturnBoxLandscapeBox"));
			}, 5000);
			icom.popOn($("#turnturnBoxLandscapeBox"), {
				onClose: function () {
					clearTimeout(timer);
				}
			});
		}
	}

	/**
	 * 记录起始坐标点
	 */
	function recordStart(e) {
		touchStartX = e.originalEvent.touches[0].pageX;
	}

	/**
	 * 移动地图
	 */
	function moveMap(e) {
		if (moveFlag) {
			var dif = e.originalEvent.touches[0].pageX - touchStartX;
			touchStartX = e.originalEvent.touches[0].pageX;
			dif = parseInt(dif);
			moveX += dif;
			var unit = mapX / 3;
			moveX = moveX <= -(mapX - unit - os.windowW) + 10 ? -(mapX - unit - os.windowW) + 10 : moveX;
			moveX = moveX >= unit - 10 ? unit - 10 : moveX;
			map.css({ x: moveX });
		}
	}

	/**
	 * 显示地图页面相应模块
	 */
	function showMapAnime() {
		if (nowStep == "store" && storeFlag) {
			map.transition({ x: 0 }, 200);
			moveX = 0;
			storeFlag = false;
			store.removeClass("updowning3");
			mapBox.find(".hand1").hide();
			mapBox.find(".d4").transition({ height: "100%" }, 300);
			mapBox.find(".d1").transition({ width: "100%", delay: 300 }, 600);
			mapBox.find(".d2").transition({ width: "100%", delay: 900 }, 600);
			mapBox.find(".d3").transition({ width: "100%", delay: 1500 }, 600, function () {
				setTimeout(function () {
					mapBoxAnime("metro");
				}, 1000);
			});
		}
		else if (nowStep == "sideway" && sidewayFlag) {
			sidewayFlag = false;
			icom.popOn(sidewayBox, {
				onClose: function () {
					mapBoxAnime("school");
				}
			});
		}
		else if (nowStep == "school" && schoolFlag) {
			schoolFlag = false;
			icom.popOn(schoolBox, {
				onClose: function () {
					showSmartBox();
				}
			});
		}
		else if (nowStep == "metro" && metroFlag) {
			metroFlag = false;
			metroAnime();
		}
	}

	/**
	 * 显示SmartBox
	 */
	function showSmartBox() {
		icom.fadeIn(smartBox);
		var title = smartBox.find(".title");
		var c1 = smartBox.find(".c1");
		var c2 = smartBox.find(".c2");
		var c3 = smartBox.find(".c3");
		var ar = smartBox.find(".ar");
		var introBox = smartBox.find(".introBox");
		var moreSwiperBox = smartBox.find(".moreSwiperBox");

		var time = 800;

		title.css({ y: "0.5rem" }).transition({ opacity: 1, y: 0, delay: 300 }, time);
		c1.css({ y: "-0.5rem", x: "0.5rem" }).transition({ opacity: 1, y: 0, x: 0, delay: 300 + time }, time);
		c2.transition({ opacity: 1, delay: 300 + time }, time);
		c3.css({ y: "0.5rem", x: "-0.5rem" }).transition({ opacity: 1, y: 0, x: 0, delay: 300 + time }, time);
		ar.transition({ opacity: 1, delay: time * 1.7 }, 300, function () {
			smartBox.one("swipeup", function () {
				introBox.transition({ y: "-100%" });
				moreSwiperBox.show().css({ y: "100%" }).transition({ y: 0 });
			});
		});
	}

	/**
	 * 显示楼层页面
	 */
	function showFollowBox() {
		mapBox.hide();
		followBox.show();
		icom.fadeOut(smartBox);
	}

	/**
	 * 地铁的动画
	 */
	function metroAnime() {
		icom.popOn(roadBox, {
			onClose: function () {
				mapBoxAnime("sideway");
			}
		});

		var metro = roadBox.find(".metro");
		var station = roadBox.find(".station");
		var location = roadBox.find(".location");
		var pos = roadBox.find(".pos");

		metro.transition({ height: "16.51rem", delay: 500 }, 1500);
		location.transition({ opacity: 1, delay: 1000 }, 200);
		pos.transition({ opacity: 1, delay: 2500 });
		metro.find("img").eq(1).transition({ opacity: 0, delay: 3500 });
		station.transition({ height: "12.17rem", delay: 3500 }, 1500, 'linear', function () {
			icom.fadeIn(roadBox.find(".close"));
		});
	}

	/**
	 * 去到相应楼层
	 */
	function gotoFollow() {
		var id = $(this).attr("data-val");
		followBoxSwiper.slideTo(id);
	}

	/**
	 * Swiper初始化
	 */
	function SwiperInit() {
		sidewayBoxSwiper = new Swiper('#sidewayBoxSwiper', {
			// autoplay: true,
			// delay: 1000,
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		});

		schoolBoxSwiper = new Swiper('#schoolBoxSwiper', {
			// autoplay: true,
			// delay: 1000,
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		});

		var now = 0;
		var block = smartBox.find(".word");
		smartBoxSwiper = new Swiper('#smartBoxSwiper', {
			// autoplay: true,
			// delay: 1000,
			loop: false,
			pagination: {
				el: '.swiper-pagination'
			},
			on: {
				transitionStart: function () {
					if (smartBoxSwiper && now != smartBoxSwiper.realIndex) {
						now = smartBoxSwiper.realIndex;
						block.transition({ opacity: 0 }, 150, function () {
							block[0].src = "images/smartBox/" + (now + 1) + ".png";
						});
						block.transition({ opacity: 1, delay: 150 }, 150);
					}
				}
			}
		});

		followBoxSwiper = new Swiper('#followBoxSwiper', {
			// autoplay: true,
			// delay: 1000,
			loop: false,
			direction: "vertical",
			on: {
				transitionStart: showDirTips
			}
		});

		setTimeout(function () {
			followBox.removeClass("hide").hide();
			sidewayBox.removeClass("hide").hide();
			schoolBox.removeClass("hide").hide();
			smartBox.removeClass("hide").hide();
			smartBox.find(".moreSwiperBox").removeClass("hide").hide();
		}, 100);
	}

	/**
	 * 开场动画
	 */
	function openAnime() {
		var part1 = loadingBox.find(".part1");
		var part2 = loadingBox.find(".part2");
		var logo = loadingBox.find(".logo2");
		var baoshan = loadingBox.find(".baoshan");
		icom.fadeOut(part1);
		icom.fadeIn(logo);
		icom.fadeIn(part2, 500, function () {
			part2.transition({ scale: 2, x: "-0.8rem", y: "3rem", delay: 500 }, 1200);
			baoshan.transition({ scale: 2, x: "-0.4rem", y: "1rem", delay: 1600 }, 1500, showMapBox);
		});
	}

	/**
	 * 显示地图页面
	 */
	function showMapBox() {
		var timer = setTimeout(function () {
			icom.fadeOut(tipsBox);
			mapBoxAnime("store");
		}, 3000);
		mapBox.show();
		icom.fadeOut(loadingBox, 500, function () {
			icom.popOn(tipsBox, {
				onClose: function () {
					mapBoxAnime("store");
					clearTimeout(timer);
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
		var dialog = mapBox.find(".dialog");
		var x = dialog.width();
		var y = dialog.height();
		dialog.find("img").css({
			width: x,
			height: y
		});
	}

	/**
	 * 地图页面动画
	 */
	function mapBoxAnime(step) {
		nowStep = step;
		if (step == "store") {
			store.addClass("updowning3");
			mapBox.find(".hand1").transition({ opacity: 1 });
		}
		else if (step == "metro") {
			icom.fadeOut(mapBox.find(".dialog"));
			metro.addClass("lighting");
			mapBox.find(".hand2").transition({ opacity: 1 });
		}
		else if (step == "sideway") {
			map.transition({ x: 0 }, 200);
			moveX = 0;
			metro.removeClass("lighting");
			sideway.addClass("lighting");
			mapBox.find(".hand2").hide();
			mapBox.find(".hand3").transition({ opacity: 1 });
		}
		else if (step == "school") {
			map.transition({ x: 0 }, 200);
			moveX = 0;
			sideway.removeClass("lighting");
			school.addClass("lighting");
			mapBox.find(".hand3").hide();
			mapBox.find(".hand4").transition({ opacity: 1 });
		}
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
