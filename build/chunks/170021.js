/** Chunk was on 4670 **/
/** chunk id: 170021, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  H: () => o
});
var Chunk864145 = require("./864145.js"),
  Chunk419954 = require("./419954.js"),
  Chunk824744 = require("./824744.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.sN)(Chunk780964.X.SOUNDMOJI_VOLUME_SETTING, {
  useTitle: () => u.intl.string(u.t["2JbvKw"]),
  useSubtitle: () => u.intl.string(u.t.INenzY),
  setValue: function(e) {
    let t = (0, s.w)(e);
    r.HO.updateSetting(t)
  },
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let e = r.HO.getSetting();
    return (0, s.M)(e)
  },
  onValueRender: function(e) {
    return "".concat(e.toFixed(0), "%")
  },
  usePredicate: function() {
    return (0, n.X9)({
      location: "SoundmojiVolumeSetting"
    })
  }
})