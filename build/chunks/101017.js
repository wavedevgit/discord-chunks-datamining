/** Chunk was on 65778 **/
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
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk442837.e7)([Chunk905128.Z], () => {
      var t;
      return null == (t = Chunk905128.Z.getStateForGuild(null == module ? true : module.id)) ? true : exports.allPowerups
    });
  return (0, Chunk473749.useMemo)(() => {
    let n = Chunk131085.QV.map(e => ({
        kind: e
      })),
      r = [];
    return (null == module ? true : module.features) == null || Object.keys(Chunk131085.Ct).forEach(a => {
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
      unlockedBadges: require,
      lockedBadges: Chunk473749
    }
  }, [null == module ? true : module.features, exports])
}