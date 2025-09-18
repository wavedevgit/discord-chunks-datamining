/** Chunk was on 85991 **/
/** chunk id: 473682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IU: () => u,
  M4: () => o,
  Ne: () => c,
  T9: () => l,
  Vb: () => i,
  hK: () => s,
  zI: () => d
});
var a, Chunk48541 = require("./48541.js"),
  i = 12633 == require.j ? ((a = {}).SELECT_GAME = "select-game", a.SERVER_SETTINGS = "server-settings", a) : null;
let l = {
    steps: {
      "select-game": {
        onBack: {
          type: "close"
        },
        onNext: {
          type: "go-to-step",
          step: "server-settings"
        }
      },
      "server-settings": {
        onBack: {
          type: "go-to-step",
          step: "select-game"
        },
        onNext: {
          type: "save"
        }
      }
    }
  },
  s = 24,
  o = 680,
  c = 12633 == require.j ? o - 2 * s : null,
  d = 10,
  u = window.GLOBAL_ENV.RELEASE_CHANNEL === Chunk48541.C.STAGING ? "1415044199572832256" : "1415025086791942144"