/** Chunk was on 4670 **/
/** chunk id: 393685, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  C: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk347481 = require("./347481.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
  useTitle: () => d.intl.string(d.t.cUMdH0),
  useSubtitle: () => d.intl.string(d.t["6EjbvA"]),
  useValue: function() {
    return (0, n.bG)([a.A], () => a.A.getAutomaticGainControl())
  },
  setValue: function(e) {
    l.A.setAutomaticGainControl(e, {
      page: o.liQ.USER_SETTINGS,
      section: o.JJy.SETTINGS_VOICE_AND_VIDEO
    })
  },
  useDisabled: function() {
    return (0, n.bG)([a.A, r.A], () => {
      let e = a.A.getInputDeviceId();
      return r.A.hasAutomaticGainControl(e)
    })
  },
  usePredicate: function() {
    return (0, n.bG)([a.A], () => a.A.isAutomaticGainControlSupported() && a.A.isInputProfileCustom())
  }
})