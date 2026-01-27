/** Chunk was on 82575 **/
/** chunk id: 477895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bf: () => s,
  Oi: () => l
});
let i = (0, require("./945810.js").mj)({
  kind: "user",
  name: "2026-01-friend-is-online-notif-rate-limits",
  defaultConfig: {
    showSettingsToggle: false
  },
  variations: {
    1: {
      showSettingsToggle: true
    },
    2: {
      showSettingsToggle: true
    },
    3: {
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