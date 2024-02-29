import categories from './categories';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 1130,
  version: 3,
  name: '杨明的GKD订阅',
  author: '杨明',
  supportUri: 'https://github.com/Ym-wei/GKD',
  updateUrl: 'https://raw.githubusercontent.com/Ym-wei/GKD/main/dict/ym.json5',
  checkUpdateUrl: 'https://raw.githubusercontent.com/Ym-wei/GKD/main/dict/ym_gkd.version.json',
  categories,
  apps,
};

export default subsConfig;
