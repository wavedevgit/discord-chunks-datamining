/** Chunk was on 47841 **/
/** chunk id: 82566, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./321073.js"), require("./638769.js");
var Chunk311907 = require("./311907.js"),
  Chunk112389 = require("./112389.js"),
  Chunk777705 = require("./777705.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return (0, r.yK)([l.A, s.A], () => {
    var t;
    let n = (null != (t = l.A.getTopChannelIds(e.id)) ? t : []).map(e => s.A.getChannel(e)).filter(t => null == t || t.id !== e.rulesChannelId),
      r = [],
      o = 0;
    return n.forEach(e => {
      if (e.type === a.rbe.GUILD_ANNOUNCEMENT) {
        if (o >= 2) return;
        o++
      }
      r.length < 5 && !r.includes(e) && r.push(e)
    }), r.sort((t, n) => !!(0, i.S)(e.id, n.id) - !!(0, i.S)(e.id, t.id)), r
  })
}