/** Chunk was on web.js **/
/** chunk id: 765441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk21119 = require("./21119.js"),
  Chunk570287 = require("./570287.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js");
let d = .1;

function f() {
  let e = (0, s.yK)([c.A], () => c.A.getFriendIDs()),
    t = (0, s.yK)([o.A], () => o.A.getUserAffinities().filter(e => {
      let {
        isFriend: t,
        communicationProbability: n,
        vcProbability: r,
        otherUserId: i
      } = e, a = !t && (n >= d || r >= d), s = (0, l.q)(i);
      return a && s
    }).map(e => {
      let {
        otherUserId: t
      } = e;
      return t
    })),
    n = r.useMemo(() => a().uniq([...e, ...t]), [e, t]);
  return (0, s.yK)([u.default], () => n.reduce((e, t) => {
    let n = u.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, []), [n])
}