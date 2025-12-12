/** Chunk was on 64722 **/
/** chunk id: 473952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk905128 = require("./905128.js"),
  Chunk317169 = require("./317169.js"),
  Chunk535396 = require("./535396.js");

function u(e, t) {
  var n;
  let u = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
    d = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    {
      spent: f
    } = (0, s.Z)(e),
    h = r.useMemo(() => {
      if (null == t || t.type !== c.Us.LEVEL || null == d) return [];
      let e = c.T1[t.skuId];
      return null == e ? [] : Object.entries(c.Rx).filter(t => {
        let [n, r] = t;
        return r === e && null != d.unlockedPowerups[n]
      }).map(e => {
        let [t] = e;
        return d.allPowerups[t]
      }).filter(o.lm)
    }, [t, d]),
    p = null == h ? true : h.reduce((e, t) => e + t.cost, 0);
  return Math.max((null != (n = null == u ? true : u.premiumSubscriberCount) ? n : 0) - f + (null != p ? p : 0), 0)
}