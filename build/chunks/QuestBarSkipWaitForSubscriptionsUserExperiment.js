/** Chunk was on web.js **/
/** chunk id: 200872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => i
});
let r = (0, require("./818083.js").B)({
    id: "2025-06_quest_bar_skip_wait_for_subscriptions",
    kind: "user",
    label: "Quests: Skip waiting for subscriptions",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Skip waiting for subscriptions",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t
    } = e;
    return r.useExperiment({
      location: t
    }).enabled
  }