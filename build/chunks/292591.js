/** Chunk was on 77069 **/
/** chunk id: 292591, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  f: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
  useTitle: () => T.intl.string(T.t.cUMdH0),
  useSubtitle: () => T.intl.string(T.t["6EjbvA"]),
  useValue: function() {
    return (0, i.e7)([r.Z], () => r.Z.getAutomaticGainControl())
  },
  setValue: function(t) {
    l.Z.setAutomaticGainControl(t, {
      page: o.ZY5.USER_SETTINGS,
      section: o.jXE.SETTINGS_VOICE_AND_VIDEO
    })
  },
  useDisabled: function() {
    return (0, i.e7)([r.Z, u.Z], () => {
      let t = r.Z.getInputDeviceId();
      return u.Z.hasAutomaticGainControl(t)
    })
  },
  usePredicate: function() {
    return (0, i.e7)([r.Z], () => r.Z.isAutomaticGainControlSupported() && r.Z.isInputProfileCustom())
  }
})