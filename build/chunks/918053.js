/** Chunk was on 4670 **/
/** chunk id: 918053, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  $: () => A
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

function c() {
  let e = l.A.getWidgetByType(d.uss.VOICE_V3);
  if (null == e) return null;
  let t = a.A.getWidget(e.id);
  return null != t && (0, s.ZO)(t) ? t : null
}
let A = (0, Chunk419954.sN)(Chunk780964.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
  fieldLayout: "horizontal",
  useTitle: () => T.intl.string(T.t["X/Uyzc"]),
  minValue: Chunk790076.G6 - 1,
  maxValue: Chunk790076.PP,
  markers: Chunk790076.DA,
  onMarkerRender: e => e < o.G6 ? T.intl.string(T.t.nrUzFL) : e,
  getInitialValue: () => {
    var e;
    let t = c();
    return null != (e = null == t ? true : t.meta.voiceStatesMaxShown) ? e : 8
  },
  onValueRender: function(e) {
    return e < o.G6 ? T.intl.string(T.t.nrUzFL) : "".concat(Math.floor(e))
  },
  setValue: e => {
    let t = c();
    null != t && (e < o.G6 ? (0, n.cC)(t.id, {
      voiceStatesMaxShown: false
    }) : (0, n.cC)(t.id, {
      voiceStatesMaxShown: Math.floor(e)
    }))
  }
})