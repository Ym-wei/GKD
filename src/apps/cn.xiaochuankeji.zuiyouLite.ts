import {defineAppConfig} from '../types';

export default defineAppConfig({
    id: 'cn.xiaochuankeji.zuiyouLite',
    name: '皮皮搞笑',
    groups: [
        {
            name: '开屏广告',
            desc: '跳过开屏广告双重检测',
            key: 0,
            enable: true,
            quickFind: false,
            snapshotUrls: [],
            rules: [
                {
                    key: 1,
                    name: '关闭1',
                    matches: ['[id="com.byted.pangle:id/tt_splash_skip_btn"]'],
                    snapshotUrls: 'https://i.gkd.li/snapshot/1708955039598',
                },
                {
                    key: 2,
                    name: '关闭2',
                    matches: ['@LinearLayout[clickable=false] > [text="跳过 "]'],
                    snapshotUrls: 'https://i.gkd.li/snapshot/1708955435902'
                },
                {
                    key: 3,
                    name: '位置关闭1',
                    matches: ['[id="cn.xiaochuankeji.zuiyouLite:id/animation_view"]'],
                    snapshotUrls: 'https://i.gkd.li/i/14557046',
                    position: {
                        top: 220,
                        left: 1280
                    }
                },
                {
                    key: 4,
                    name: '位置关闭2',
                    matches: ['[id="cn.xiaochuankeji.zuiyouLite:id/controllerView"]'],
                    snapshotUrls: 'https://i.gkd.li/snapshot/1710170678710',
                    position: {
                        top: 188,
                        left: 1300
                    }
                },
                {
                    key: 5,
                    name: '文字跳过',
                    quickFind: true,
                    activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.splash.SplashActivity',
                    matches: '[text*="跳过"]',
                    exampleUrls: 'https://m.gkd.li/81805625/350942a0-c8b2-4dbf-80f9-988522419a09',
                    snapshotUrls: 'https://i.gkd.li/i/14601236',
                }
            ],
        },
        {
            enable: true,
            key: 4,
            name: '功能类-关闭小红包卡片',
            desc: '关闭小红包卡片',
            rules: [
                {
                    key: 1,
                    name: '关闭弹窗',
                    matches: '[text*="看广告或直播"] + TextView[text="确定"]',
                    snapshotUrls: 'https://i.gkd.li/i/14430159',
                },
                {
                    key: 2,
                    preKeys: 1,
                    name: '点击关闭',
                    matches: 'View[childCount=6] > TextView[text="确定"]',
                    snapshotUrls: 'https://i.gkd.li/i/14430159',
                },
                {
                    key: 3,
                    preKeys: 2,
                    name: '点击关闭',
                    matches: '[id="cn.xiaochuankeji.zuiyouLite:id/close"]',
                    snapshotUrls: 'https://i.gkd.li/i/14430159',
                },
            ],
        },
        {
            enable: true,
            key: 5,
            name: '分段广告-用户游戏广告',
            rules: [
                {
                    key: 1,
                    name: '点击关闭',
                    matches: '[vid="post_activity_root"] - FrameLayout - LinearLayout - LinearLayout [vid="member_view_icon_right"]',
                    snapshotUrls: 'https://i.gkd.li/snapshot/1709189540108',
                },
                {
                    key: 2,
                    preKeys: 1,
                    name: '点击不感兴趣',
                    matches: '[text="不感兴趣"]',
                    snapshotUrls: 'https://i.gkd.li/i/15071582',
                },
            ],
        },
        {
            enable: true,
            key: 6,
            name: '分段广告-流动直播广告',
            rules: [
                {
                    key: 1,
                    name: '点击关闭',
                    matches: '[vid="post_holder_live_bottom_view"] -n [vid="post_holder_member_view"] [vid="member_view_icon_right"]',
                    snapshotUrls: 'https://i.gkd.li/snapshot/1709205181942',
                },
                {
                    key: 2,
                    preKeys: 1,
                    name: '点击不感兴趣',
                    matches: '[text="不感兴趣"]',
                    snapshotUrls: 'https://i.gkd.li/i/15071582',
                }
            ],
        },
        {
            enable: true,
            key: 7,
            name: '分段广告-商场',
            rules: [
                {
                    key: 1,
                    name: '点击关闭',
                    matches: '[vid="tedium"]',
                    snapshotUrls: "https://i.gkd.li/snapshot/1709216783100",
                },
                {
                    key: 2,
                    preKeys: 1,
                    name: '点击不感兴趣',
                    matches: '[vid="feedback_general_text"]',
                    snapshotUrls: 'https://i.gkd.li/i/14823659',
                },
            ],
        },
        {
            enable: true,
            key: 8,
            name: '分段广告-activity',
            rules: [
                {
                    key: 1,
                    name: '点击关闭',
                    matches: '[vid="post_activity_root"] -n [vid="post_holder_member_view"] [vid="member_view_icon_right"]',
                    snapshotUrls: "https://i.gkd.li/i/14823659",
                },
                {
                    key: 2,
                    preKeys: 1,
                    name: '点击不感兴趣',
                    matches: '[vid="feedback_general_text"]',
                    snapshotUrls: 'https://i.gkd.li/i/14823659',
                },
            ],
        },
    ],
});
