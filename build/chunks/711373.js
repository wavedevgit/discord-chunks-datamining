/** Chunk was on 96492 **/
/** chunk id: 711373, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js");

function c(e, n) {
  let t = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
    c = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, n)), [e, n]);
  return (0, l.useMemo)(() => {
    let e = c.reduce((e, n) => (e[n.user_id] = n, e), {}),
      n = t.filter(n => {
        let t = e[n.user_id];
        return null == t || t.response === o.gv.INTERESTED
      }),
      l = c.filter(e => e.response === o.gv.INTERESTED),
      i = new Set,
      r = [],
      s = e => {
        i.has(e.user_id) || (r.push(e), i.add(e.user_id))
      };
    return n.forEach(s), l.forEach(s), r
  }, [t, c])
}