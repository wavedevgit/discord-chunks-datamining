/** Chunk was on 4670 **/
/** chunk id: 784086, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  L: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
  useTitle: () => u.intl.string(u.t["4I0qzZ"]),
  useValue: function() {
    return (0, n.bG)([r.A], () => r.A.getExperimentalSoundshare())
  },
  setValue: Chunk827343.A.setExperimentalSoundshare,
  usePredicate: function() {
    return (0, n.bG)([r.A], () => {
      let e = r.A.supportsExperimentalSoundshare(),
        t = r.A.supportsHookSoundshare();
      return e && t
    })
  }
})