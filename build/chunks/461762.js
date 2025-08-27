/** Chunk was on web.js **/
/** chunk id: 461762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk436952 = require("./436952.js"),
  Chunk411149 = require("./411149.js");

function l(e) {
  let t = o.qM.useExperiment({
      location: "useChatWallpaperVariant"
    }).enabled,
    n = (0, a.ZP)();
  return (0, r.e7)([s.Z], () => {
    var r, a, o, l;
    let c = s.Z.getWallpaperById(e);
    if (null == c) return;
    let u = c.default;
    if (t && (null == c || null == (r = c.variants) ? true : r.dark) != null) {
      let e = (0, i.ap)(n) ? null == (a = c.variants) ? true : a.light : null == (o = c.variants) ? true : o.dark;
      u = null != e ? e : null == (l = c.variants) ? true : l.dark
    }
    return u
  })
}