/** Chunk was on 6915 **/
/** chunk id: 27584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
    n = (0, r.e7)([i.default], () => i.default.getId()),
    s = (0, r.e7)([o.Z], () => o.Z.supports(c.AN.DISABLE_VIDEO)),
    u = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]);
  return [(null == e || e === n) && s, u, e => {
    let r = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
    l.Z.setDisableLocalVideo(n, r, t)
  }]
}