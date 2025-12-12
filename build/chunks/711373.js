/** Chunk was on 47135 **/
/** chunk id: 711373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js");

function c(e, t) {
  let n = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, null)), [e]),
    c = (0, r.Wu)([i.ZP], () => Object.values(i.ZP.getUsersForGuildEvent(e, t)), [e, t]);
  return (0, l.useMemo)(() => {
    let e = c.reduce((e, t) => (e[t.user_id] = t, e), {}),
      t = n.filter(t => {
        let n = e[t.user_id];
        return null == n || n.response === s.gv.INTERESTED
      }),
      l = c.filter(e => e.response === s.gv.INTERESTED),
      r = new Set,
      i = [],
      o = e => {
        r.has(e.user_id) || (i.push(e), r.add(e.user_id))
      };
    return t.forEach(o), l.forEach(o), i
  }, [n, c])
}