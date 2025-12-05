/** Chunk was on 77069 **/
/** chunk id: 956853, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.VOICE_SILENCE_WARNING_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["4rsOPQ"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.jtiiCw),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getEnableSilenceWarning())
  },
  setValue: function(t) {
    l.Z.setSilenceWarning(t)
  },
  usePredicate: function() {
    return Chunk358085.isPlatformEmbedded
  }
})