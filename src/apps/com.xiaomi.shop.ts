import { defineAppConfig } from '../types';

export default defineAppConfig(
    {
        id: 'com.xiaomi.shop',
        name: '小米商城',
        groups: [
            {
                key: 1,
                name: '全屏广告-会员弹窗',
                desc: '购买会员广告',
                rules: [
                    {
                        activityIds: 'com.xiaomi.shop2.activity.MainActivity',
                        matches: 'LinearLayout[childCount=2] > ImageView + ImageView',
                        snapshotUrls: 'https://i.gkd.li/i/15495087',
                    },
                ],
            },
        ],
    }
);
