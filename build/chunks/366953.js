/** Chunk was on web.js **/
/** chunk id: 366953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  j: () => o
}), require("./388685.js");
var Chunk433517 = require("./433517.js");
let i = "recentBuildOverrides";

function o() {
  var e;
  return (null != (e = Chunk433517.K.get(i)) ? module : []).filter(e => null == e.exp || e.exp > Date.now())
}

function a(e, t) {
  if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
  let n = {
      id: e.targetBuildOverride.discord_web.id,
      payload: t,
      exp: Date.parse(e.expiresAt)
    },
    a = [n, ...o().filter(e => n.id !== e.id)].slice(0, 5);
  r.K.set(i, a)
}