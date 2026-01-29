/** Chunk was on web.js **/
/** chunk id: 500380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => u
}), require("./896048.js"), require("./747238.js");
var Chunk96337 = require("./96337.js"),
  Chunk997101 = require("./997101.js"),
  Chunk626584 = require("./626584.js");
let o = new Set(Chunk96337.A.map(e => e.alpha2)),
  s = ["".concat(Chunk997101.d.AN), "".concat(Chunk997101.d.MI), "".concat(Chunk997101.d.TP)],
  l = "1f30e",
  c = new Chunk626584.A("GetFlagEmoji"),
  u = e => {
    if (null == e) return "";
    try {
      if (s.includes(e) || !o.has(e)) return n(256628)("./".concat(l, ".svg"));
      let t = e.toUpperCase().split("").map(e => (127397 + e.charCodeAt(0)).toString(16)).join("-");
      return n(256628)("./".concat(t, ".svg"))
    } catch (e) {
      return c.error("Error getting flag emoji: ", e), ""
    }
  }