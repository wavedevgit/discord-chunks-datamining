/** Chunk was on 44097 **/
/** chunk id: 917967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk594190 = require("./594190.js"),
  Chunk321947 = require("./321947.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js");
let u = new Set([Chunk582113.t9, Chunk582113.h4]);

function d(e) {
  var t;
  let {
    location: n,
    wishlist: s
  } = e, d = (0, c.cZ)({
    location: n
  }), f = (0, r.e7)([l.Z], () => l.Z.getGuild((0, o.ac)())), g = null != (t = null == s ? true : s.items.some(e => (0, a.F)(e))) && t, p = (0, r.e7)([i.ZP], () => i.ZP.getGamesSeen(false, false).some(e => null != e.id && u.has(e.id)));
  return d && (null != f || p || g)
}