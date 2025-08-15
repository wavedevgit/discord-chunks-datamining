/** Chunk was on 98464 **/
/** chunk id: 711373, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js");

function a(e, n) {
  let t = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
    a = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, n)), [e, n]);
  return (0, i.useMemo)(() => {
    let e = a.reduce((e, n) => (e[n.user_id] = n, e), {}),
      n = t.filter(n => {
        let t = e[n.user_id];
        return null == t || t.response === d.gv.INTERESTED
      }),
      i = a.filter(e => e.response === d.gv.INTERESTED),
      l = new Set,
      r = [],
      o = e => {
        l.has(e.user_id) || (r.push(e), l.add(e.user_id))
      };
    return n.forEach(o), i.forEach(o), r
  }, [t, a])
}