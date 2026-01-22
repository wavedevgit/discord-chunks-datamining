/** Chunk was on web.js **/
/** chunk id: 177686, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VG: () => l,
  W7: () => c,
  qH: () => u
});
var Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk531685 = require("./531685.js"),
  Chunk365971 = require("./365971.js");

function o(e) {
  var t;
  let n = i.Ay.getChannelIdsForWindowId(e)[0];
  return null == n ? null : null != (t = r.A.getChannel(n)) ? t : null
}

function l(e) {
  if (null == e) return null;
  let t = (0, s.Q2)(e);
  return null == t ? null : o(t)
}

function c() {
  let e = a.A.getFocusedWindowId();
  return null == e ? null : o(e)
}

function u(e, t) {
  if (null == e || null == t) returnfalse;
  let n = (0, s.Q2)(e);
  return n === (0, s.Q2)(t) && null != n
}