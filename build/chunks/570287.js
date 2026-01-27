/** Chunk was on web.js **/
/** chunk id: 570287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  q: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk800828 = require("./800828.js"),
  Chunk857071 = require("./857071.js"),
  Chunk253932 = require("./253932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js");
let u = (e, t) => {
  let n = s.default.getId() === e,
    r = null != t && a.A.isLurking(t),
    u = o.$s.getSetting(),
    d = c.A.isFriend(e);
  return !n && !r && (d || null != l.Ay.memberOf(e).find(e => !u.includes(e))) || i.A.getGameFriendsForUser(e).length > 0 && o.Zk.getSetting()
};

function d(e, t) {
  let n = (0, r.bG)([s.default], () => s.default.getId() === e),
    u = (0, r.bG)([a.A], () => null != t && a.A.isLurking(t)),
    d = o.$s.useSetting();
  return (0, r.bG)([c.A, l.Ay, i.A], () => !n && !u && (c.A.isFriend(e) || null != l.Ay.memberOf(e).find(e => !d.includes(e))) || i.A.getGameFriendsForUser(e).length > 0 && o.Zk.getSetting())
}