import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '功能类-微信开发扫码登录',
      desc: '微信开发扫码登录',
      enable: true,
      rules: [
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text*="微信开发者工具"] +n [id="js_allow"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1711011013196'
        },
      ],
    },
    {
      key: 2,
      name: '功能类-微信广告',
      desc: '微信广告',
      enable: true,
      rules: [
        {
          key: 1,
          snapshotUrls: 'https://i.gkd.li/i/19641753',
          activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          matches: '[vid="jw"]',
        },
        {
          key: 2,
          preKeys: 1,
          name: '点击关闭',
          activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          matches: '[vid="n2m"]',
          snapshotUrls: 'https://i.gkd.li/i/19641780',
        },
      ],
    },
  ],
});
