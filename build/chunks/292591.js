/** Chunk was on 9452 **/
/** chunk id: 292591, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.cUMdH0),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["6EjbvA"]),
  usePredicate: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isAutomaticGainControlSupported())
  },
  useDisabled: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z, Chunk463395.Z], () => {
      let t = Chunk131951.Z.getInputDeviceId();
      return Chunk463395.Z.hasAutomaticGainControl(module)
    })
  },
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getAutomaticGainControl())
  },
  setValue: function(t) {
    l.Z.setAutomaticGainControl(t, {
      page: o.ZY5.USER_SETTINGS,
      section: o.jXE.SETTINGS_VOICE_AND_VIDEO
    })
  }
})