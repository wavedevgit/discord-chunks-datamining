/** Chunk was on 28979 **/
/** chunk id: 764800, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  $: () => T
}), require("./321073.js");
var Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx");
let o = (() => {
    let t = [u.wN];
    for (let e = 10; e <= u.qh; e += 10) t.push(e);
    return t[t.length - 1] !== u.qh && t.push(u.qh), t
  })(),
  T = (0, Chunk419954.sN)(Chunk780964.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
    useTitle: () => a.intl.string(a.t.yfsrDI),
    useSubtitle: () => a.intl.string(a.t.vlDHdC),
    minValue: Chunk696016.wN,
    maxValue: Chunk696016.qh,
    getInitialValue: () => n.A.getSettings().maxAutoClips,
    onValueRender: t => "".concat(Math.floor(t)),
    asValueChanges: t => l.e6(Math.floor(t)),
    markers: o,
    onMarkerRender: t => "".concat(Math.floor(t))
  })