/** Chunk was on 77069 **/
/** chunk id: 127126, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => T
});
var Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.UO)(Chunk313789.n.VOICE_INPUT_VOLUME_SETTING, {
  useTitle: () => o.intl.string(o.t.Rtsr6w),
  useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let t = u.Z.getInputVolume();
    return (0, r.P)(t)
  },
  asValueChanges: function(t) {
    let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO],
      n = (0, r.A)(t);
    i.Z.setInputVolume(n, {
      analyticsLocations: e
    })
  }
})