/** Chunk was on web.js **/
/** chunk id: 625929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk205184 = require("./205184.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js");

function d(e) {
  let t = (0, s.s)(e.id),
    n = (0, o.cf)([c.default, l.A], () => {
      let e = {};
      for (let n of t.values()) {
        let t = c.default.getUser(n.author_id),
          r = l.A.isFriend(n.author_id);
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