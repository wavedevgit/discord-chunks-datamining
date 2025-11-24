/** Chunk was on 9452 **/
/** chunk id: 936890, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk779618 = require("./779618.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.yXvykv),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.YP3ujk),
  useValue: Chunk341569.nq,
  usePredicate: () => {
    let t = (0, Chunk358085.isWindows)(),
      e = (0, Chunk779618.Z)(Chunk131951.Z);
    return module && exports
  },
  setValue: t => r._Q({
    enabled: t,
    trackAnalytics: true
  })
})