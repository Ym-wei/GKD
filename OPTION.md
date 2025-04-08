# 第一步, 手机连接wifi 打开GKD 设置 - 高级设置 - http服务,
## 上面有链接地址  https://i.gkd.li/device 快照地址填写地址, 

###连续点击 示例
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

###坐标点击 示例
    {
        name: '开屏广告',
        desc: '跳过开屏广告双重检测',
        key: 1,
        enable: true,
        quickFind: false,
        snapshotUrls: [],
        rules: [
            {
                key: 1,
                name: '位置关闭1',
                matches: ['[id="cn.xiaochuankeji.zuiyouLite:id/animation_view"]'],
                snapshotUrls: 'https://i.gkd.li/i/14557046',
                position: {
                    top: 220,
                    left: 1280
                }
            }
        ],
    },
