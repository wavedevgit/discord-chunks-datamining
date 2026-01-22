/** Chunk was on web.js **/
/** chunk id: 967370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lM: () => s
});
var Chunk945810 = require("./945810.js");
let i = (0, Chunk945810.mj)({
    name: "2025-11-nitro-privacy-perk",
    kind: "user",
    defaultConfig: {
      enabled: false,
      in_experiment: false
    },
    variations: {
      0: {
        in_experiment: true,
        enabled: false
      },
      1: {
        in_experiment: true,
        enabled: true
      }
    }
  }),
  a = (0, Chunk945810.mj)({
    name: "2026-01-nitro-vpn-perk",
    kind: "user",
    defaultConfig: {
      in_experiment: false,
      enabled: false
    },
    variations: {
      1: {
        enabled: true,
        in_experiment: true
      }
    }
  }),
  s = e => {
    let t = i.getConfig({
      location: e
    });
    return t.in_experiment ? t.enabled : a.getConfig({
      location: e
    }).enabled
  }