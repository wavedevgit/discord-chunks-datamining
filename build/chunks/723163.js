/** Chunk was on web.js **/
/** chunk id: 723163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js");

function d(e) {
  let t = (0, s.N)(e.id),
    n = (0, o.cj)([c.default, l.Z], () => {
      let e = {};
      for (let n of t.values()) {
        let t = c.default.getUser(n.author_id),
          r = l.Z.isFriend(n.author_id);
        null != t && r && (e[t.id] = n.id)
      }
      return e
    }),
    [i, d] = r.useState([]);
  return r.useEffect(() => {
    let e = a().sortBy(Object.entries(n), e => {
      let [t, n] = e;
      return -u.default.extractTimestamp(n)
    });
    d(a().map(e, e => {
      let [t, n] = e;
      return c.default.getUser(t)
    }).filter(e => null != e))
  }, [n]), {
    friends: i,
    friendsLastPlayed: n
  }
}