/** Chunk was on 77069 **/
/** chunk id: 161799, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => S
}), require("./539854.js");
var Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx");
let o = (() => {
    let t = [Chunk356659.qb];
    for (let e = 10; exports <= Chunk356659.b0; e += 10) module.push(exports);
    return module[module.length - 1] !== Chunk356659.b0 && module.push(Chunk356659.b0), module
  })(),
  S = (0, Chunk509613.UO)(Chunk313789.n.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.yfsrDI),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.vlDHdC),
    minValue: Chunk356659.qb,
    maxValue: Chunk356659.b0,
    getInitialValue: () => Chunk435064.Z.getSettings().maxAutoClips,
    onValueRender: t => "".concat(Math.floor(t)),
    asValueChanges: t => l.W6(Math.floor(t)),
    markers: o,
    onMarkerRender: t => "".concat(Math.floor(t))
  })