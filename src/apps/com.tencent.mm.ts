import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '分段广告-腾讯视频广告',
      desc: '腾讯视频下的广告',
      rules: [
        {
          key: 1,
          name: '弹开二次确认',
          matches: 'View[clickable=true] > [text="广告"] +n View[childCount=2] [text^="打开" || text^="去"] + View > TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14477405',
        },
        {
          key: 2,
          preKeys: 1,
          name: '点击关闭',
          matches: 'TextView[text$="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14477492',
        },
      ],
    },
  ],
});


