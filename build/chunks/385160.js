/** Chunk was on 1113 **/
/** chunk id: 385160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ao: () => l
});
let r = (0, require("./945810.js").mj)({
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

function l(e) {
  return r.useConfig({
    location: e
  }).enabled
}