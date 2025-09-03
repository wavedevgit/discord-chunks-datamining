/** Chunk was on 93886 **/
/** chunk id: 461762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk436952 = require("./436952.js"),
  Chunk411149 = require("./411149.js");

function o(e) {
  let t = i.qM.useExperiment({
      location: "useChatWallpaperVariant"
    }).enabled,
    n = (0, l.ZP)();
  return (0, a.e7)([s.Z], () => {
    var a, l, i, o;
    let c = s.Z.getWallpaperById(e);
    if (null == c) return;
    let d = c.default;
    if (t && (null == c || null == (a = c.variants) ? true : a.dark) != null) {
      let e = (0, r.ap)(n) ? null == (l = c.variants) ? true : l.light : null == (i = c.variants) ? true : i.dark;
      d = null != e ? e : null == (o = c.variants) ? true : o.dark
    }
    return d
  })
}