import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 1,
      enable: true,
      name: '功能类-自动点击看娃视频',
      desc: '允许只有一个监控1',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
          matches: '[id="com.xiaomi.smarthome:id/ali"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/81805625/50995a63-ded4-42fc-a642-8c35206e8dd4',
          snapshotUrls: 'https://i.gkd.li/i/14413607',
        },
      ],
    },
  ],
});
