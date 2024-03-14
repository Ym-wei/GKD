import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '未分类-首页广告',
      desc: '',
      enable: true,
      rules: [
        {
          key: 1,
          name: '多多买菜',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: 'ViewGroup[childCount=2] > ViewGroup[childCount=6] + ViewGroup',
          exampleUrls: 'https://m.gkd.li/81805625/96568fd2-beeb-4ba4-b407-3e058f763ec4',
          snapshotUrls: 'https://i.gkd.li/i/14600288',
        },
      ],
    },
  ],
});


