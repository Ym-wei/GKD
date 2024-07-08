import {defineAppConfig} from './types';

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
                    name: '0708广告跳过',
                    matches: ['View[width=140]'],
                    snapshotUrls: 'https://i.gkd.li/i/15911033',
                    // actionDelay: 700,
                    // position: {
                    //     top: 169,
                    //     left: 1285
                    // }
                }
            ],
        },
    ],
});
