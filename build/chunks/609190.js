/** Chunk was on web.js **/
/** chunk id: 609190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk543465 = require("./543465.js");
let o = null;

function l(e) {
  let t = (0, i.bG)([a.A], () => a.A.getPrivateChannelsVersion()),
    n = (0, i.bG)([a.A], () => a.A.getMutableDMsByUserIds(), [t]),
    l = (0, i.bG)([s.Ay], () => s.Ay.getMutedChannels(o)),
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