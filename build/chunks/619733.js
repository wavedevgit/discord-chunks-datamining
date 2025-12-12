/** Chunk was on web.js **/
/** chunk id: 619733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AK: () => l,
  EK: () => a,
  IX: () => o,
  SW: () => p,
  SY: () => c,
  Sg: () => d,
  TG: () => s,
  YX: () => u,
  Z4: () => m,
  fj: () => h,
  nd: () => _,
  tq: () => f
});
var Chunk763600 = require("./763600.js"),
  Chunk48541 = require("./48541.js"),
  a = function(e) {
    return e.SELECT_GAME = "select-game", e.SERVER_SETTINGS = "server-settings", e
  }({});
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
  l = 680,
  c = 632,
  u = 10,
  d = 32,
  f = 1e3,
  p = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1425215263548117002" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "1415044199572832256" : "1415025086791942144";
Chunk763600.Z.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, Chunk48541.C.STAGING;
let _ = {
    [Chunk763600.Z.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy"
  },
  m = (e, t) => "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t),
  h = "0"