/** Chunk was on web.js **/
/** chunk id: 327220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js");
let s = null;

function l(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getPrivateChannelsVersion()),
    n = (0, i.e7)([o.Z], () => o.Z.getMutableDMsByUserIds(), [t]),
    l = (0, i.e7)([a.ZP], () => a.ZP.getMutedChannels(s)),
    c = r.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let r = t,
          i = n[r];
        null != i && l.has(i) && e.add(r)
      }
      return e
    }, [n, l]);
  return r.useMemo(() => null == e ? true : e.filter(e => {
    for (let t of e.participants)
      if (c.has(t)) returnfalse;
    returntrue
  }), [e, c])
}