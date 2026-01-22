/** Chunk was on 28979 **/
/** chunk id: 700435, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk684013 = require("./684013.js"),
  Chunk419954 = require("./419954.js"),
  Chunk256415 = require("./256415.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.Hn)(Chunk780964.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
  fieldLayout: "horizontal",
  useTitle: () => o.intl.string(o.t.dnvZSg),
  useValue: () => (0, n.bG)([r.default], () => r.default.getAvatarSizeMode()),
  setValue: t => {
    l.A.setAvatarSizeMode(t)
  },
  useOptions: () => [{
    id: "large",
    label: o.intl.string(o.t.YcOxtr),
    value: a.OSZ.LARGE
  }, {
    id: "small",
    label: o.intl.string(o.t.BKIKqx),
    value: a.OSZ.SMALL
  }]
})