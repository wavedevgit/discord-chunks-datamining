/** Chunk was on 70127 **/
/** chunk id: 27584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
    n = (0, r.e7)([l.default], () => l.default.getId()),
    c = (0, r.e7)([a.Z], () => a.Z.supports(s.AN.DISABLE_VIDEO)),
    u = (0, r.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]);
  return [(null == e || e === n) && c, u, e => {
    let r = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
    i.Z.setDisableLocalVideo(n, r, t)
  }]
}