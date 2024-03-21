import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '功能类-微信开发扫码登录',
      desc: '微信开发扫码登录',
      rules: [
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text*="微信开发者工具"] +n [id="js_allow"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1711011013196'
        },
      ],
    },
  ],
});


