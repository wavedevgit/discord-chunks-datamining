/** Chunk was on 9207 **/
/** chunk id: 299947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => i
});
let r = (0, require("./945810.js").mj)({
  name: "2026-01-user-profile-settings-nitro-button-experiment",
  kind: "user",
  defaultConfig: {
    updatedButtonEnabled: false
  },
  variations: {
    1: {
      updatedButtonEnabled: true
    }
  }
});

function i(e) {
  return r.useConfig({
    location: e
  })
}