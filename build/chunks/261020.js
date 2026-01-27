/** Chunk was on web.js **/
/** chunk id: 261020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o,
  n: () => s
});
var Chunk210528 = require("./210528.js"),
  Chunk723702 = require("./723702.js"),
  Chunk272984 = require("./272984.js");

function o(e) {
  let t = null;
  (0, i.isDesktop)() || (t = window.open("", "_blank")), null != t ? t.location.href = e : window.open(e)
}

function s(e, t) {
  o(r.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(e, t) : a.RQ.WEB_OPEN(e, t))
}