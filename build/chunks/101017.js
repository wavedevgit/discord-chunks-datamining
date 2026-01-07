/** Chunk was on 17185 **/
/** chunk id: 101017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk999382 = require("./999382.js"),
  Chunk905128 = require("./905128.js"),
  Chunk131085 = require("./131085.js");

function i() {
  let e = (0, a.e7)([s.Z], () => s.Z.getGuild()),
    t = (0, a.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getStateForGuild(null == e ? true : e.id)) ? true : t.allPowerups
    });
  return (0, r.useMemo)(() => {
    let n = l.QV.map(e => ({
        kind: e
      })),
      r = [];
    return (null == e ? true : e.features) == null || Object.keys(l.Ct).forEach(a => {
      let s = l.Ct[a],
        o = l.AC[a],
        i = null == t ? true : t[o],
        c = null == i ? true : i.title,
        d = s.map(e => ({
          kind: e,
          packName: c
        }));
      e.features.has(a) ? n.push(...d) : r.push(...d)
    }), {
      unlockedBadges: n,
      lockedBadges: r
    }
  }, [null == e ? true : e.features, t])
}