/** Chunk was on 77069 **/
/** chunk id: 470516, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  T: () => d
});
var Chunk765250 = require("./765250.js"),
  Chunk610394 = require("./610394.js"),
  Chunk340101 = require("./340101.js"),
  Chunk509613 = require("./509613.js"),
  Chunk355863 = require("./355863.js"),
  Chunk313789 = require("./313789.js"),
  Chunk794704 = require("./794704.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx");

function E() {
  let t = Chunk610394.Z.getWidgetByType(Chunk981631.Odu.VOICE_V3);
  if (null == module) return null;
  let e = Chunk355863.Z.getWidget(module.id);
  return null != exports && (0, Chunk340101.Aw)(exports) ? exports : null
}
let d = (0, Chunk509613.UO)(Chunk313789.n.OVERLAY_VOICE_WIDGET_MAX_USERS, {
  fieldLayout: "horizontal",
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["X/Uyzc"]),
  minValue: Chunk794704.o3 - 1,
  maxValue: Chunk794704.IM,
  getInitialValue: () => {
    var t;
    let e = E();
    return null != (t = null == exports ? true : exports.meta.voiceStatesMaxShown) ? module : Chunk501787.At
  },
  onValueRender: function(t) {
    return t < o.o3 ? c.intl.string(c.t.nrUzFL) : "".concat(Math.floor(t))
  },
  setValue: t => {
    let e = E();
    null != e && (t < o.o3 ? (0, i.zG)(e.id, {
      voiceStatesMaxShown: S.Og
    }) : (0, i.zG)(e.id, {
      voiceStatesMaxShown: Math.floor(t)
    }))
  }
})