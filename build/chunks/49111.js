/** Chunk was on 82575 **/
/** chunk id: 49111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LK: () => l,
  _9: () => s
});
let i = (0, require("./945810.js").mj)({
  name: "2025-12-server-trending-notification",
  kind: "user",
  defaultConfig: {
    showSettingsToggle: false
  },
  variations: {
    1: {
      showSettingsToggle: true
    },
    2: {
      showSettingsToggle: true
    }
  }
});

function s(e) {
  return i.useConfig({
    location: e
  })
}

function l(e) {
  return i.getConfig({
    location: e
  }).showSettingsToggle
}