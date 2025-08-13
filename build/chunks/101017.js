/** Chunk was on 42926 **/
/** chunk id: 101017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk999382 = require("./999382.js"),
  Chunk905128 = require("./905128.js"),
  Chunk901005 = require("./901005.js"),
  Chunk131085 = require("./131085.js");

function u() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk442837.e7)([Chunk905128.Z], () => {
      var t;
      return null == (t = Chunk905128.Z.getStateForGuild(null == module ? true : module.id)) ? true : exports.allPowerups
    }),
    n = (0, Chunk901005.i)(null == module ? true : module.id, "GuildSettingsTags");
  return (0, Chunk73800.useMemo)(() => {
    let r = Chunk131085.QV.map(e => ({
        kind: e
      })),
      s = [];
    return require && (null == module ? true : module.features) != null && Object.keys(Chunk131085.Ct).forEach(n => {
      let i = c.Ct[n],
        l = c.AC[n],
        a = null == t ? true : t[l],
        u = null == a ? true : a.title,
        d = i.map(e => ({
          kind: e,
          packName: u
        }));
      e.features.has(n) ? r.push(...d) : s.push(...d)
    }), {
      unlockedBadges: Chunk73800,
      lockedBadges: Chunk442837
    }
  }, [null == module ? true : module.features, require, exports])
}