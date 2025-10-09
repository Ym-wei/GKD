import {defineAppConfig} from "../types";

export default defineAppConfig({
    id: 'com.haimabt.download',
    name: '海马下载',
    groups: [
        {
            key: 1,
            name: '开屏广告',
            desc: '首页更新提示',
            rules: [
                {
                    activityIds: 'com.e4a.runtime.android.mainActivity',
                    matches: 'FrameLayout[childCount=2]',
                    position: {
                        top: 690,
                        left: 2060
                    }
                },
            ],
        },
    ],
})
