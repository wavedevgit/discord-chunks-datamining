/** Chunk was on 30485 **/
/** chunk id: 918053, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  $: () => S
});
var Chunk391973 = require("./391973.js"),
  Chunk395011 = require("./395011.js"),
  Chunk897720 = require("./897720.js"),
  Chunk419954 = require("./419954.js"),
  Chunk555528 = require("./555528.js"),
  Chunk780964 = require("./780964.js"),
  Chunk790076 = require("./790076.jsx"),
  Chunk652215 = require("./652215.js");
require("./392164.js");
var Chunk985018 = require("./985018.jsx");

function A() {
  let t = l.A.getWidgetByType(d.uss.VOICE_V3);
  if (null == t) return null;
  let e = u.A.getWidget(t.id);
  return null != e && (0, s.ZO)(e) ? e : null
}
let S = (0, Chunk419954.sN)(Chunk780964.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
  fieldLayout: "horizontal",
  useTitle: () => T.intl.string(T.t["X/Uyzc"]),
  minValue: Chunk790076.G6 - 1,
  maxValue: Chunk790076.PP,
  markers: Chunk790076.DA,
  onMarkerRender: t => t < o.G6 ? T.intl.string(T.t.nrUzFL) : t,
  getInitialValue: () => {
    var t;
    let e = A();
    return null != (t = null == e ? true : e.meta.voiceStatesMaxShown) ? t : 8
  },
  onValueRender: function(t) {
    return t < o.G6 ? T.intl.string(T.t.nrUzFL) : "".concat(Math.floor(t))
  },
  setValue: t => {
    let e = A();
    null != e && (t < o.G6 ? (0, n.cC)(e.id, {
      voiceStatesMaxShown: false
    }) : (0, n.cC)(e.id, {
      voiceStatesMaxShown: Math.floor(t)
    }))
  }
})