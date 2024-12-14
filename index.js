// ==UserScript==
// @name            Florr.io 汉化
// @namespace       A florr.io userjs
// @description     全面汉化 Florr.io
// @version         1.1.2
// @author          -lexiyvv, flo修仙传, Tinhone, squid233, Lucker
// @license         GPL-3.0
// @match           *://florr.io/*
// @grant           GM_setValue
// @grant           GM_getValue
// @compatible      firefox V50+
// @compatible      edge V50+
// @compatible      chrome V50+
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB2lBMVEUAAADTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbSvEbTvUbSvUbTvUbSvEbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbSvEbTvUbSvEbUvkfWwEjYwUnVv0fex03p0lXy21r331754V/y2lrp0lTdx03UvkbgyU/y21v95WL/6GP/52P95WHgyU7XwUns1Vfs1VbXwUjZwkrYwkn03mLm0mH85WLm0mL03mHfyU7742HYzZHU0cLhz2z/6GLj0m7W08TUyY3742DVvkfp1WHe28r8/f/Yz5f85GD85F/Rx4/8/P/j4NDu2WX85WHTvUb/6mTNu1erqqX7/P7c1rT332D13l6Ykm/n6Oru7ejl02/o0lTSvEbAr1A0MzBoaGp+eFvz3F/03WBUTzJPT1FvbmvHtlfx2lrOu1UsKyQaGx1eWDL54mFgWTQbHB4qKCLNu1T2313q1V1GQy0bHCCMgUH/6WSjlUhcVjPbx1j75WL03mDo0VT+6WT65GL+5mPdxk21pEaqmkL03V/75GLCsEuQgjj34GDjzliEeDNuYyuGeTSLfjZ2ay5zaC3Pu1D/6GT85mPgy1fDsUy+rErSvlL34WDr1Fb////IkFdGAAAAH3RSTlMAAAEHDAo0api0wQ9buO7+/j35BmjnefVpPua37Zf+dLW/BwAAAAFiS0dEnQa78rEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkAQgDJRPX3t0LAAACLUlEQVQ4y4VTB3cSQRC+pYYWDSkkgeQOkuMOCLdrLmAUxULU2Mt59t4LllhIuVQ1lth7y491mV1CAH3Oe/fm7cx3U78RhFWCbHaHw25Dwt8EIafL3eTxej1NbpcToQa3zx9oXiNK0agkrm0O+H21EGRrCQRjff1yXFHiaiIZCwZaVmdCrW3tqYG0hjGhgvE6eTDV3taKqv6OkD6kgZcJ1jLZUEcFgVBnaH2a1Ik8HOpkdSDU1a2ncT0Ay9nuLkAgXzg1xGwcxXUmFfahcgB/cEAD+4aNubLObdoMiFw+6KchkDMcYwm2bN22vUBIYWTHzl3wgzoadlKAK9LHAuzes3fffkIOHDx0+Aj8YSQjLgpwH+2Hp3ns+ImTpwg5febsufMFqOLCRTcF9IgyA1y6fOXqNYyv37h567YJMYtiDxLsHikOcPPO3Xv3xwgZe/Dw0WMGKEkeu+DwRhXW3PjE5JRFiDU1OTHOGlV0r6MKIGR6ZrYMmJ2Z5gYArKQgZG6e6fk5PjBIQYtUK3PGNYoXSdtMNCyCywK06YokDW7QnpSh1tNn7GkswqDoqNkgiPX8xUvLfLX0+k0lA4yaLmtQY5a3795/+Pjp8xcegC0L1p1hpq/fvv/4+eu3xV7LbN1AmCxPQizT5G6iSpwwQLlhub4DdYVyjLTZTA1pjWWpSlpO+7xqANnoZxTzNbTnhzOaTBRLilIqLiyKdYdTOb1eUdJ1SextPL3/H++/z/8P7nmbVKvpGgUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMzFUMjA6MDg6NTMtMDg6MDCgb7H/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTA4VDExOjM3OjE5LTA4OjAwqEgKbQAAAABJRU5ErkJggg==
// @downloadURL https://update.greasyfork.org/scripts/462298/Florrio%20%E6%B1%89%E5%8C%96.user.js
// @updateURL https://update.greasyfork.org/scripts/462298/Florrio%20%E6%B1%89%E5%8C%96.meta.js
// ==/UserScript==

