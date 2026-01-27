/** Chunk was on web.js **/
/** chunk id: 832343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk945810 = require("./945810.js");
let i = 864e5,
  a = (0, Chunk945810.mj)({
    name: "2026-01-user-offer-notice-timing-xp",
    kind: "user",
    defaultConfig: {
      thresholdMs: 0
    },
    variations: {
      1: {
        thresholdMs: +i
      },
      2: {
        thresholdMs: 2 * i
      },
      3: {
        thresholdMs: 3 * i
      },
      4: {
        thresholdMs: 4 * i
      },
      5: {
        thresholdMs: 5 * i
      },
      6: {
        thresholdMs: 6 * i
      },
      7: {
        thresholdMs: 7 * i
      }
    }
  });

function o(e) {
  return a.getConfig({
    location: e
  }).thresholdMs
}