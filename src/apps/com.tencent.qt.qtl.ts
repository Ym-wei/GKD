import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.tencent.qt.qtl',
    name: '掌上英雄联盟',
    groups: [
        {
            key: 1,
            name: '全屏广告-首页弹窗广告',
            desc: '关闭',
            rules: [
                {
                    quickFind: true,
                    activityIds: 'com.tencent.zone.main.notice.NoticeActivity',
                    matches: '[id="com.tencent.qt.qtl:id/notice_close_pic"]',
                    exampleUrls: 'https://m.gkd.li/81805625/a4ccc5bd-23bc-40bb-8d2d-690911c98ef8',
                    snapshotUrls: 'https://i.gkd.li/i/14553096',
                },
            ],
        },
        {
            key: 2,
            name: '全屏广告-更新',
            rules: [
                {
                    quickFind: true,
                    activityIds: 'com.tencent.qt.module_appupdate.soft_update.impl.SoftUpdateConfirmActivity',
                    matches: '[vid="btn_update_cancel"]',
                    snapshotUrls: 'https://i.gkd.li/i/14941340',
                },
            ],
        },
    ],
});
