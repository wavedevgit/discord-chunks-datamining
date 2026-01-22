/** Chunk was on web.js **/
/** chunk id: 51935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => i
});
let r = (0, require("./600975.js").C)({
    id: "2025-04_fetch_quests_on_postconnectionopen",
    kind: "user",
    label: "Fetch Quests ON_POST_CONNECTION_OPEN",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Fetch quests during ON_POST_CONNECTION_OPEN",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = false
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  }