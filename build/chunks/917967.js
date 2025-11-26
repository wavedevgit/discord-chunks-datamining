/** Chunk was on 13587 **/
/** chunk id: 917967, original params: e,t,r (module,exports,require) **/
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
    location: r,
    wishlist: u
  } = e, d = (0, c.cZ)({
    location: r
  }), f = (0, n.e7)([o.Z], () => o.Z.getGuild((0, s.ac)())), m = null != (t = null == u ? true : u.items.some(e => (0, l.F)(e))) && t, O = (0, n.e7)([i.ZP], () => i.ZP.getGamesSeen(false, false).some(e => null != e.id && a.RI.has(e.id)));
  return d && (null != f || O || m)
}