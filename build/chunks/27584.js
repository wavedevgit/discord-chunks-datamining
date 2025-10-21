/** Chunk was on 26775 **/
/** chunk id: 27584, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Yn.DEFAULT,
    r = (0, n.e7)([i.default], () => i.default.getId()),
    u = (0, n.e7)([c.Z], () => c.Z.supports(a.AN.DISABLE_VIDEO)),
    f = (0, n.e7)([c.Z], () => c.Z.isLocalVideoDisabled(r, t), [r, t]);
  return [(null == e || e === r) && u, f, e => {
    let n = e ? l.ZUi.DISABLED : l.ZUi.MANUAL_ENABLED;
    o.Z.setDisableLocalVideo(r, n, t)
  }]
}