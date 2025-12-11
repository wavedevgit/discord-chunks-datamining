/** Chunk was on 79764 **/
/** chunk id: 454432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
let f = (e, t) => {
  let [n, f] = i.useState(false), m = (0, a.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)), x = (0, a.Wu)([o.ZP, r.Z, s.Z], () => {
    let t = o.ZP.getFlattenedGuildIds(),
      n = [];
    return t.forEach(t => {
      let i = r.Z.getGuild(t);
      null != i && s.Z.can(u.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i)
    }), n
  }, [e]);
  return (0, l.ZP)(() => {
    (async () => {
      f(true), await c._Q(t, x.map(e => e.id)), f(false)
    })()
  }), {
    availableGuilds: i.useMemo(() => x.filter(e => !(null == m ? true : m.has(e.id))), [x, m]),
    addedGuilds: i.useMemo(() => x.filter(e => null == m ? true : m.has(e.id)), [x, m]),
    loading: n
  }
}