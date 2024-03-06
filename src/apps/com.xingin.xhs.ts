import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 1,
      name: '功能类-新人优惠卷',
      desc: '关闭新人优惠卷',
      rules: [
        {
          activityIds: 'com.xingin.reactnative.ui.XhsReactTranslucentActivity',
          matches: '[text^="立即"] < ViewGroup < ViewGroup + ViewGroup ImageView',
          exampleUrls: 'https://m.gkd.li/81805625/05110688-124f-44c0-b2f4-a46428c23d4f',
          snapshotUrls: 'https://i.gkd.li/i/14504075',
        },
      ],
    },
  ],
});


