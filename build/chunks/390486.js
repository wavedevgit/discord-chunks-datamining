/** Chunk was on web.js **/
/** chunk id: 390486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a,
  R: () => s
}), require("./896048.js");
var Chunk506774 = require("./506774.js");
let i = "recentBuildOverrides";

function a() {
  var e;
  return (null != (e = r.w.get(i)) ? e : []).filter(e => null == e.exp || e.exp > Date.now())
}

function s(e, t) {
  if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
  let n = {
      id: e.targetBuildOverride.discord_web.id,
      payload: t,
      exp: Date.parse(e.expiresAt)
    },
    s = [n, ...a().filter(e => n.id !== e.id)].slice(0, 5);
  r.w.set(i, s)
}