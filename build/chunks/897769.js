/** Chunk was on web.js **/
/** chunk id: 897769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk359119 = require("./359119.js");

function o(e, t) {
  return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && ((null == e ? true : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}