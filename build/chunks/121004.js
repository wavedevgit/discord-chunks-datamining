/** Chunk was on 6759 **/
/** chunk id: 121004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
let x = (e, t) => {
  let [n, x] = l.useState(false), m = (0, i.bG)([o.A], () => o.A.getAdminGuildEntryIds(t)), g = (0, i.yK)([c.Ay, a.A, r.A], () => {
    let t = c.Ay.getFlattenedGuildIds(),
      n = [];
    return t.forEach(t => {
      let l = a.A.getGuild(t);
      null != l && r.A.can(u.xBc.ADMINISTRATOR, l) && l.id !== e && n.push(l)
    }), n
  }, [e]);
  return (0, s.Ay)(() => {
    (async () => {
      x(true), await d.LH(t, g.map(e => e.id)), x(false)
    })()
  }), {
    availableGuilds: l.useMemo(() => g.filter(e => !(null == m ? true : m.has(e.id))), [g, m]),
    addedGuilds: l.useMemo(() => g.filter(e => null == m ? true : m.has(e.id)), [g, m]),
    loading: n
  }
}