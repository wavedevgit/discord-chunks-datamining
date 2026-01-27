/** Chunk was on 82575 **/
/** chunk id: 479715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AQ: () => l,
  ZA: () => s
});
let i = (0, require("./945810.js").mj)({
  kind: "user",
  name: "2026-01-profile-updates-notification",
  defaultConfig: {
    showSettingsToggle: false
  },
  variations: {
    0: {
      showSettingsToggle: false
    },
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