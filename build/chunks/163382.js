/** Chunk was on 77986 **/
/** chunk id: 163382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk698441 = require("./698441.js"),
  Chunk988794 = require("./988794.js");

function a(e, t) {
  let n = (0, r.yK)([s.Ay], () => Object.values(s.Ay.getUsersForGuildEvent(e, null)), [e]),
    a = (0, r.yK)([s.Ay], () => Object.values(s.Ay.getUsersForGuildEvent(e, t)), [e, t]);
  return (0, l.useMemo)(() => {
    let e = a.reduce((e, t) => (e[t.user_id] = t, e), {}),
      t = n.filter(t => {
        let n = e[t.user_id];
        return null == n || n.response === i.Qi.INTERESTED
      }),
      l = a.filter(e => e.response === i.Qi.INTERESTED),
      r = new Set,
      s = [],
      c = e => {
        r.has(e.user_id) || (s.push(e), r.add(e.user_id))
      };
    return t.forEach(c), l.forEach(c), s
  }, [n, a])
}