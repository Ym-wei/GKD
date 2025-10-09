import {defineAppConfig} from '../types';

export default defineAppConfig({
    id: 'com.oplus.ota',
    name: '软件更新',
    groups: [
        {
            key: 1,
            name: '更新提示-系统更新',
            desc: '更新提示',
            rules: [
                {
                    // fastQuery: true,
                    // activityIds: null,
                    matches: '[id="android:id/text1"][text="稍后"]',
                    snapshotUrls: 'https://i.gkd.li/i/22793250',
                },
            ],
        },
    ]
});
