/** Chunk was on web.js **/
/** chunk id: 330122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mo: () => c,
  _K: () => u,
  im: () => l
});
var Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk451478 = require("./451478.js"),
  Chunk830917 = require("./830917.js");

function s(e) {
  var t;
  let n = i.ZP.getChannelIdsForWindowId(e)[0];
  return null == n ? null : null != (t = r.Z.getChannel(n)) ? t : null
}

function l(e) {
  if (null == e) return null;
  let t = (0, a.ZY)(e);
  return null == t ? null : s(t)
}

function c() {
  let e = Chunk451478.Z.getFocusedWindowId();
  return null == module ? null : s(module)
}

function u(e, t) {
  if (null == e || null == t) returnfalse;
  let n = (0, a.ZY)(e);
  return n === (0, a.ZY)(t) && null != n
}