/** Chunk was on 77069 **/
/** chunk id: 792971, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.VOICE_QUALITY_OF_SERVICE_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.uancuJ),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.I1Eoqq),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getQoS())
  },
  setValue: function(t) {
    l.Z.setQoS(t)
  },
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.QOS))
  }
})