/** Chunk was on 81985 **/
/** chunk id: 13439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  eg: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-11-guild-powerups-mobile",
  kind: "user",
  defaultConfig: {
    enabled: false,
    notificationsEnabled: false
  },
  variations: {
    1: {
      enabled: true,
      notificationsEnabled: false
    },
    2: {
      enabled: true,
      notificationsEnabled: true
    }
  }
});

function i(e) {
  return r.useConfig({
    location: e
  }).enabled
}