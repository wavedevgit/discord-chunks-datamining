/** Chunk was on 30485 **/
/** chunk id: 615748, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  S: () => d
});
var Chunk827343 = require("./827343.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.sN)(Chunk780964.X.VOICE_OUTPUT_VOLUME_SETTING, {
  useTitle: () => o.intl.string(o.t.aUJ062),
  useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
  minValue: 0,
  maxValue: 200,
  getInitialValue: function() {
    let t = r.A.getOutputVolume();
    return (0, u.M)(t)
  },
  onValueRender: function(t) {
    return "".concat(t.toFixed(0), "%")
  },
  asValueChanges: function(t) {
    let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO],
      i = (0, u.w)(t);
    n.A.setOutputVolume(i, {
      analyticsLocations: e
    })
  }
})