/** Chunk was on 8798 **/
/** chunk id: 720619, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js");

function u(e) {
  let {
    isGuildIncluded: t,
    selectedGuildId: i
  } = e, l = (0, a.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()), u = (0, a.bG)([s.A], () => s.A.getGuilds()), c = (0, a.bG)([o.default], () => o.default.getCurrentUser());
  return {
    options: n.useMemo(() => null == c ? [] : (null == t ? l : l.filter(e => {
      let i = u[e];
      return r()(null != i, "guild should not be null"), t(i, c)
    })).map(e => {
      let t = u[e];
      return r()(null != t, "guild should not be null"), {
        id: e,
        label: t.name,
        value: t.id
      }
    }), [l, u, c, t]),
    selectedGuild: null == i ? true : u[i]
  }
}