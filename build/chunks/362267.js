/** Chunk was on web.js **/
/** chunk id: 362267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk358221 = require("./358221.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = (0, r.e7)([s.Z], () => s.Z.getVoiceChannelId()),
    c = (0, r.e7)([a.Z], () => null != n ? a.Z.getMode(n) : null),
    u = (0, o.ZP)();
  return null != e ? e : c === l.WtW.VOICE && (0, i.ap)(u) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
}