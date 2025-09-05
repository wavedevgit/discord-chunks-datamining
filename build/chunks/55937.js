/** Chunk was on web.js **/
/** chunk id: 55937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => c
});
var Chunk468771 = require("./468771.js"),
  Chunk108131 = require("./108131.js"),
  a = require.n(Chunk108131),
  Chunk314897 = require("./314897.js"),
  Chunk309056 = require("./309056.js");
let l = null;

function c(e, t) {
  s.k.getConfig({
    location: "fireSprigEvent"
  }).fireSprigEvents && (l || (l = r.jA.configure({
    environmentId: window.GLOBAL_ENV.SPRIG_API_KEY
  })), l.identifyAndTrack({
    eventName: e,
    userId: a().v3(o.default.getId()),
    properties: t
  }))
}