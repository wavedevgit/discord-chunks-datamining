/** Chunk was on 77069 **/
/** chunk id: 436623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk722932 = require("./722932.js"),
  Chunk509613 = require("./509613.js"),
  Chunk36703 = require("./36703.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.UO)(Chunk313789.n.SOUNDMOJI_VOLUME_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["2JbvKw"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.INenzY),
  setValue: function(t) {
    let e = (0, s.A)(t);
    r.AY.updateSetting(e)
  },
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let t = Chunk695346.AY.getSetting();
    return (0, Chunk36703.P)(module)
  },
  onValueRender: function(t) {
    return "".concat(t.toFixed(0), "%")
  },
  usePredicate: function() {
    return (0, Chunk722932.X0)({
      location: "SoundmojiVolumeSetting"
    })
  }
})