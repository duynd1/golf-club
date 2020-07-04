import {create} from 'mobx-persist';
import {toJS} from 'mobx';

import Auth from './Auth';


const hydrate = create({storage: localStorage, jsonify: false});
const hydrateStores = [
  hydrate('Auth', Auth),
];

export const configure = (cb) => {
  Promise.all(hydrateStores).then((x) => {
    x.map((i) => {
      console.debug('hydrate', {data: toJS(i)});
    });
    cb();
  });
};

export {default as Auth} from './Auth';
