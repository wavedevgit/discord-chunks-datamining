/** Chunk was on 6759 **/
/** chunk id: 121004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk964486 = require("./964486.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk711014 = require("./711014.js"),
  Chunk208882 = require("./208882.js"),
  Chunk519480 = require("./519480.js"),
  Chunk652215 = require("./652215.js");
let m = (e, t) => {
  let [n, m] = l.useState(false), x = (0, i.bG)([d.A], () => d.A.getAdminGuildEntryIds(t)), g = (0, i.yK)([c.Ay, r.A, a.A], () => {
    let t = c.Ay.getFlattenedGuildIds(),
      n = [];
    return t.forEach(t => {
      let l = r.A.getGuild(t);
      null != l && a.A.can(u.xBc.ADMINISTRATOR, l) && l.id !== e && n.push(l)
    }), n
  }, [e]);
  return (0, s.Ay)(() => {
    (async () => {
      m(true), await o.LH(t, g.map(e => e.id)), m(false)
    })()
  }), {
    availableGuilds: l.useMemo(() => g.filter(e => !(null == x ? true : x.has(e.id))), [g, x]),
    addedGuilds: l.useMemo(() => g.filter(e => null == x ? true : x.has(e.id)), [g, x]),
    loading: n
  }
}