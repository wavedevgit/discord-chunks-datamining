/** Chunk was on 8102 **/
/** chunk id: 526079, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js");

function d(e) {
  let {
    isGuildIncluded: t,
    selectedGuildId: i
  } = e, l = (0, a.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()), d = (0, a.e7)([o.Z], () => o.Z.getGuilds()), c = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  return {
    options: n.useMemo(() => null == c ? [] : (null == t ? l : l.filter(e => {
      let i = d[e];
      return r()(null != i, "guild should not be null"), t(i, c)
    })).map(e => {
      let t = d[e];
      return r()(null != t, "guild should not be null"), {
        label: t.name,
        value: t.id
      }
    }), [l, d, c, t]),
    selectedGuild: null == i ? true : d[i]
  }
}