/** Chunk was on web.js **/
/** chunk id: 17100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => i
});
let r = (0, require("./722733.js").Z)({
    kind: "user",
    name: "2025-10-wow-moment-backtest",
    defaultConfig: {
      brandRefreshWowMomentEnabled: true
    },
    variations: {
      1: {
        brandRefreshWowMomentEnabled: false
      }
    }
  }),
  i = e => {
    let {
      location: t
    } = e;
    return r.getConfig({
      location: t
    }).brandRefreshWowMomentEnabled
  }