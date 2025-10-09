/** Chunk was on 35755 **/
/** chunk id: 723163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js");

function d(e) {
  let t = (0, o.N)(e.id),
    n = (0, a.cj)([c.default, s.Z], () => {
      let e = {};
      for (let n of t.values()) {
        let t = c.default.getUser(n.author_id),
          i = s.Z.isFriend(n.author_id);
        null != t && i && (e[t.id] = n.id)
      }
      return e
    }),
    [l, d] = i.useState([]);
  return i.useEffect(() => {
    let e = r().sortBy(Object.entries(n), e => {
      let [t, n] = e;
      return -u.default.extractTimestamp(n)
    });
    d(r().map(e, e => {
      let [t, n] = e;
      return c.default.getUser(t)
    }).filter(e => null != e))
  }, [n]), {
    friends: l,
    friendsLastPlayed: n
  }
}