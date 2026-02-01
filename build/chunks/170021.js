/** Chunk was on 30485 **/
/** chunk id: 170021, original params: t,e,i (module,exports,require) **/
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
  useTitle: () => a.intl.string(a.t["2JbvKw"]),
  useSubtitle: () => a.intl.string(a.t.INenzY),
  setValue: function(t) {
    let e = (0, s.w)(t);
    r.HO.updateSetting(e)
  },
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let t = r.HO.getSetting();
    return (0, s.M)(t)
  },
  onValueRender: function(t) {
    return "".concat(t.toFixed(0), "%")
  },
  usePredicate: function() {
    return (0, n.X9)({
      location: "SoundmojiVolumeSetting"
    })
  }
})