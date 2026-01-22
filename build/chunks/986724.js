/** Chunk was on 33372 **/
/** chunk id: 986724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => o
}), require("./896048.js");
var Chunk260509 = require("./260509.js"),
  Chunk34457 = require("./34457.js"),
  Chunk98318 = require("./98318.js"),
  Chunk855918 = require("./855918.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  let o = new Set;
  for (let e of Object.keys(n.permissionOverwrites)) {
    let l = t[e],
      i = n.permissionOverwrites[e];
    (0, r.U)(l) && (0, u.Uj)(n, i) && o.add(l)
  }
  let s = t[(0, l.af)(e)],
    d = !(0, i._m)(s, a.xBc.VIEW_CHANNEL),
    c = (0, u.AN)(n, n.permissionOverwrites[e.id]);
  if (d && !c)
    for (let e of Object.values(t))(0, r.U)(e) && (0, u.iR)(e) && o.add(e);
  return [...o]
}