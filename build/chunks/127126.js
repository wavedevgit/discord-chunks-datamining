/** Chunk was on 77069 **/
/** chunk id: 127126, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk846027 = require("./846027.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.UO)(Chunk313789.n.VOICE_INPUT_VOLUME_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.Rtsr6w),
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let t = Chunk131951.Z.getInputVolume();
    return (0, Chunk36703.P)(module)
  },
  asValueChanges: function(t) {
    let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO],
      n = (0, u.A)(t);
    i.Z.setInputVolume(n, {
      analyticsLocations: e
    })
  },
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.eATD2B), Chunk388032.intl.string(Chunk388032.t["3182VD"]), Chunk388032.intl.string(Chunk388032.t["DGq/PR"])]
})