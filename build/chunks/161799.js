/** Chunk was on 77069 **/
/** chunk id: 161799, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => T
}), require("./539854.js");
var Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx");
let o = (() => {
    let t = [r.qb];
    for (let e = 10; e <= r.b0; e += 10) t.push(e);
    return t[t.length - 1] !== r.b0 && t.push(r.b0), t
  })(),
  T = (0, Chunk509613.UO)(Chunk313789.n.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
    useTitle: () => a.intl.string(a.t.yfsrDI),
    useSubtitle: () => a.intl.string(a.t.vlDHdC),
    minValue: Chunk356659.qb,
    maxValue: Chunk356659.b0,
    getInitialValue: () => i.Z.getSettings().maxAutoClips,
    onValueRender: t => "".concat(Math.floor(t)),
    asValueChanges: t => l.W6(Math.floor(t)),
    markers: o,
    onMarkerRender: t => "".concat(Math.floor(t))
  })