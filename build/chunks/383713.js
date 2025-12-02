/** Chunk was on 77069 **/
/** chunk id: 383713, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.qs)(Chunk313789.n.VOICE_ECHO_CANCELLATION_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.iWTwu6),
  useDisabled: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z, Chunk463395.Z], () => {
      let t = Chunk131951.Z.getInputDeviceId();
      return Chunk463395.Z.hasEchoCancellation(module)
    })
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getEchoCancellation())
  },
  setValue: function(t) {
    l.Z.setEchoCancellation(t, {
      page: o.ZY5.USER_SETTINGS,
      section: o.jXE.SETTINGS_VOICE_AND_VIDEO
    })
  },
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isInputProfileCustom())
  }
})