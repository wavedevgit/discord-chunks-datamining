/** Chunk was on 79764 **/
/** chunk id: 454432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493773 = require("./493773.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk99325 = require("./99325.js"),
  Chunk273387 = require("./273387.js"),
  Chunk981631 = require("./981631.js");
let m = (e, t) => {
  let [n, m] = i.useState(false), x = (0, l.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)), g = (0, l.Wu)([o.ZP, s.Z, a.Z], () => {
    let t = o.ZP.getFlattenedGuildIds(),
      n = [];
    return t.forEach(t => {
      let i = s.Z.getGuild(t);
      null != i && a.Z.can(u.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i)
    }), n
  }, [e]);
  return (0, r.ZP)(() => {
    (async () => {
      m(true), await c._Q(t, g.map(e => e.id)), m(false)
    })()
  }), {
    availableGuilds: i.useMemo(() => g.filter(e => !(null == x ? true : x.has(e.id))), [g, x]),
    addedGuilds: i.useMemo(() => g.filter(e => null == x ? true : x.has(e.id)), [g, x]),
    loading: n
  }
}