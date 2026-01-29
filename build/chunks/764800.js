/** Chunk was on 4670 **/
/** chunk id: 764800, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  $: () => d
}), require("./321073.js");
var Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx");
let o = (() => {
    let e = [a.wN];
    for (let t = 10; t <= a.qh; t += 10) e.push(t);
    return e[e.length - 1] !== a.qh && e.push(a.qh), e
  })(),
  d = (0, Chunk419954.sN)(Chunk780964.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
    useTitle: () => u.intl.string(u.t.yfsrDI),
    useSubtitle: () => u.intl.string(u.t.vlDHdC),
    minValue: Chunk696016.wN,
    maxValue: Chunk696016.qh,
    getInitialValue: () => n.A.getSettings().maxAutoClips,
    onValueRender: e => "".concat(Math.floor(e)),
    asValueChanges: e => l.e6(Math.floor(e)),
    markers: o,
    onMarkerRender: e => "".concat(Math.floor(e))
  })