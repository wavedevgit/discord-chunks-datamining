/** Chunk was on 9452 **/
/** chunk id: 219247, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.yXvykv),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.YP3ujk),
  useValue: () => {
    let t = (0, Chunk924557.Go)(),
      e = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().decoupledClipsEnabled);
    return module && exports
  },
  usePredicate: () => {
    let t = (0, Chunk924557.Go)(),
      e = Chunk435064.Z.isDecoupledGameClippingEnabled();
    return module && exports
  },
  setValue: t => u._Q({
    enabled: t,
    trackAnalytics: true
  })
})