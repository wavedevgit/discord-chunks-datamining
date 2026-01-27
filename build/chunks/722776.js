/** Chunk was on web.js **/
/** chunk id: 722776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk313961 = require("./313961.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  let n = (0, r.bG)([s.A], () => s.A.getVoiceChannelId()),
    c = (0, r.bG)([o.A], () => null != n ? o.A.getMode(n) : null),
    u = (0, a.Ay)();
  return null != e ? e : c === l._Of.VOICE && (0, i.qB)(u) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
}