//2024-12-14 Update: 花瓣除魔法系、ygg外全覆盖
(function () {
    'use strict';

    if (typeof (GM_getValue("customFont")) == "undefined") { //可在 储存 选项卡中更改字体与字重
        const defaultCustomFont = {
            fontFamily: 'Microsoft YaHei',
            fontWeight: '',
            fontSizeMin: 14
        }
        GM_setValue("customFont", defaultCustomFont)
    }
    const customFont = GM_getValue("customFont")
    if (typeof (GM_getValue("openCustomReloadAnimation")) == "undefined") { //可在 储存 选项卡中更改是否打开自定义再装填动画
        GM_setValue("openCustomReloadAnimation", true)
    }
    const openCustomReloadAnimation = GM_getValue("openCustomReloadAnimation")

    const size1 = 80;
    const size2 = 80;
    const size3 = (size2 - 30) / 2;
    const size4 = -(size2 - 30) / 2;
    const size1db2 = size1 / 2;
    const size2db2 = size2 / 2;
    const reloadMainImg = document.createElement('img');
    reloadMainImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB8CAMAAAB+HD/1AAAAAXNSR0IArs4c6QAAAqZQTFRFAAAA///////////////M//8z//+2//////85/////+tO//////+q///f//AP//KG//////+////c//OX//////WF/+sU//+q/+5d///3//Bi//iV/+s8//Jz///g/+EA/+6A/+MG//q4/+9H/+QL/////+UQ/+AA//Bm//WH/+cd//GA/+gp//a3/+k1/+5o/+Y2//OA//MM///v/+tL//Bb//CD//QZ/+MA//////+Q/+9s//////af/+YP//CA//Sf//////GK/P8I/+pE/+IA//KG//rZ//Bv/+YK///9//WT/+QR/f8C//GB//jC//aa/+pE/+9s/+Yg//ad//SN/f8U/+1h/+UL//J7//Sk/+gx///s//////eN//B4/+5f/+9t//Wn/+QG/f8Q/+s9//e7//eW/+QZ//B5//iw/+EH/+kz//vW//F9/+UJ/+9F/+kr/P8A/+1K/+s///KL/+MD/+o7/+UV/+s0/+5k/+MA//ST/+k3/f8A/+ci//Nh/+kw/+o2/+gn/+ow/+1c/+o6/+QE/P9w/+YW/+tL/+ck/+o//+Ya/+QA//ul//GE/+ky/+cj/v9B/+QF/v8J/+xI/+ch/+s//+tH/+QE/+k0/+cg/+QA/+US/+xK/v9T/+YW/+QG/+YW+/8A/+ku/+ce//B1/+QG/+YW/f8E/+xT/+s+/+UP/+QA/+cf/+QG/+k1/+cV/+MF/+pA/+gs/+UK//Wj/+ci/+YW/+o2/+UP/+ku/+cU/+UE/f8E/+gr/+cj/+ch/+YW/+k2/+Yb/+YW/+MF//ho/f8A/+kv/+cf/+cm/+UT/+QG/v8C/+QE/+gk/+QI/+QA/+MD/f8A/+o9/+QC/+YW/+QC/+QF/+QA/+MB/f8A/vcA/vIA/+gA/+MAXQgXyQAAAN10Uk5TAAECBAUFBwgJCw0ODxARExQUFhYXGRkeHiAiJCYoKSssLi8vMDExMTIzNTg4OTo7PT4+P0FDRkhISUxOUFJTVlpcXmBhYmNlZWVmaGlqa21tbW9wcnJ0dHR2eHh5e3t7e3x9fYGBg4WGh4qKi46PkZOVlpibnJyfn6KjpKamp6erq66xs7W1tba2t7i6urq7u7u8vb2+v7/Bw8PG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';
    const reloadProcessBarImg = document.createElement("img");
    reloadProcessBarImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAABlJREFUKFNj/Puf4T8DEYBxVCG+UKJ+8AAABz4d2ZbeQwkAAAAASUVORK5CYII=';

    let timestampForDebug = performance.timeOrigin + performance.now();

    const translate = {
        //特殊判定
        'vvyixel': 'lexiyvv',
        'floxxz': 'flo修仙传',
        'WingDinGaster': 'Gaster博士',


        'Achievements': '成就',
        'Done': '已完成',
        'Guild': '工会',
        'You don\'t have a guild yet': '你现在还没有工会',
        'Connection lost, reconnecting...': '连接丢失，正在重连……',


        //用户界面-开始
        'Ready': '启动！',
        'Connecting...': '正在连接...',
        'Logging in...': '正在登录...',
        'Loading...': '加载中...',
        'Account': '账号',
        'Changelog': '更新日志',
        'Join our Discord community!': '加入我们的Discord社区!',
        '加入我们的QQ群!': '加入我们的QQ群!',
        'Garden': '花园',
        'Desert': '沙漠',
        'Ocean': '海洋',
        'Jungle': '丛林',
        'Hel': '地狱（PvP）',




        //用户界面-设置
        'Settings': '设置',
        'Keyboard movement': '使用键盘操作',
        'Movement helper': '移动辅助箭头',
        'Show damage numbers': '显示伤害数值',
        'Chat': '聊天',
        'Hide common drops': '隐藏常见掉落',
        'Hide unusual drops': '隐藏少见掉落',
        'Screen shake': '画面抖动',
        'Auto-join squads': '自动加入小队',
        'Realm': '领域（服务器）',
        'Automatic': '自动',
        'Juliett (US)': '朱丽叶（美国）',
        'Romeo (EU)': '罗密欧（欧洲）',
        'Sierra (ASIA)': '塞拉（亚洲）',

        'Credits': '荣誉墙',
        'Special Thanks': '特别鸣谢',
        'Made by Matheus Valadares': '制作: Matheus Valadares',
        'Some icons by Lorc & Skoll from game-': '部分图标: Lorc & Skoll 来自',
        'icons.net': 'game-icons.net',
        'Some icons from twemoji.twitter.com': '部分图标: twemoji.twitter.com',
        'Some tiles by kenney.nl': '部分纹理贴图: kenney.nl',

        'Privacy Policy': '隐私策略',

        'Terms of Service': '服务条款',



        //用户界面-账号
        'Play as guest': '以游客身份游玩',
        'Sign in with Discord': '用Discord登录',
        'Sign in with Apple': '用Apple登录',
        'If you already have a guest account in this device,': '如果你在这个设备上已经有一个游客账号了，',
        'signing in will link that account and keep your progress.': '登录将会连接那个账号并保留你的进度。',
        'Linked': '已连接',
        'Logout': '退出登录',
        '(connecting)': '正在连接',
        'Guest': '游客',
        'You can choose a nickname once you link an account or get level 10.': '当连接到一个账号或达到10级时，你能选择一个昵称。',
        'You can link your account to': '你可以连接你的账号以',
        'keep your progress across devices.': '在不同设备上保持你的进度。',
        'Account ID:': '账号ID：',
        'Support PIN:': '个人身份识别码（Support PIN）:',
        '(click to show)': '（点击以显示）',
        'Save this in case you lose access to your account': '当你失去对你账户的许可时保存它',
        'Do not share your support PIN with anyone': '不要与任何人分享你的support PIN',
        'Link your account to save your progress': '连接你的账户以保存你的进度',


        //用户界面-商店
        'Shop': '商店',
        'Today\'s offers:': '今日售卖',
        'You gain stars as you watch ads, or you can': '您可以在看广告时获得星星，',
        'You gain stars as you watch ads as soon as you': '只要您获得第一个传奇花瓣，',
        'collect your first legendary petal, or you can': '您就可以在看广告时获得星星；',
        'You gain stars by completing challenges, or you can': '您可以在完成挑战时获得星星，',
        'buy some by clicking the number on the right.': '也可以点击右边的数字购买一些。',
        'I have too much money': '我有超级多的钱',
        'In case of any issues with your purchase,': '如果您的购买过程出现任何问题，',
        'please contact support@m28.io': '请联系 support@m28.io',
        'please contact our payment processor:': '请联系我们的支付处理员：',
        'support@xsolla.com or live chat at xsolla.com.': 'support@xsulla.com 或是在 xsolla.com 直播聊天。',
        'Lock': '锁定',
        'Daily Challenge': '每日挑战',
        'Challenge': '挑战',
        'Defeat these enemies:': '击败这些敌人：',
        'Challenge available': '该挑战只对',
        'for supporters only.': '支持者有效。',

        'hour': '小时',
        'hours': '小时',
        'minute': '分钟',
        'minutes': '分钟',
        'second': '秒',
        'seconds': '秒',
        ' hour': ' 小时',
        ' hours': ' 小时',
        ' minute': ' 分钟',
        ' minutes': ' 分钟',
        ' second': ' 秒',
        ' seconds': ' 秒',




        //用户界面-教程
        'Tutorial': '教程',
        'Next': '继续',
        'You must be alive to proceed in the tutorial.': '你必须存活以继续推进教程。',
        'You must be in-game for this part of the tutorial, just click the big green READY button.': '在这个部分的教程中，你必须在游戏中。要进入游戏，只要按下那个大大的、绿绿的『启动！』按钮就行了。',
        //教程-开始界面
        'You seem to be new here, let\'s get you through the basics.': '你看起来是新来的小fafa，让我们带你度过基础时期。',
        'Click READY to start.': '按下『启动！』以开始。',
        //教程-移动
        'Use your mouse to move. Your flower will automatically follow your cursor.': '使用你的鼠标以移动。你的小花花会自动跟随你的光标。',
        'You can change to keyboard movement in the settings menu.': '在设置菜单中你可以改为键盘移动。',
        'Move a little bit to proceed.': '走几步以继续。',
        //教程-敌人
        'Those insects are your enemies. Destroying them has a chance of dropping new petals.': '这些生物（除了不是红脸的花花）（英文原文是昆虫，其实不止）是你的敌人。干掉（摧毁）它们有一个掉落新花瓣的（微小的）机会。',
        'Find one and destroy it.': '找到一只并干掉。',
        'You might find helpful to hold down your left mouse button to extend your petals.': '你可能会发现长按鼠标左键扩张你的花瓣很有用。',
        //教程-掉花瓣
        'Keep destroying enemies until they drop a petal, then get close to the petal to collect it.': '一直击杀敌人直到它们掉了花瓣，然后接近花瓣掉落物（卡）以收集。\nTips: 花瓣过一段时间后会刷新消失，后期有加捡拾范围的花瓣（磁铁）和技能，10级之前一般是搞不到的。',
        //教程-装花瓣
        'If you have space in your loadout when you collect a petal, it\'ll go there, otherwise it\'ll go to your inventory.': '当你捡起花瓣时，如果你的装备栏有空卡槽，它会去那里，否则会去你的物品栏。',
        'Click the petal you just collected to equip it (or use the numeric hotkey for it).': '点击你刚刚捡起的花瓣以装备（或用数字热键）。\nTips: 你也可以通过技能加装备栏槽位，这是首选，加到10槽就满了。',
        //教程-升级
        'To level up, just keep destroying some insects.': '升级或完成成就能加技能点（TP）。要升级，只要一直击杀生物就行了。',
        //教程-天赋
        'Use this new talent point you got to unlock any talent.': '用你新获得的这个新天赋点来解锁任何天赋。',
        'Remember you need to click and HOLD to upgrade a talent.': '记住，你需要点击并长按才能升级天赋。',
        //教程-准备合成
        'Now we need to collect 5 of the same ': '现在我们需要收集5个相同的稀有度为',
        ' petals to craft an ': '的花瓣以合成一个种类相同、稀有度为',
        ' petal.': '的花瓣。',
        'Keep destroying some insects to collect a couple more petals.': '一直击杀敌人以收集更多花瓣。',
        //教程-合成
        'Now try to craft your first petal.': '现在试着合成你的第一个花瓣。',
        'Note that you might need to unequip some petals to have enough to do this craft.': '注意，你可能需要卸下一些花瓣以拥有足够的花瓣合成。',
        'You need 5 of the same petal.': '你需要5个相同的花瓣（除了 普通Common 的 基本Basic，这合不了）。',
        'Don\'t worry, we loaded the dice for this one, it will succeed.': '不用担心，我们调了这次的概率，这次会成功的。',
        //教程-结束
        'That\'s it! Remember to use the inventory to equip and unequip petals.': '好了！记得用物品栏以装备或卸载花瓣。',
        'You can click a petal to equip/unequip it.': '你能通过点击一个花瓣来装备/卸载它。',
        'Keep expanding your petal collection and good luck!': '不断扩展你的花瓣收集。另外，祝你好运！',






        //用户界面-退出游戏
        'Abandon game': '退出游戏',
        'You were destroyed by:': '您被这个生物打败了',
        'A mysterious entity': '未知生物',
        'Continue': '继续',
        'GAME OVER': '游戏结束',
        'Close': '关闭',




        //用户界面-消息栏
        'Press [ENTER] or click here to chat': '按 [ENTER] 键或点击这里聊天',
        'No one is around to hear you.': '抱歉，附近没有玩家能听到您说话',
        'You\'re doing that too much.': '您发消息的速度过于快了',
        'Joined squad.': '加入小队。',
        'Left squad.': '退出小队。',
        ' has joined the squad.': '加入了小队。',
        ' has left the squad.': '退出了小队。',




        //用户界面-挂机检查
        'AFK Check': '挂机检查',
        'Are you here?': '您还在这里吗？',
        'I\'m here': '我在',





        //用户界面-地图名称
        'Centralia': '中心之地',
        'Centralia Fields 1': '后花园 1 (石头)',
        'Centralia Fields 2': '后花园 2',
        'Centralia Fields 3': '后花园 3 (瓢虫)',
        'Centralia Fields 4': '后花园 4',
        'Centralia Fields 5': '后花园 5 (蜈蚣)',
        'Centralia Fields 6': '后花园 6 (黄蜂)',
        'Centralia Fields 7': '后花园 7 (蒲公英)',
        'Centralia Maze': '后花园迷宫',

        'Centralia Sewers 1': '后花园下水道 1 (飞蛾)',
        'Centralia Sewers 2': '后花园下水道 2 (蟑螂)',
        'Centralia Sewers 3': '后花园下水道 3 (苍蝇)',
        'Centralia Sewers 4': '后花园下水道 4 (蜘蛛)',

        'Centralia Beach': '后花园海滩',
        'East Waters 1': '东部水域 1',
        'East Waters 2': '东部水域 2',
        'East Waters 3': '东部水域 3',
        'East Waters 4': '东部水域 4 (贝壳)',
        'East Waters 6': '东部水域 6 (水蛭)',
        'Jellyfish Fields': '水母之地 (水母)',
        'Crab Kingdom': '螃蟹王国 (泡泡&螃蟹)',

        'South Desert 1': '南部沙漠 1 (沙尘暴)',
        'South Desert 2': '南部沙漠 2',
        'South Desert 3': '南部沙漠 3 (仙人掌)',
        'South Desert 4': '南部沙漠 4 (闪亮瓢虫)',
        'South Desert 5': '南部沙漠 5 (甲虫)',

        'Ant Hell 1': '火蚁地狱 (火蚁后)',
        'Ant Hell 2': '黑蚁地狱 (黑蚁后)',
        'Ant Hell 3': '白蚁地狱 (白蚁领主)',



        //用户界面-成就
        ' completed': " 已完成",
        'Reward': '奖励',
        'Track': '追踪',
        'Track automatically': '自动追踪',
        //成就-Common
        'Consolation prize': '安慰奖',
        'Fail to craft a petal and lose 4 petals.': '合成花瓣失败并失去4个花瓣。',
        'Complete the tutorial.': '完成教程。',
        //成就-Unusual
        //成就-Rare
        //成就-Epic
        //成就-Legendary
        //成就-Mythic
        //成就-Ultra
        //成就-Super




        //用户界面-仓库
        'Inventory': '仓库',
        'Drag a petal to equip it': '把花瓣拖到装备栏上来使用它',
        'Stack': '可堆叠',





        //花瓣详细介绍
        'Air': '空气',
        'It\'s literally nothing.': '只能加花花的半径。唬人/挡路/撞击流用或许能发挥出奇效？',
        'Extra radius: ': '额外半径：',



        'Amulet': '护身符',
        'Converts a percentage of overheal into shields.': '把一部分溢出的治疗转化为护盾。',
        'Overheal Conversion: ': '溢出治疗转换',



        'Ankh': '安卡',
        'An ancient relic.': '一种古老的遗物。',
        'When destroyed, will teleport the flower back to where it was destroyed.': '当被摧毁时，会把花朵传送回被摧毁的地方。',



        'Antennae': '触角',
        'Allows your flower to sense foes farther away.': '让视野更宽广。此花瓣的效果不能叠加。',
        'Extra vision: ': '额外视野：',



        'Basic': '基本',
        'A nice petal, not too strong but not too weak.': '一个不错的花瓣，不是很强，也不是很弱。',
        'Damage: ': '伤害：',
        'Health: ': '血量：',



        'Basil': '罗勒',
        'Increases all healing received.': '增加所有治疗效果。',
        'Healing bonus: ': '治疗加成：',



        'Battery': '电池',
        'Discharges electricity whenever the flower gets hit.': '在花朵受到攻击时发出电流。',
        'Charges: ': '单电池可放电次数：',



        'Blood Stinger': '血刺',
        'It really hurts, but it\'s very fragile.': '它的确打人很疼，却十分脆弱。',
        'Deals some of the damage dealt back to the flower.': '对花朵造成一部分反噬。',
        'Self Damage: ': '对自己的反伤：',



        'Bone': '骨头',
        'Sturdy.': '♥硬硬的♥（doge）',
        'Armor: ': '护甲：',



        'Bubble': '泡泡',
        'Physics are for the weak.': '弱者才遵守物理定律。（加速推进，跑图利器）',



        'Bur': '刺果',
        'Decreases armor of affected unit. Does not stack with itself.': '减少作用单位的护甲。不与其自身叠加。',



        'Bulb': '灯泡',
        'Light Bulb': '灯泡',
        'A shiny lightbulb. Draws aggro from mobs.': '吸引范围内敌对和中立生物。',
        'Radius: ': '半径：',



        'Cactus': '仙人掌',
        'Not very strong, but somehow increases your maximum health.': '花瓣本身强度不是很高，但可以增加本体血量上限。',
        'Flower Health: ': '本体血量：',



        'Card': '纸牌',
        'A playing card. Likely marked.': '一张扑克牌。似乎被动了手脚。喂，别出老千！',



        'Carrot': '胡萝卜',
        'Sturdy and reliable. Can be shot and bounces off walls.': '牢固且可靠，发射后碰到墙壁会反弹。',



        'Poker Chip': '扑克筹码',
        'Chip': '筹码',
        'ALL IN.': '孤注一掷。',



        'Claw': '爪子',
        'Deals extra damage if the victim is above 80% health.': '目标血量高于 80% 时，造成额外伤害。',
        '-50% damage vs other flowers.': '对其他玩家造成的伤害 -50%。',
        'Extra Damage: ': '额外伤害：',



        'Clover': '幸运草',
        'Increases your luck.': '提高幸运值（luck），单人不叠加，多人上限为 4.0 幸运值。',
        'Luck is used by specific petals to change their stats.': '一些特定的花瓣使用幸运值来改变它们的数据。',
        'Luck: ': '幸运：',



        'Coin': '硬币',
        'The power of capitalism compels you!': '金钱所迫！',



        'Compass': '指南针',
        'This crappy thing might to able to find something...': '这个糟糕的玩意儿可能可以找到一些东西……',



        'Corn': '玉米',
        'Takes a long time to spawn, but has a lot of health.': '冷却时间比较长，但是花瓣血量很高。',



        'Corruption': '腐化',
        'Corrupts one\'s soul, turning them against their own kind.': '腐蚀人（？）的灵魂，使他们对自己的同类产生敌意。',



        'Cotton': '棉花',
        'Absorbs damage taken by the flower.': '吸收玩家受到的伤害。（效果不明）',



        'Cutter': '齿轮',
        'A friend used to own this... now it\'s time for revenge.': '一位朋友曾经拥有这个，现在是时候为它报仇了。',
        'Increases body damage.': '增加体伤。',
        'Body Damage: ': '体伤：',



        'Dahlia': '大丽花',
        'A small amount of heal but fairly consistent.': '回血量较少，但是有三份，回复过程比较平滑。',
        'Heal: ': '治疗：',



        'Dandelion': '蒲公英',
        'Its interesting properties inhibits healing effects on affected units.': '它很有意思的功能是击中后可降低目标生物的治疗效果。',
        'Affected units have their healing reduced by 20%. Stacks with itself.': '目标生物治疗效果减少 20%，可叠加。',
        'Duration: ': '持续时间：',



        'Mark': '标记',
        'Dark Mark': '暗黑标记',
        'A dark mark that binds itself to a fallen soul.': '一个将自己束缚在堕落灵魂上的黑暗印记。',



        'Dice': '骰子',
        'Has a 5% chance of dealing 35x damage.': '有 5% 的几率造成 35倍 伤害',
        'Chance increases by 4% per point in luck.': '每点幸运值使几率加 4%。',



        'Disc': '圆盘',
        'Reduces damage taken from collisions with mobs and flowers.': '减少与生物和花朵碰撞产生的碰撞伤害。',
        'Collision Damage Resistance: ': '碰撞伤害抗性：',



        'Egg': '蛋',
        'Beetle Egg': '甲虫蛋',
        'Ant Egg': '蚂蚁蛋',
        'Something interesting might pop out of this.': '生成一只（或一些）生物。',
        'Contents: ': '孵化物：',



        'Fangs': '血牙',
        'Heals based on damage dealt by this petal.': '将该花瓣造成的伤害按比例获得治疗量。',
        'Damage Healed: ': '伤害吸血比例：',



        'Faster': '加速',
        'It\'s so light it makes your other petals spin faster.': '它太轻了，以至于——装备后可提高花瓣旋转速度。',
        'Rotation Speed:': '旋转速度增幅：',



        'Glass': '玻璃',
        'Phases through enemies.': '穿过敌人。',
        'Cannot damage enemies more often than a certain interval.': '不能在一定间隔内更频繁地伤害敌人。',
        'Interval: ': '伤害间隔：',



        'Grapes': '葡萄',
        'It goes poof. Now with a secret ingredient: poison.': '呲溜一声就飞出去了。造成伤害和毒伤，整个打出按一份算。',
        'Poison: ': '毒伤：',



        'Heavy': '重',
        'This thing is so heavy that nothing gets in the way.': '这东西太重了让什么都无法阻挡它。（这个花瓣能推动生物）',
        'Slows down petal rotation speed when equipped.': '装备后且加载完成时，会减慢花瓣的旋转速度。',



        'Honey': '蜂蜜',
        'Mobs love this. Attracts them in a large radius.': '吸引范围内生物，丢出使用。',
        'Mobs will prioritize this over flowers.': '生物会优先追逐这个花瓣。',
        'Affected units develop immunity to its effects after some time.': '被影响的生物一段时间后效果解除。',
        'Max Mob Rarity: ': '最高生物稀有度：',



        'Iris': '鸢尾',
        'Very poisonous, but takes a little while to do its work.': '造成毒伤，毒伤不可叠加。',



        'Jelly': '果冻',
        'No one likes touching this.': '弹开其他生物。',
        'Knockback: ': '击退：',



        'Leaf': '叶子',
        'Gathers energy from the sun to heal your flower passively.': 'LeaF（不是）光合作用补充血量，冷却期间亦生效。',
        'Can be eaten by friendly mobs to heal.': '也可以帮助除挖掘者外的友方生物回血（被吃掉）。',
        'Mob Heal: ': '治疗生物：',



        'Light': '轻',
        'Weaker than most petals, but recharges very quickly.': '比大部分花瓣脆弱（伤害、血量），但是冷却时间短。',



        'Lightning': '闪电',
        'Strikes several nearby enemies.': '可以导电多个邻近的生物。',
        'Lightning: ': '闪电伤害：',
        'Bounces:': '导电数量：',



        'Lotus': '莲花',
        'Absorbs poison damage taken by the flower.': '可以吸收玩家受到的毒伤。',



        'Magnet': '磁铁',
        'Increases drop pick up range.': '扩大拾取掉落物的范围。',
        'Pick up range: ': '拾取范围：',



        'Orb': '宝珠',
        'Mana Orb': '魔法宝珠',
        'Creates mana.': '创造魔法（值）。',
        'Mana: ': '魔力值：',
        'Allows finding magic petals.': '魔法之门的钥匙。允许你找到魔法花瓣。',



        'Missile': '导弹',
        'You can actually shoot this one.': '你可以把这个花瓣发射出去。',



        'Moon': '月',
        'Moon Rock': '月石',
        'This thing is so big your petals orbit it instead.': '这个东西大到能让其他花瓣围着它转。',
        'Where did you find this anyway?': '不过你是在哪里找到它的？',



        'Orange': '橘子',
        'A sweet citrus fruit.': '站在此地，不要走动。',



        'Pearl': '珍珠',
        'Just drop it off somewhere and use your kinetic powers so you don\'t lose it.': '抛出去可以随时收回来，不收回来的话，可以推着走，也可以拖着走。',



        'Peas': '豌豆',
        'It goes poof.': '呲溜一声就飞出去了。整体打出算1份。',



        'Pincer': '毒螫',
        'Debilitates enemies temporarily, reducing their movement speed.': '可以短时间麻痹敌人，降低敌人的移动速度，对贝壳也有效。',



        'Plank': '木板',
        'Does 20x damage vs projectiles and petals.': '对花瓣和飞行道具造成 20 倍伤害。',



        'Pollen': '花粉',
        'Asthmatics beware.': '当心过敏。',



        'Poo': '便便',
        'Makes mobs less likely to want to attack you.': '减少生物发现你的范围，效果不叠加。',
        'Mob aggro range: ': '生物发现范围：',



        'Privet': '女贞',
        'Privet Berry': '女贞子',
        'Deals extra ': '每秒在已存在的',
        'Poison': '剧毒',
        ' damage based on the existing ': '伤害基础上造成额外的',
        ' damage per second.': '伤害。',
        'Extra Poison: ': '额外的毒伤：',


        'Powder': '粉末',
        'Mysterious Powder': '神秘的粉末',
        'Increases movement speed.': '提高移动速度。',
        'Disabled if flower takes damage or if near a mob higher than a certain rarity.': '如果花花受到伤害或有一个稀有度高于特定值的生物在附近，它将会被禁用',
        'Movement Speed: ': '移动速度增幅：',



        'Relic': '遗物',
        'Mysterious Relic': '神秘的遗物',
        'A strange relic. Significantly increases maximum health.': '一个奇怪的遗物。显著提高生命值上限（貌似是按百分比算的？）',
        'Damage taken is spread among other wearers.': '特定范围内同时佩戴它的玩家会共享部分伤害。（搭配 闪电 等受伤时发挥作用的花瓣效果更佳）',
        '% distributed: ': '受伤分摊比例：',



        'Rice': '米',
        'Spawns very quickly, but not very strong.': '生成速度非常快，但是很脆弱。',



        'Rock': '石头',
        'Extremely durable, but takes a bit longer to recharge.': '非常耐用，稍微需要一些时间来装载。',



        'Root': '根',
        'Provides additional armor but only while in the defensive position.': '提供额外的护甲但只在防御状态生效。',
        'flower Armor: ': '花朵护甲防御值：',



        'Rose': '玫瑰',
        'Its healing properties are amazing. Not so good at combat though.': '回血效果惊艳，但战斗过程中容易被损坏。',



        'Rubber': '橡胶',
        'Increases knockback received. Also absorbs lightning damage dealt to the flower.': '增加受到的击退。也能吸收对玩家造成的闪电伤害。',



        'Salt': '盐',
        'Reflects some of the damage you take back to the enemy that dealt it.': '以特定比例反弹敌方单位对我方造成的伤害。',
        'Reflected damage is reduced by 75% against flowers.': '伤害反弹效果对其他玩家 -75%。',
        'Higher rarity mobs have higher resistance to damage reflection.': '稀有度较高的生物对伤害反弹有更高的抗性。',
        'Damage Reflection: ': '伤害反弹比例：',
        '% (vs ': '%（对抗',
        ' mobs), ': '稀有度的生物时），',
        '% (vs flowers)': '%（对抗花花时）',



        'Sand': '沙子',
        'A bunch of sand particles.': '一团沙子。',



        'Shell': '贝壳',
        'Adds a temporary shield to yourself or allies.': '给自己和其他玩家施加缓慢衰减的临时护盾。',
        'Shield: ': '护盾：',



        'Shovel': '铲子',
        'Becomes untargetable but unable to use petals for a limited time.': '在有限的时间内变得无法被攻击，但不能使用花瓣。',



        'Soil': '土',
        'Increases health, but also increases flower size and decreases movement speed.': '增加本体血量上限，增大花朵，但是会减慢移动速度，效果均可叠加。',



        'Sponge': '海绵',
        'Spreads damage taken by the flower over a period of time.': '把玩家受到的伤害分摊到一段时间内缓慢扣除。',
        'If destroyed, deals remaining damage all at once.': '如果被打破了，储存的伤害将一次性结算。',
        'Does not delay ': '不延缓',
        ' damage.': '伤害。',
        'Period: ': '周期：',



        'Square': '方块',



        'Starfish': '海星',
        'Increases health regen while below 75% health.': '生命值低于75%时开始恢复血量，冷却期间亦生效。',



        'Stick': '树枝',
        'Mysterious Stick': '神秘的树枝',
        'A mysterious stick that summons the forces of the wind.': '这个神秘的树枝可以召唤风的力量来生成沙尘暴。',
        'Spawn: ': '生成：',



        'Stinger': '刺',
        'It really hurts, but it\'s very fragile.': '伤害非常高，但是也非常脆弱。',



        'Talisman': '护符',
        'Talisman of Evasion': '闪避护符',
        'A necklace that allows the wearer to anticipate enemy attacks.': '一条项链，可以让佩戴者预测敌人的攻击。',
        'Flower Evasion: ': '闪避概率：',



        'Third Eye': '第三只眼',
        'Allows your flower to expand your petals further out.': '能使装备的花瓣进一步张开，攻击距离更远。',
        'Does not stack.': '花瓣效果不叠加。',
        'Extra range: ': '距离加成：',



        'Tomato': '番茄',
        'Gets stronger over time, but then spoils.': '成熟度越高伤害越高，但是容易腐烂。',
        'Gets stronger over time.': '成熟度越高伤害越高',



        'Uranium': '铀',
        'Periodically releases radiation in a large radius.': '周期性地释放辐射伤害，可叠加，但对自身的毒伤不叠加。',
        '-75% damage versus other flowers.': '对其他玩家的伤害-75%。',
        'Effect strength depends on distance to petal.': '影响的力度取决于到花瓣的距离。',



        'Web': '网',
        'It\'s really sticky.': '黏糊糊的，用于减速敌人。',



        'Wing': '翅膀',
        'It comes and goes.': '它飞来飞去。像回旋镖一样的翅膀。',



        'Yggdrasil': 'Yggdrasil！世界树',
        'A dried leaf from the Yggdrasil tree.': '从世界树上掉落的枯叶。',
        'Rumored to be able to bring the fallen back to life.': '据说能够让死亡的花朵复活。',
        'Revive Heal: ': '复活后血量：',



        'Yin Yang': '阴阳',
        'This mysterious petal affects the rotation of your petals in unpredictable ways.': '这个神秘的花瓣能以不可预测（真的吗）的方式改变其它花瓣的转动方式或分布形态。',



        'Yucca': '丝兰',
        'Heals your flower but only while in the defensive position.': '花朵处于防守形态时才能产生治疗效果。',




        //新版本：Talent天赋
        //用户界面-技能
        'Skills': '技能',
        'SP': '技能点',
        'Acquire more SP by ': '您可以通过',
        'absorbing': '吸收',
        ' petals to gain levels': '花瓣来提升等级，从而获得技能点',
        'HOLD to upgrade': '长按升级',
        'Reset': '重置',
        'This will refund all your SP points.': '将返还您全部技能点。',
        'WARNING:': '警告',
        'It will cost you 5 levels.': '这将使您降低5级。',
        'Cancel': '取消',
        //自己加的（适配新版本）
        'Talents': '天赋',
        'TP': '天赋点',




        //技能详细描述
        'Salvaging': '回收',

        'Petals destroyed during crafting will be absorbed for 1% of their XP.': '合成中消耗的花瓣会被吸收1%的经验。',

        'Increases the absorbed XP from petals destroyed during crafting from 1% to 2%.': '将合成中消耗花瓣被吸收经验的比例从1%提升到2%。',

        'Increases the absorbed XP from petals destroyed during crafting from 2% to 3%.': '将合成中消耗花瓣被吸收经验的比例从2%提升到3%。',

        'Increases the absorbed XP from petals destroyed during crafting from 3% to 4%.': '将合成中消耗花瓣被吸收经验的比例从3%提升到4%。',

        'Increases the absorbed XP from petals destroyed during crafting from 4% to 5%.': '将合成中消耗花瓣被吸收经验的比例从4%提升到5%。',



        'Skilled Crafting': '合成概率',

        'Increases ': '提高',
        ' to ': '→',

        ' crafting chance from 40% to 44%.': '的合成概率：40% → 44%',
        ' crafting chance from 30% to 33%.': '的合成概率：30% → 33%',
        ' crafting chance from 20% to 22%.': '的合成概率：20% → 22%',
        ' crafting chance from 10% to 11%.': '的合成概率：10% → 11%',
        ' crafting chance from 3% to 3.3%.': '的合成概率：3% → 3.3%',
        ' crafting chance from 2% to 2.2%.': '的合成概率：2% → 2.2%',
        ' crafting chance from 1% to 1.1%.': '的合成概率：1% → 1.1%',

        ' crafting chance 44% to 48%.': '的合成概率：44% → 48%',
        ' crafting chance 33% to 36%.': '的合成概率：33% → 36%',
        ' crafting chance 22% to 24%.': '的合成概率：22% → 24%',
        ' crafting chance 11% to 12%.': '的合成概率：11% → 12%',
        ' crafting chance 3.3% to 3.6%.': '的合成概率：3.3% → 3.6%',
        ' crafting chance 2.2% to 2.4%.': '的合成概率：2.2% → 2.4%',
        ' crafting chance 1.1% to 1.2%.': '的合成概率：1.1% → 1.2%',



        'Crafting': '合成能力',
        'Unlocks the ability to craft ': '解锁合成花瓣稀有度等级',
        ' petals.': '',



        'Loadout': '卡槽',

        'Enables a 6th loadout slot to equip petals.': '解锁第 6 个用于装备花瓣的卡槽',

        'Enables a 7th loadout slot to equip petals.': '解锁第 7 个用于装备花瓣的卡槽',

        'Enables a 8th loadout slot to equip petals.': '解锁第 8 个用于装备花瓣的卡槽',

        'Enables a 9th loadout slot to equip petals.': '解锁第 9 个用于装备花瓣的卡槽',

        'Enables a 10th loadout slot to equip petals.': '解锁第 10 个用于装备花瓣的卡槽',



        'Reload': '花瓣冷却',

        'Decreases the reload time for petals by -7%.': '降低花瓣冷却时间：-7%',
        'Decreases minimum reload time when swapping petals from 2.5s to 2.0s.': '花瓣切槽装载时间：2.5s → 2.0s',

        'Decreases the reload time for petals from -7% to -14%.': '降低花瓣冷却时间：-7% → -14%',
        'Decreases minimum reload time when swapping petals from 2.0s to 1.5s.': '花瓣切槽装载时间：2.0s → 1.5s',

        'Decreases the reload time for petals from -14% to -20%.': '降低花瓣冷却时间：-14% → -20%',
        'Decreases minimum reload time when swapping petals from 1.5s to 1.0s.': '花瓣切槽装载时间：1.5s → 1.0s',

        'Decreases the reload time for petals from -20% to -25%.': '降低花瓣冷却时间：-20% → -25%',
        'Decreases minimum reload time when swapping petals from 1.0s to 0.5s.': '花瓣切槽装载时间：1.0s → 0.5s',

        'Decreases the reload time for petals from -25% to -31%.': '降低花瓣冷却时间：-25% → -31%',
        'Decreases minimum reload time when swapping petals from 0.5s to 0.0s.': '花瓣切槽装载时间：0.5s → 0.0s',

        'Decreases the reload time for petals from -31% to -35%.': '降低花瓣冷却时间：-31% → -35%',

        'Decreases the reload time for petals from -35% to -40%.': '降低花瓣冷却时间：-35% → -40%',



        'Petal Rotation': '转速',

        'Increases petal ': '花瓣的',
        'Rotation Speed': '旋转速度',

        ' from 2.5 to 2.8 rad/s.': ' ：2.5 → 2.8 rad/s',

        ' from 2.8 to 3.1 rad/s.': ' ：2.8 → 3.1 rad/s',

        ' from 3.1 to 3.4 rad/s.': ' ：3.1 → 3.4 rad/s',

        ' from 3.4 to 3.7 rad/s.': ' ：3.4 → 3.7 rad/s',

        ' from 3.7 to 4 rad/s.': ' ：3.7 → 4.0 rad/s',



        'Health': '生命值',

        'Increases base ': '提高基础',
        'Flower Health': '本体血量',
        ' by 25%.': '：+25%',



        'Medic': '治疗增幅',

        'healing': '基础治疗效果',
        ' from your petals by 10%.': '：+10%',
        'Affects allies healed by your petals.': '治疗其他玩家时，此效果亦生效',



        'Summoner': '召唤师',

        ' of summoned mobs by 10%.': '：+10%，基于召唤物基础血量',



        'Sharp Edges': '体伤',

        'Body Damage': '体伤',
        ' by 20%.': '：+20%',





        //用户界面-吸收
        'Absorb': '吸收',
        'Switch': '切换',
        'Next level: +1 SP': '达到下一级：+1 技能点',
        'Absorb petals to gain XP': '吸收花瓣可获得XP',
        'WARNING: The petals will be destroyed in the process': '警告：此过程将摧毁花瓣',





        //用户界面-合成
        'Craft': '合成',
        'Combine 5 of the same petal to craft an upgrade': '合成高一级花瓣至少需要 5 个相同花瓣',
        'Failure will destroy 1-4 petals': '失败将随机摧毁 1~4 个花瓣',





        //用户界面-生物图鉴
        'Mob Gallery': '生物图鉴',





        //生物详细介绍
        'There\'s something magical about this one.': '它身上有魔力♂。（bushi',



        'Ant Egg': '蚂蚁蛋',
        'Not yet an ant but perhaps soon.': '在不久后会变成蚂蚁。',



        'Ant Hole': '蚂蚁洞',
        'Ants go in, and come out. Can\'t explain that.': '一窝蚂蚁。',



        'Baby Ant': '幼蚁',
        'Weak and defenseless, but big dreams.': '小小的蚂蚁，大大的梦想。',



        'Baby Fire Ant': '幼火蚁',
        'This ant is on fireeeeeeeeeeeeee.': '这类蚂蚁脾气比较火火火火火火火火火火火火火爆。',



        'Baby Termite': '幼白蚁',
        'These creatures appear to be connected somehow.': '这类蚂蚁似乎存在某种关联。',
        'Psyonic Connection': '命运共同体',


        'Termite Egg': '白蚁蛋',
        'Not yet a termite but perhaps soon.': '还不是白蚁但可能很快是了。',


        'Termite Mound': '白蚁窝',
        'Termites go in, and come out. Can\'t explain that.': '白蚁们进进出出。不可描述。（这是原文！你信我！）（开音趴？）',


        'Bee': '蜜蜂',
        'It stings. Don\'t touch it.': '别碰，会蛰。',



        'Beetle': '甲虫',
        'It\'s hungry and flowers are its favorite meal.': '这种饿货最喜欢吃花花。',
        'Scourge that spawns in the other plane.': '在异域生成的祸害。',

        'Bubble': '泡泡',
        'Pop': '吹弹可破。',

        'Bumble Bee': '熊蜂',
        'GOTTA RUN.': '溜了溜了。',
        'Pollen Health: ': '花粉血量：',
        'Pollen Damage: ': '花粉伤害：',
        'Missile Health: ': '自身刺血量：',
        'Missile Damage: ': '自身刺伤害：',

        'Bush': '灌木',
        'Don\'t misunderestimate me.': '不要轻敌了。',

        'Cactus': '仙人掌',
        'Avoid touching it, it hurts.': '别撞，很疼。',



        'Centipede': '蜈蚣',
        'It\'s just there doing its thing.': '花不犯它，它不犯花。',



        'Crab': '螃蟹',
        'Mr. Crab.': 'Crab先生♂',



        'Dandelion': '蒲公英',
        'Puffy.': '蓬松的花伞。',



        'Desert Centipede': '沙漠蜈蚣',
        'Gotta go fast.': '身上粉尘多，俗称泥头车。',



        'Digger': '挖掘者',
        'Wrong game, bud.': '哥们，进错游戏了。（digdig.io）（似乎喜欢挖蚁穴？）',



        'Evil Centipede': '邪恶蜈蚣',
        'This one loves flowers.': '这货喜欢（吃）花花。',



        'Fire Ant Burrow': '火蚁穴',
        'What could be in here?': '里面有什么呢？',



        'Fire Ant Egg': '火蚁蛋',
        'This ant is not yet on fire.': '此时的火蚁尚未开始躁动。',


        'Firefly': '萤火虫',
        'Oooooh shiny.': '呜哦好闪亮。',
        'Bounces: ': '反弹：',


        'Fly': '苍蝇',
        'Hzzzzzzzzzzzz.': '围着 M28 乱飞。',
        'Evasion: ': '闪避：',


        'Gambler': '赌徒',
        'This can happen to YOU.': '这会发生在『你』身上。',

        'Hornet': '黄蜂',
        'These aren\'t quite as nice as the little bees.': '这种生物可没有小蜜蜂那么友好。',



        'Jellyfish': '水母',
        'Makes the most delicious jam.': '可制作最美味的jam。',



        'Ladybug': '瓢虫',
        'Shiny, cute and mostly harmless.': '长大后会去找世界树的闪亮瓢虫。',
        'Cute and harmless.': '可爱且无邪。',
        'Cute and harmless... if left unprovoked.': '可爱且无邪……如果没有人挑衅的话。',


        'Leafbug': '木叶虫',
        'It\'s not a leaf, but it is a bug.': '这不是一片树叶，是一只虫子。',

        'Leech': '水蛭',
        'Slurp slurp.': '嘬一口。',
        'Lifesteal: ': '吸血量：',


        'Mantis': '螳螂',
        'You better pray you don\'t become dinner.': '你最好祈祷你不要成为它的大餐。',
        'Armor Debuff: ': '护甲负面效果：',


        'Moth': '飞蛾',
        'Easily scared, be nice.': '很容易受到惊吓。',



        'Queen Ant': '蚁后',
        'You must have done something really bad if she\'s chasing you.': '如果她追赶你，那一定是你干坏事惹到她了。',


        'Roach': '蟑螂',
        'Gotta go FAST... until they get tired.': '将会跑得很快……直到它们累了。',


        'Queen Fire Ant': '火蚁后',


        'Rock': '石头',
        'A rock. It doesn\'t do much.': '一块石头，里边没有猴子。',



        'Sandstorm': '沙尘暴',
        'Darude (1999)': '伤心 (1999)',



        'Scorpion': '蝎子',
        'IT STINGS!': '它的螫带毒！',
        'Missile Poison: ': '发射的螫毒伤：',



        'Shell': '贝壳',
        'Not an advertisement.': '什么？这不是广告，而是自带吸铁石的珠宝批发商。',
        'Pearl Health': '珍珠血量：',
        'Pearl Damage': '珍珠伤害：',



        'Soldier Ant': '兵蚁',
        'It\'s got wings and it\'s ready to use them.': '翅膀硬了，随时准备搞事情。',


        'Soldier Fire Ant': '兵火蚁',



        'Soldier Termite': '兵白蚁',



        'Spider': '蜘蛛',
        'Spooky.': '阴森森的。',



        'Sponge': '海绵',
        'Bob.': '宝宝。（这真的不是Pizza吗）',



        'Square': '方块',
        'This shape... it looks familiar...': '这个外形看着很熟悉...',



        'Starfish': '海星',
        'His name is Patrick.': '它的名字叫派大星。',

        'Target Dummy': '训练假人',
        'How do you have this in your gallery?': '它怎么在你的图鉴里？',

        'Termite Overmind': '白蚁领主',
        'The one who oversees all.': '注视着一切的幼白蚁。（bushi',

        'Trader': '商人',

        'Wasp': '胡蜂',
        'They are ANGRY.': '它们非常生气。',

        'Worker Ant': '工蚁',
        'It\'s a bit temperamental, probably from working all the time.': '有点喜怒无常，估计是因为一直搬砖干活。',



        'Worker Fire Ant': '工火蚁',



        'Worker Termite': '工白蚁',





        //稀有度
        'Common': '常见Common',
        'Unusual': '罕见Unusaul',
        'Rare': '稀有Rare',
        'Epic': '史诗Epic',
        'Legendary': '传奇Legendary',
        'Mythic': '神话Mythic',
        'Ultra': '究极Ultra',
        'Super': '超级Super',
        'Unique': '唯一Unique',

        ' (Common)': '（常见Common）',
        ' (Unusual)': '（罕见Unusual）',
        ' (Rare)': '（稀有Rare）',
        ' (Epic)': '（史诗Epic）',
        ' (Legendary)': '（传奇Legendary）',
        ' (Mythic)': '（神话Mythic）',
        ' (Ultra)': '（究极Ultra）',
        ' (Super)': '（超级Super）',
        ' (Unique)': '（唯一Unique）',
    }





    //获取翻译
    function getTranslate(text) {
        if (typeof (translate[text]) == 'string') { return translate[text] }
        switch (true) {
            //1.2% success chance
            case (/\S+% success chance/.test(text)): {
                const probability = text.match(/\S+(?=% success chance)/);
                return `成功率 ${probability}%`;
            }

            //Store will change in 10 hours.
            case (/Store will change in [0-9][0-9]?[0-9]? \w\w\w\w\w?\w?\w?\./.test(text)): {
                const timeNum = text.match(/(?<=Store will change in )[0-9]?[0-9]?[0-9]?(?=\s\w\w\w\w\w?\w?\w?\.)/);
                const timeUnit = text.match(/(?<=Store will change in [0-9]?[0-9]?[0-9]?\s)\w\w\w\w\w?\w?\w?(?=\.)/);
                return `货架将在 ${timeNum} ${getTranslate(timeUnit)}后刷新`;
            }

            //The Super Termite Overmind was defeated by you!
            case (/An? \w\w\w\w\w?\w?\w?\w?\w? .+ was defeated by .+!/.test(text)): {
                const mobLevel = text.match(/(?<=The\s)\w\w\w\w\w?\w?\w?\w?\w?(?=\s)/);
                const mobName = text.match(/(?<=The\s\w\w\w\w\w?\w?\w?\w?\w?\s).+(?=\swas)/);
                const playerName = text.match(/(?<=was defeated by ).+(?=!)/);
                return `${getTranslate(mobLevel)} ${getTranslate(mobName)} 已被 ${playerName} 击败！`;
            }

            //A Super Termite Overmind has spawned!
            case (/An? \w\w\w\w\w .+ has spawned!/.test(text)): {
                const mobLevel = text.match(/(?<=An?\s)\w\w\w\w\w(?=\s)/);
                const mobName = text.match(/(?<=An?\s\w\w\w\w\w\s).+(?= has spawned!)/);
                return `${getTranslate(mobLevel)} ${getTranslate(mobName)} 已在地图中生成！`;
            }

            //A Super Termite Overmind has spawned somewhere!
            case (/An? \w\w\w\w\w .+ has spawned somewhere!/.test(text)): {
                const mobLevel = text.match(/(?<=An?\s)\w\w\w\w\w(?=\s)/);
                const mobName = text.match(/(?<=An?\s\w\w\w\w\w\s).+(?= has spawned somewhere!)/);
                return `${getTranslate(mobLevel)} ${getTranslate(mobName)} 已在某个地图中生成！`;
            }

            //WingDinGaster has joined the squad.
            case (/.+ has joined the squad\./.test(text)): {
                const playerName = text.match(/.+(?= has joined the squad\.)/);
                return `${playerName} 加入了小队。`;
            }

            //WingDinGaster has left the squad.
            case (/.+ has left the squad\./.test(text)): {
                const playerName = text.match(/.+(?= has left the squad\.)/);
                return `${playerName} 退出了小队。`;
            }
        }
        return text;
    }


    //获取可操作的 Canvas，避免出现浏览器不兼容情况
    function getCompatibleCanvas() {
        if (typeof (OffscreenCanvasRenderingContext2D) == 'undefined') { return [CanvasRenderingContext2D] }
        return [OffscreenCanvasRenderingContext2D, CanvasRenderingContext2D];
    }


    //普通的日志输出，但加入了防止过快输出的措施
    function consoleTextInfoLog(string) {
        if ((performance.timeOrigin + performance.now()) - timestampForDebug >= 2333) {
            timestampForDebug = performance.timeOrigin + performance.now();
            console.log(string);
        }
    }


    //当被查找的字符串中含有目标字符串，弹出警告
    function alertTargetStr(searchStr, targetStr) {
        if (searchStr.search(targetStr) > -1) {
            alert(searchStr);
        }
    }


    //获取模糊化的字体大小 | 主要用来避免花瓣上小字的字体大小会在小幅度内变动的情况，让它好看一点
    function getBlurFontSize(str) {
        return ~~((~~(str.match(/(?<!.)[0-9][0-9]?[0-9]?[0-9]?/)) + 3.5) / 5) * 5 - 1; //正则表达式需要注意存在小数情况
    }


    //获取可应用的字体字符串
    function getApplicableFontStr(fontSize) {
        return `${customFont.fontWeight} ${(fontSize > customFont.fontSizeMin ? fontSize : customFont.fontSizeMin)}px ${customFont.fontFamily}`;
    }


    //初始化
    for (const { prototype } of getCompatibleCanvas()) {
        if (prototype.fyu8d71gf6kv == undefined) {
            if (openCustomReloadAnimation) { prototype.rewriteArc = prototype.arc }
            prototype.fyu8d71gf6kv = prototype.strokeText;
            prototype.fyu8d71gf6kf = prototype.fillText;
            prototype.fyu8d71gf6kt = prototype.measureText;
        }
        else { break }
    }


    //函数重写
    for (const { prototype } of getCompatibleCanvas()) {
        if (openCustomReloadAnimation) {
            //重写绘制圆弧路径函数 | 将花瓣再装填动画改为自定义，这里貌似是 Phigros 中的打击效果
            prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
                if (x == 0 && y == -5 && radius == 120 && anticlockwise == false) {
                    y = y + 5;
                    const progress = ~~(Math.sqrt(startAngle / 35.81371) * 10000);
                    const size3tProgress = size3 * progress / 10000;
                    const size4tProgress = size4 * progress / 10000;
                    const XmSize2db2p15 = x - size2db2 + 15;
                    const XpSize2db2m15 = x + size2db2 - 15;
                    const YmSize2db2p11 = y - size1db2 + 11.25;
                    const YpSize2db2m11 = y + size1db2 - 11.25;
                    const originalGlobalAlpha = this.globalAlpha;
                    if (progress >= 9950) { this.globalAlpha = (50 - (progress - 9950)) / 50; } //最后的降低透明度动画 | 注意 js 小数运算精度问题
                    this.drawImage(reloadProcessBarImg, XmSize2db2p15, YmSize2db2p11, size3tProgress, 5);
                    this.drawImage(reloadProcessBarImg, XpSize2db2m15, YmSize2db2p11, size4tProgress, 5);
                    this.drawImage(reloadProcessBarImg, XmSize2db2p15, YpSize2db2m11, size3tProgress, -5);
                    this.drawImage(reloadProcessBarImg, XpSize2db2m15, YpSize2db2m11, size4tProgress, -5);
                    this.drawImage(reloadProcessBarImg, YmSize2db2p11, XmSize2db2p15, 5, size3tProgress);
                    this.drawImage(reloadProcessBarImg, YmSize2db2p11, XpSize2db2m15, 5, size4tProgress);
                    this.drawImage(reloadProcessBarImg, YpSize2db2m11, XmSize2db2p15, -5, size3tProgress);
                    this.drawImage(reloadProcessBarImg, YpSize2db2m11, XpSize2db2m15, -5, size4tProgress);
                    y = y - 5;

                    this.drawImage(reloadMainImg, x - size2db2, y - size1db2 + 5, size2, size1);
                    this.globalAlpha = originalGlobalAlpha
                    return;
                }
                return this.rewriteArc(x, y, radius, startAngle, endAngle, anticlockwise);
            }
        }

        //重写字符描边函数
        prototype.strokeText = function (text, x, y) {
            const newFontSize = getBlurFontSize(this.font);
            this.font = getApplicableFontStr(newFontSize);
            //alertTargetStr(text, "Flower Health");
            //consoleTextInfoLog(text, x, y);
            return this.fyu8d71gf6kv(getTranslate(text), x, y);
        }

        //重写字符填充函数 | 它会随着 strokeText 自适应填充，不需要更多设置
        prototype.fillText = function (text, x, y) {
            return this.fyu8d71gf6kf(getTranslate(text), x, y);
        }

        //重写字符尺寸度量函数
        prototype.measureText = function (text) {
            const newFontSize = getBlurFontSize(this.font);
            this.font = getApplicableFontStr(newFontSize);
            return this.fyu8d71gf6kt(getTranslate(text));
        }
    }
})();
