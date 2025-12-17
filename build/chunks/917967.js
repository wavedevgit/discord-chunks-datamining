/** Chunk was on 39442 **/
/** chunk id: 917967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk594190 = require("./594190.js"),
  Chunk321947 = require("./321947.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js");

function u(e) {
  var t;
  let {
    location: n,
    wishlist: u
  } = e, d = (0, c.cZ)({
    location: n
  }), f = (0, r.e7)([l.Z], () => l.Z.getGuild((0, o.ac)())), g = null != (t = null == u ? true : u.items.some(e => (0, a.F)(e))) && t, p = (0, r.e7)([i.ZP], () => i.ZP.getGamesSeen(false, false).some(e => null != e.id && s.RI.has(e.id)));
  return d && (null != f || p || g)
}