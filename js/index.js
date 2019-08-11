$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	var loadingBox = $("#loadingBox");
	var loadPer = loadingBox.find(".perNum");

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
		loader.addImage('images/common/ar2.png');
		loader.addImage('images/common/ar3.png');
		loader.addImage('images/common/ar4.png');
		loader.addImage('images/common/ar5.png');
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
		loader.addImage('images/loadingBox/1.png');
		loader.addImage('images/loadingBox/2.png');
		loader.addImage('images/loadingBox/3.png');
		loader.addImage('images/loadingBox/b2.png');
		loader.addImage('images/loadingBox/bg.jpg');
		loader.addImage('images/loadingBox/bs.png');
		loader.addImage('images/loadingBox/l1.png');
		loader.addImage('images/loadingBox/l2.png');
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
		loader.addImage('images/storeBox/1.png');
		loader.addImage('images/storeBox/2.png');
		loader.addImage('images/storeBox/3.png');
		loader.addImage('images/storeBox/bg.png');
		loader.addImage('images/storeBox/i.png');
		loader.addImage('images/storeBox/s.png');
		loader.addImage('images/smartIntroBox/1.png');
		loader.addImage('images/smartIntroBox/2.png');
		loader.addImage('images/smartIntroBox/3.png');
		loader.addImage('images/smartIntroBox/4.png');
		loader.addImage('images/smartIntroBox/5.png');
		loader.addImage('images/smartIntroBox/l1.png');
		loader.addImage('images/smartIntroBox/l11.png');
		loader.addImage('images/smartIntroBox/l2.png');
		loader.addImage('images/smartIntroBox/l22.png');
		loader.addImage('images/smartIntroBox/l3.png');
		loader.addImage('images/smartIntroBox/l33.png');
		loader.addImage('images/smartIntroBox/l4.png');
		loader.addImage('images/smartIntroBox/l44.png');
		loader.addImage('images/smartIntroBox/l5.png');
		loader.addImage('images/smartIntroBox/l55.png');
		loader.addImage('images/smartIntroBox/line.png');
		loader.addImage('images/smartBox/bg.jpg');
		loader.addImage('images/smartBox/d1.png');
		loader.addImage('images/smartBox/d2.png');
		loader.addImage('images/smartBox/icon.png');
		loader.addImage('images/smartBox/l1.png');
		loader.addImage('images/smartBox/l2.png');
		loader.addImage('images/smartBox/title.png');
		loader.addImage('images/sidewayBox/1.png');
		loader.addImage('images/sidewayBox/10.png');
		loader.addImage('images/sidewayBox/11.png');
		loader.addImage('images/sidewayBox/12.png');
		loader.addImage('images/sidewayBox/13.png');
		loader.addImage('images/sidewayBox/14.png');
		loader.addImage('images/sidewayBox/15.png');
		loader.addImage('images/sidewayBox/16.png');
		loader.addImage('images/sidewayBox/17.png');
		loader.addImage('images/sidewayBox/2.png');
		loader.addImage('images/sidewayBox/3.png');
		loader.addImage('images/sidewayBox/4.png');
		loader.addImage('images/sidewayBox/5.png');
		loader.addImage('images/sidewayBox/6.png');
		loader.addImage('images/sidewayBox/7.png');
		loader.addImage('images/sidewayBox/8.png');
		loader.addImage('images/sidewayBox/9.png');
		loader.addImage('images/sidewayBox/dialog.png');
		loader.addImage('images/schoolBox/1.png');
		loader.addImage('images/schoolBox/10.png');
		loader.addImage('images/schoolBox/11.png');
		loader.addImage('images/schoolBox/12.png');
		loader.addImage('images/schoolBox/13.png');
		loader.addImage('images/schoolBox/14.png');
		loader.addImage('images/schoolBox/15.png');
		loader.addImage('images/schoolBox/16.png');
		loader.addImage('images/schoolBox/17.png');
		loader.addImage('images/schoolBox/18.png');
		loader.addImage('images/schoolBox/19.png');
		loader.addImage('images/schoolBox/2.png');
		loader.addImage('images/schoolBox/3.png');
		loader.addImage('images/schoolBox/4.png');
		loader.addImage('images/schoolBox/5.png');
		loader.addImage('images/schoolBox/6.png');
		loader.addImage('images/schoolBox/7.png');
		loader.addImage('images/schoolBox/8.png');
		loader.addImage('images/schoolBox/9.png');
		loader.addImage('images/schoolBox/dialog.png');
		loader.addImage('images/roadBox/close.png');
		loader.addImage('images/roadBox/r1.jpg');
		loader.addImage('images/roadBox/r2.png');
		loader.addImage('images/roadBox/r3.png');
		loader.addImage('images/roadBox/r4.png');
		loader.addImage('images/roadBox/r5.png');
		loader.addImage('images/roadBox/r6.png');
		loader.addImage('images/roadBox/r7.png');
		loader.addImage('images/mapBox/1.png');
		loader.addImage('images/mapBox/2.png');
		loader.addImage('images/mapBox/3.png');
		loader.addImage('images/mapBox/4.png');
		loader.addImage('images/mapBox/5.png');
		loader.addImage('images/followBox/1.png');
		loader.addImage('images/followBox/2.png');
		loader.addImage('images/followBox/3.png');
		loader.addImage('images/followBox/4.png');
		loader.addImage('images/followBox/back.png');
		loader.addImage('images/followBox/bg.jpg');

		//实际加载进度
		loader.addProgressListener(function (e) {
			var per = Math.round(e.completedCount / e.totalCount * 50);
			loadPer.html('LOADING ' + per + '%');
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
		per += 1;
		per = per > 100 ? 100 : per;
		loadPer.html('LOADING ' + per + '%');
		if (per == 100) setTimeout(pageInit, 200);
		else setTimeout(load_timer, 66, per);
	}//edn func

	//----------------------------------------页面逻辑代码----------------------------------------
	var mapBox = $("#mapBox");
	var roadBox = $("#roadBox");
	var tipsBox = $("#tipsBox");
	var storeBox = $("#storeBox");
	var sidewayBox = $("#sidewayBox");
	var schoolBox = $("#schoolBox");
	var smartBox = $("#smartBox");
	var smartIntroBox = $("#smartIntroBox");
	var followBox = $("#followBox");

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

	/**
	 * 页面初始化
	 */
	function pageInit() {
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
		// followBox.show();
		// SwiperInit();
		// showSidewayBox();
		// showSchoolBox();
		// smartBoxShow();
		// smartIntroBoxShow();
		// followBoxShow();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$("#mapBox").on("click", showMapAnime);
		$("#mapBox").on("touchstart", recordStart);
		$("#mapBox").on("touchmove", moveMap);
		$(".backBtn").on("touchend", backToIndex);

		$(".limitBtn").on("touchend", limitClick);
	}

	/**
	 * 回到首页
	 */
	function backToIndex() {
		location.href = "index.html?v=" + Math.random();
	}

	/**
	 * smartBox显示
	 */
	function smartBoxShow() {
		var box1 = smartBox.find(".box1");
		var box2 = smartBox.find(".box2");
		var dialog1 = smartBox.find(".dialog1");
		var dialog2 = smartBox.find(".dialog2");
		var ar = smartBox.find(".ar");

		smartBox.show().css({ y: "100%" })
			.transition({ y: 0 });

		setTimeout(function () {
			icom.fadeIn(box1, 500, function () {
				dialog1.transition({ width: "5.38rem" }, 800);
			})
		}, 500);

		setTimeout(function () {
			icom.fadeOut(box1);
			icom.fadeIn(box2, 500, function () {
				dialog2.transition({ width: "5.38rem" }, 800);
			})
		}, 3200);

		setTimeout(function () {
			icom.fadeIn(box1);
			icom.fadeIn(ar);
			smartBox.one("swipeup", function () {
				smartBox.transition({ y: "-100%" }, function () {
					smartBox.hide();
				});
				smartIntroBoxShow();
			});
		}, 5500);
	}

	/**
	 * smart介绍页
	 */
	function smartIntroBoxShow() {
		smartIntroBoxUiInit();

		var block = smartIntroBox.find(".block");
		var ar = smartIntroBox.find(".ar");

		smartIntroBox.show().css({ y: "100%" })
			.transition({ y: 0 });

		block.each(function (index) {
			var letter1 = $(this).find(".letter1");
			var letter2 = $(this).find(".letter2");
			var icon = $(this).find(".icon");

			letter1.css({ scale: 0 }).transition({ opacity: 1, scale: 1, delay: 300 * index }, 800, function () {
				letter1.addClass("jumping");
			});
			letter2.css({ x: "-0.5rem" }).transition({ opacity: 1, x: 0, delay: 300 * index }, 800);
			icon.transition({ opacity: 1, delay: 300 * index }, 800);
		});

		setTimeout(function () {
			icom.fadeIn(ar);
			smartIntroBox.one("swipeup", function () {
				smartIntroBox.transition({ y: "-100%" }, function () {
					smartIntroBox.hide();
				});
				followBoxShow();
			});
		}, 3200);
	}

	/**
	 * smartIntroUI初始化
	 */
	function smartIntroBoxUiInit() {
		var cont = "";
		for (var i = 1; i <= 5; i++) {
			cont += '<div class="block"><img src="images/smartIntroBox/' + i + '.png" class="icon hide"><img src="images/smartIntroBox/l' + i + '.png" class="letter letter1 hide"><img src="images/smartIntroBox/l' + i + i + '.png" class="letter letter2 hide"></div>';
			if (i != 5) cont += '<img src="images/smartIntroBox/line.png" class="line">';
		}
		smartIntroBox.find(".cont").append(cont);
	}

	/**
	 * 关注页面初始化
	 */
	function followBoxShow() {
		followBox.show().css({ y: "100%" })
			.transition({ y: 0 });
		var follow1 = followBox.find(".follow1");
		var follow2 = followBox.find(".follow2");
		var follow3 = followBox.find(".follow3");
		var follow4 = followBox.find(".follow4");
		var arr = [follow1, follow2, follow3, follow4];
		var now = 0;
		var animeFlag = false;

		followBox.on("swipeup", function () {
			if (now < 3 && !animeFlag) {
				animeFlag = true;
				arr[now].transition({ y: "-100%" }, function () {
					arr[now].hide();
					animeFlag = false;
					now++;
				});
				arr[now + 1].show().css({ y: "100%" })
					.transition({ y: 0 });
			}
		})
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
			showStoreBox();
		}
		else if (nowStep == "sideway" && sidewayFlag) {
			sidewayFlag = false;
			showSidewayBox();
		}
		else if (nowStep == "school" && schoolFlag) {
			schoolFlag = false;
			showSchoolBox();
		}
		else if (nowStep == "metro" && metroFlag) {
			metroFlag = false;
			metroAnime();
		}
	}

	/**
	 * 显示周边社群
	 */
	function showSidewayBox() {
		var dialog = sidewayBox.find(".dialog");
		sidewayBox.show();
		icom.fadeOut(mapBox.find(".hand3"));
		peopleAnime("sidewayBox", 17);
		dialog.transition({ "height": "6.01rem", delay: 1500 }, 800);
		setTimeout(function () {
			icom.fadeOut(sidewayBox);
			mapBoxAnime("school");
		}, 5000);
	}

	/**
	 * 显示学校社群
	 */
	function showSchoolBox() {
		var dialog = schoolBox.find(".dialog");
		var ar = mapBox.find(".ar");
		schoolBox.show();
		icom.fadeOut(mapBox.find(".hand4"));
		peopleAnime("schoolBox", 19);
		dialog.transition({ "height": "5.9rem", delay: 1500 }, 800);
		setTimeout(function () {
			icom.fadeOut(schoolBox);
			school.removeClass("lighting");
			icom.fadeIn(ar);
			mapBox.one("swipeup", function () {
				mapBox.transition({ y: "-100%" }, function () {
					mapBox.hide();
				});
				smartBoxShow();
			});
		}, 5000);
	}

	/**
	 * 小人的动画
	 */
	function peopleAnime(box, num) {
		var ele = box == "schoolBox" ? schoolBox : sidewayBox;
		for (var i = 1; i <= num; i++) {
			var people = $("<img>", { "class": "people hide", "src": "images/" + box + "/" + i + ".png" });
			ele.append(people);
			people.css({ x: imath.randomRange(-20, 20) }).transition({ x: 0, opacity: 1, delay: imath.randomRange(0, 1000) }, 800);
		}
	}

	/**
	 * 显示商场页面
	 */
	function showStoreBox() {
		var word1 = storeBox.find(".word1");
		var word2 = storeBox.find(".word2");
		var ar = storeBox.find(".ar");
		icom.fadeIn(storeBox);
		word1.transition({ width: "100%", delay: 500 }, 1000);
		word2.transition({ width: "100%", delay: 1500 }, 1000, function () {
			icom.fadeIn(ar);
			storeBox.one("swipeup", function () {
				storeBox.transition({ y: "-100%" }, function () {
					storeBox.hide();
				})
				mapBoxAnime("metro");
			})
		});
	}

	/**
	 * 地铁的动画
	 */
	function metroAnime() {
		icom.fadeIn(roadBox);

		var metro = roadBox.find(".metro");
		var station = roadBox.find(".station");
		var location = roadBox.find(".location");
		var pos = roadBox.find(".pos");
		var point = roadBox.find(".point");
		var ar = roadBox.find(".ar");

		metro.transition({ height: "16.51rem", delay: 500 }, 1000);
		location.transition({ opacity: 1, delay: 700 }, 200);
		pos.transition({ opacity: 1, delay: 1500 });

		point.transition({ opacity: 1, delay: 2000 }, function () {
			point.addClass("lighting2");
		});

		metro.find("img").eq(1).transition({ opacity: 0, delay: 3000 });
		station.transition({ height: "12.17rem", delay: 3000 }, 1500, 'linear', function () {
			icom.fadeIn(ar);
			roadBox.one("swipeup", function () {
				roadBox.transition({ y: "-120%" }, function () {
					roadBox.hide();
				})
				mapBoxAnime("sideway");
			})
		});
	}

	/**
	 * 开场动画
	 */
	function openAnime() {
		var part1 = loadingBox.find(".part1");
		var part2 = loadingBox.find(".part2");
		var map = part2.find(".map");
		icom.fadeOut(part1);
		icom.fadeIn(part2, 500, function () {
			map.transition({ scale: 1.5, y: "1rem" }, 1500, "linear", function () {
				showMapBox();
			});
		});
	}

	/**
	 * 显示地图页面
	 */
	function showMapBox() {
		var timer = setTimeout(function () {
			icom.fadeOut(tipsBox);
			mapBoxAnime("store");
		}, 3500);
		mapBox.show();
		icom.fadeOut(loadingBox, 1000, function () {
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
			mapBox.find(".hand2").hide();
			metro.removeClass("lighting");
			sideway.addClass("lighting");
			mapBox.find(".hand3").transition({ opacity: 1 });
		}
		else if (step == "school") {
			map.transition({ x: 0 }, 200);
			moveX = 0;
			sideway.removeClass("lighting");
			school.addClass("lighting");
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
