/** Chunk was on 78528 **/
/** chunk id: 485970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk645619 = require("./645619.js"),
  Chunk864310 = require("./864310.js"),
  Chunk568065 = require("./568065.js");

function u(e, t) {
  var n;
  let u = (0, l.bG)([i.A], () => i.A.getGuild(e)),
    d = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
    {
      spent: p
    } = (0, o.A)(e),
    h = r.useMemo(() => {
      if (null == t || t.type !== c.o9.LEVEL || null == d) return [];
      let e = c.y7[t.skuId];
      return null == e ? [] : Object.entries(c.wr).filter(t => {
        let [n, r] = t;
        return r === e && null != d.unlockedPowerups[n]
      }).map(e => {
        let [t] = e;
        return d.allPowerups[t]
      }).filter(s.Vq)
    }, [t, d]),
    f = null == h ? true : h.reduce((e, t) => e + t.cost, 0);
  return Math.max((null != (n = null == u ? true : u.premiumSubscriberCount) ? n : 0) - p + (null != f ? f : 0), 0)
}