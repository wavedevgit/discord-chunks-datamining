/** Chunk was on 39297 **/
/** chunk id: 619733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AK: () => c,
  EK: () => i,
  IX: () => o,
  SW: () => h,
  SY: () => d,
  Sg: () => m,
  TG: () => s,
  YX: () => u,
  Z4: () => f,
  nd: () => g,
  tq: () => p,
  uz: () => x
});
var a, Chunk763600 = require("./763600.js"),
  Chunk48541 = require("./48541.js"),
  i = 12633 == require.j ? ((a = {}).SELECT_GAME = "select-game", a.SERVER_SETTINGS = "server-settings", a) : null;
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
  s = 24,
  c = 680,
  d = 12633 == require.j ? c - 2 * s : null,
  u = 10,
  m = 32,
  p = 1e3,
  h = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1425215263548117002" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144",
  x = {
    [Chunk763600.Z.SHOCKBYTE]: window.GLOBAL_ENV.RELEASE_CHANNEL === Chunk48541.C.STAGING ? "https://purple-prod.shockbyte.dev/support" : "https://discord.shockbyte.com/support"
  },
  g = {
    [Chunk763600.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy"
  },
  f = (e, t) => "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t)