/** Chunk was on web.js **/
/** chunk id: 46467, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => u
}), require("./747238.js"), require("./64700.js"), require("./417597.js");
var Chunk71393 = require("./71393.js"),
  Chunk723702 = require("./723702.js"),
  Chunk540763 = require("./540763.js"),
  Chunk652215 = require("./652215.js");
let o = "13.2",
  l = [Chunk652215.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

function c(e, t) {
  let n = e.split(".").map(Number),
    r = t.split(".").map(Number),
    i = Math.max(n.length, r.length);
  for (let e = 0; e < i; e++) {
    var a, s;
    let t = null != (a = n[e]) ? a : 0,
      i = null != (s = r[e]) ? s : 0;
    if (t < i) return false;
    if (t > i) return 1
  }
  return 0
}

function u(e) {
  if (!(0, i.isIOS)()) returnfalse;
  let t = (0, a.O)();
  if (null == t || false === c(t, o)) returnfalse;
  let n = r.A.getGuild(e);
  return null != n && !!l.every(e => n.features.has(e))
}