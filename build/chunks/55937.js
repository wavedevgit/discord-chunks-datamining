/** Chunk was on web.js **/
/** chunk id: 55937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => s
});
var Chunk468771 = require("./468771.js"),
  Chunk314897 = require("./314897.js"),
  Chunk309056 = require("./309056.js");
let o = null;

function s(e, t) {
  a.k.getConfig({
    location: "fireSprigEvent"
  }).fireSprigEvents && (o || (o = r.jA.configure({
    environmentId: window.GLOBAL_ENV.SPRIG_API_KEY
  })), o.identifyAndTrack({
    eventName: e,
    userId: i.default.getId(),
    properties: t
  }))
}