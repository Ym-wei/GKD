import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.ct.client',
    name: '中国电信',
    groups: [
        {
            key: 1,
            name: '更新提示-电信软件更新',
            desc: '取消更新',
            rules: [
                {
                    // fastQuery: true,
                    activityIds: 'com.ct.client.common.ConfirmDialogActivity',
                    matches: '[id="com.ct.client:id/tvNo"]',
                    snapshotUrls: 'https://i.gkd.li/i/22895467',
                },
            ],
        },
    ],
});
