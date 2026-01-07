/** Chunk was on 77069 **/
/** chunk id: 139126, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk509613 = require("./509613.js"),
  Chunk237997 = require("./237997.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.Em)(Chunk313789.n.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
  fieldLayout: "horizontal",
  useTitle: () => o.intl.string(o.t.dnvZSg),
  useValue: () => (0, i.e7)([u.default], () => u.default.getAvatarSizeMode()),
  setValue: t => {
    l.Z.setAvatarSizeMode(t)
  },
  useOptions: () => [{
    id: "large",
    label: o.intl.string(o.t.YcOxtr),
    value: a.ipw.LARGE
  }, {
    id: "small",
    label: o.intl.string(o.t.BKIKqx),
    value: a.ipw.SMALL
  }]
})