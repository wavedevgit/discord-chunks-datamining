/** Chunk was on 79764 **/
/** chunk id: 454432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493773 = require("./493773.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk99325 = require("./99325.js"),
  Chunk273387 = require("./273387.js"),
  Chunk981631 = require("./981631.js");
let m = (e, t) => {
  let [n, m] = i.useState(false), x = (0, s.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)), C = (0, s.Wu)([o.ZP, a.Z, r.Z], () => {
    let t = o.ZP.getFlattenedGuildIds(),
      n = [];
    return t.forEach(t => {
      let i = a.Z.getGuild(t);
      null != i && r.Z.can(u.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i)
    }), n
  }, [e]);
  return (0, l.ZP)(() => {
    (async () => {
      m(true), await c._Q(t, C.map(e => e.id)), m(false)
    })()
  }), {
    availableGuilds: i.useMemo(() => C.filter(e => !(null == x ? true : x.has(e.id))), [C, x]),
    addedGuilds: i.useMemo(() => C.filter(e => null == x ? true : x.has(e.id)), [C, x]),
    loading: n
  }
}