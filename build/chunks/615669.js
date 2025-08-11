/** Chunk was on web.js **/
/** chunk id: 615669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  z: () => o
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  o = function(e) {
    return e[e.END_EARLY = 0] = "END_EARLY", e
  }({});
let a = [];

function s(e) {
  let t = (0, r.e7)([i.default], () => i.default.getId()),
    {
      poll: n
    } = e;
  if (!e.isPoll() || null == n) return a;
  let o = [];
  return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || o.push(0), o
}