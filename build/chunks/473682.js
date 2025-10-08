/** Chunk was on 5938 **/
/** chunk id: 473682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BH: () => b,
  IU: () => x,
  M4: () => d,
  Ne: () => u,
  T9: () => o,
  Vb: () => s,
  cF: () => h,
  gM: () => p,
  hK: () => c,
  mg: () => f,
  zI: () => m
});
var a, r, Chunk763600 = require("./763600.js"),
  Chunk48541 = require("./48541.js"),
  s = 12633 == require.j ? ((a = {}).SELECT_GAME = "select-game", a.SERVER_SETTINGS = "server-settings", a) : null;
let o = {
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
  c = 24,
  d = 680,
  u = 12633 == require.j ? d - 2 * c : null,
  m = 10,
  p = 32,
  h = 1e3,
  x = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1425215263548117002" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144";
var f = 12633 == require.j ? ((r = {})[r.SHOCKBYTE = 0] = "SHOCKBYTE", r) : null;
let b = {
  [Chunk763600.Z.SHOCKBYTE]: window.GLOBAL_ENV.RELEASE_CHANNEL === Chunk48541.C.STAGING ? "https://purple-prod.shockbyte.dev/support" : "https://discord.shockbyte.com/support"
}