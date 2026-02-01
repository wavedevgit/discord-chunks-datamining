/** Chunk was on 30485 **/
/** chunk id: 345007, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  o: () => T
});
var Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");
let d = t => "".concat(t.toFixed(0), "px"),
  T = (0, Chunk419954.sN)(Chunk780964.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => o.intl.string(o.t.Q6lKkg),
    useSubtitle: () => o.intl.string(o.t.p7eUrb),
    markers: Chunk381941.qh,
    stickToMarkers: true,
    minValue: Chunk381941.qh["0"],
    maxValue: Chunk381941.qh[Chunk381941.qh.length - 1],
    useDefaultValue: () => r.hH.useSetting() ? a.y5 : a.ES,
    getInitialValue: () => {
      let t = l.A.messageGroupSpacing,
        e = r.hH.getSetting();
      return null != t ? t : e ? a.y5 : a.ES
    },
    onValueRender: d,
    onMarkerRender: d,
    setValue: t => {
      switch (t) {
        case 0:
        case 4:
        case 8:
        case 16:
        case 24:
          (0, n.AC)(t)
      }
    }
  })