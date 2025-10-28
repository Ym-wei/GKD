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
    {
      key: 3,
      name: '功能类-扫码确认',
      desc: '小程序登录确认',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text="登录"]',
          snapshotUrls: 'https://i.gkd.li/i/23181165',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-文件登录',
      desc: '文件登录',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI',
          matches: '[id="com.tencent.mm:id/pjb"]',
          snapshotUrls: 'https://i.gkd.li/i/22895469',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-我知道了',
      desc: '我知道了',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/23181162',
        },
      ],
    },

    // {
    //   key: 5,
    //   name: '功能类-微信广告2',
    //   desc: '微信广告',
    //   enable: true,
    //   rules: [
    //     {
    //       key: 1,
    //       snapshotUrls: 'https://i.gkd.li/snapshot/1760001612361',
    //       matches: '[id="com.tencent.mm:id/kbe"]',
    //       position: {
    //         top: 607,
    //         left: 967
    //       }
    //     },
    //     {
    //       key: 2,
    //       preKeys: 1,
    //       name: '点击关闭',
    //       activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
    //       matches: '[vid="n2m"]',
    //       snapshotUrls: 'https://i.gkd.li/i/19641780',
    //     },
    //   ],
    // },
  ],
});
