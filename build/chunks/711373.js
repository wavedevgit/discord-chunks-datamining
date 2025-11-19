/** Chunk was on 25046 **/
/** chunk id: 711373, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js");

function c(e, n) {
  let t = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, null)), [e]),
    c = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, n)), [e, n]);
  return (0, l.useMemo)(() => {
    let e = c.reduce((e, n) => (e[n.user_id] = n, e), {}),
      n = t.filter(n => {
        let t = e[n.user_id];
        return null == t || t.response === s.gv.INTERESTED
      }),
      l = c.filter(e => e.response === s.gv.INTERESTED),
      r = new Set,
      i = [],
      o = e => {
        r.has(e.user_id) || (i.push(e), r.add(e.user_id))
      };
    return n.forEach(o), l.forEach(o), i
  }, [t, c])
}