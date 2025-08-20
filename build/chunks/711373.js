/** Chunk was on 25046 **/
/** chunk id: 711373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js");

function d(e, t) {
  let n = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
    d = (0, l.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, t)), [e, t]);
  return (0, i.useMemo)(() => {
    let e = d.reduce((e, t) => (e[t.user_id] = t, e), {}),
      t = n.filter(t => {
        let n = e[t.user_id];
        return null == n || n.response === a.gv.INTERESTED
      }),
      i = d.filter(e => e.response === a.gv.INTERESTED),
      l = new Set,
      r = [],
      s = e => {
        l.has(e.user_id) || (r.push(e), l.add(e.user_id))
      };
    return t.forEach(s), i.forEach(s), r
  }, [n, d])
}