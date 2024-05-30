import { defineAppConfig } from '../types';

export default defineAppConfig(
    {
        id: 'com.miui.systemAdSolution',
        name: '智能服务',
        groups: [
            {
                key: 1,
                name: '全屏广告-会员弹窗',
                desc: '首页',
                rules: [
                    {
                        quickFind: true,
                        matches: '[vid="view_skip_button"]',
                        snapshotUrls: 'https://i.gkd.li/i/15495309',
                    },
                ],
            },
        ],
    }
);
