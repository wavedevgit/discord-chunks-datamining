/** Chunk was on 36232 **/
/** chunk id: 619733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AK: () => c,
  EK: () => o,
  IX: () => s,
  SW: () => b,
  SY: () => u,
  Sg: () => p,
  TG: () => a,
  YX: () => d,
  Z4: () => v,
  nd: () => O,
  tq: () => f,
  uz: () => y,
  xn: () => m
});
var r, Chunk763600 = require("./763600.js"),
  Chunk48541 = require("./48541.js"),
  o = 12633 == require.j ? ((r = {}).SELECT_GAME = "select-game", r.SERVER_SETTINGS = "server-settings", r) : null;
let s = {
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
  a = 24,
  c = 680,
  u = 12633 == require.j ? c - 2 * a : null,
  d = 10,
  p = 32,
  f = 1e3,
  m = 3,
  b = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1425215263548117002" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144",
  y = {
    [Chunk763600.Z.SHOCKBYTE]: window.GLOBAL_ENV.RELEASE_CHANNEL === Chunk48541.C.STAGING ? "https://purple-prod.shockbyte.dev/support" : "https://discord.shockbyte.com/support"
  },
  O = {
    [Chunk763600.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy"
  },
  v = (e, t) => "https://discord.sjc1.qualtrics.com/jfe/form/SV_0TIqLrxbsfJYS4C?user_id=".concat(e, "&guild_id=").concat(t)