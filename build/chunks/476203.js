/** Chunk was on 77069 **/
/** chunk id: 476203, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
  useTitle: () => a.intl.string(a.t["4I0qzZ"]),
  useValue: function() {
    return (0, i.e7)([u.Z], () => u.Z.getExperimentalSoundshare())
  },
  setValue: Chunk846027.Z.setExperimentalSoundshare,
  usePredicate: function() {
    return (0, i.e7)([u.Z], () => {
      let t = u.Z.supportsExperimentalSoundshare(),
        e = u.Z.supportsHookSoundshare();
      return t && e
    })
  }
})